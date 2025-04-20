import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

export const getDatabaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const isProduction = configService.get('NODE_ENV') === 'production';

  return {
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    entities: [path.join(__dirname, '..', '**', '*.entity.{ts,js}')],

    // In sviluppo, synchronize crea automaticamente le tabelle
    // In produzione, usiamo le migrazioni
    synchronize: !isProduction,
    logging: configService.get('NODE_ENV') === 'development',

    // Configurazione migrazioni
    migrations: [path.join(__dirname, '..', 'migrations', '*.{ts,js}')],
    migrationsRun: isProduction, // Esegui migrazioni automaticamente in produzione
  };
};
