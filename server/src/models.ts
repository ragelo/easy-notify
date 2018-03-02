import * as Sequelize from 'sequelize';
import {config} from './config';

export const postgresDB = new Sequelize(config.postgres.uri, {
  dialect: 'pg',
  dialectOptions: {
    ssl: config.postgres.ssl,
  },
  define: {
    underscored: true,
    underscoredAll: true,
    paranoid: true,
  },
  pool: {
    max: 90,
    min: 0,
    idle: 10000
  },
  operatorsAliases: false
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
