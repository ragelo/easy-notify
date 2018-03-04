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
  name: {type: Sequelize.STRING, allowNull: false},
  secretHash: {type: Sequelize.STRING, allowNull: false},
}, {
  tableName: 'auth_client',
});

export const Subject = postgresDB.define('subject', {
  hashed_password: {type: Sequelize.STRING, allowNull: false},
}, {
  tableName: 'subject',
});
