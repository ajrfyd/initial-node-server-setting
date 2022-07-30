import Seqelize from 'sequelize';
import config from '../config/config.js';
import example from './example.js';

const env = process.env.NODE_ENV || 'development';

const db = {};

const { database, username, password } = config[env];

const sequelize = new Seqelize(
  database,
  username,
  password,
  config[env]
);

db.sequelize = sequelize;
db.Seqelize = Seqelize;

db.example = example(sequelize, Seqelize);

export default db;
