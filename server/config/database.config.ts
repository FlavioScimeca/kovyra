import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as fs from 'fs';
import * as path from 'path';

export const getDatabaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const isProduction = configService.get('NODE_ENV') === 'production';

  // Check if we're running inside Docker
  const isRunningInDocker = fs.existsSync('/.dockerenv');

  // In Docker, use the service name, otherwise use the config value
  const dbHost = isRunningInDocker ? 'postgres' : configService.get('DB_HOST');

  return {
    type: 'postgres',
    host: dbHost,
    port: configService.get<number>('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    entities: [path.join(__dirname, '..', '**', '*.entity.{ts,js}')],

    // In sviluppo, synchronize crea automaticamente le tabelle
    // In produzione, usiamo le migrazioni
    synchronize: false,
    logging: configService.get('NODE_ENV') === 'development',

    // Enable migrations in all environments
    migrations: [path.join(__dirname, '..', 'migrations', '*.{ts,js}')],
    migrationsRun: false,
  };
};
