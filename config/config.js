import dotenv from 'dotenv';
dotenv.config();

const { DATABASE_PWD } = process.env;

const config = {
  development: {
    username: 'root',
    password: DATABASE_PWD,
    database: 'example_db',
    host: '127.0.0.1',
    dialect: 'mysql',
  },

  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};

export default config;