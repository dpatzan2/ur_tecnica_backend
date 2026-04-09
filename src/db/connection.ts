import 'dotenv/config';
import { Sequelize } from 'sequelize';

const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD ?? '';
const host = process.env.DB_HOST ?? '127.0.0.1';
const port = Number(process.env.DB_PORT ?? 3306);

if (!database || username === undefined) {
  throw new Error(
    'Faltan variables de entorno: DB_NAME y DB_USER son obligatorias.',
  );
}

export const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect: 'mysql',
  logging: false,
});
