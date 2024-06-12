// import { Pool } from 'pg';
import { Sequelize } from 'sequelize';
import credentials  from '../common/credentials';
import dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize({
    username: credentials.postgres.USERNAME,

    host: credentials.postgres.HOST,
    database: credentials.postgres.DATABASE,
    password: credentials.postgres.PASSWORD,
    port: credentials.postgres.DBPORT,
    dialect: "postgres",
});
sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
export default sequelize;
