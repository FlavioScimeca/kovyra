import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { DataSource } from 'typeorm';

// Determina quale file .env caricare basato sull'ambiente
const getEnvFilePath = () => {
  const env = process.env.NODE_ENV || 'development';
  const envFilePath = path.resolve(process.cwd(), 'environment', `.env.${env}`);

  if (fs.existsSync(envFilePath)) {
    return envFilePath;
  }

  return path.resolve(process.cwd(), 'environment', '.env.development');
};

// Carica le variabili d'ambiente
dotenv.config({ path: getEnvFilePath() });

export default new DataSource({
  type: 'postgres',
  host: 'localhost', // Usa localhost per CLI migration
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [path.join(__dirname, '..', '**', '*.entity.{ts,js}')],
  migrations: [path.join(__dirname, '..', 'migrations', '*.{ts,js}')],
  migrationsTableName: 'migrations',
  synchronize: false, // Importante: disabilitato per le migrazioni
});
