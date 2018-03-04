import * as Sequelize from 'sequelize';
import {config} from './config';

export const postgresDB = new Sequelize(config.postgres.uri, {
  define: {
    paranoid: true,
    underscored: true,
    underscoredAll: true,
  },
  dialect: 'pg',
  dialectOptions: {
    ssl: config.postgres.ssl,
  },
  operatorsAliases: false,
  pool: {
    idle: 10000,
    max: 90,
    min: 0,
  },
});

export const AuthClient = postgresDB.define('auth_client', {
  name: {allowNull: false, type: Sequelize.STRING},
  secretHash: {allowNull: false, type: Sequelize.STRING},
}, {
  tableName: 'auth_client',
});

export const Subject = postgresDB.define('subject', {
  hashed_password: {allowNull: false, type: Sequelize.STRING},
}, {
  tableName: 'subject',
});
