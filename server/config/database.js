const url = require('url');
const querystring = require('querystring');

// https://github.com/pwnall/node-parse-database-url/blob/master/lib/parse-database-url.js
function parseDatabaseUrl(databaseUrl) {
  if (!databaseUrl) {
    return {};
  }

  const parsedUrl = url.parse(databaseUrl, false, true);
  const config = querystring.parse(parsedUrl.query);

  config.driver = (parsedUrl.protocol).replace(/:$/, '');

  if (parsedUrl.auth) {
    const userPassword = parsedUrl.auth.split(':', 2);
    config.user = userPassword[0];
    if (userPassword.length > 1) {
      config.password = userPassword[1];
    }
  }

  if (parsedUrl.pathname) {
    config.database = parsedUrl.pathname.replace(/^\//, '').replace(/\/$/, '');
  }

  if (parsedUrl.hostname) {
    config.host = parsedUrl.hostname;
  }

  if (parsedUrl.port) {
    config.port = parsedUrl.port;
  }

  return config;
}

const databaseConfig = parseDatabaseUrl(process.env.DATABASE_URL);

module.exports = {
  development: {
    username: databaseConfig.user || 'test_user',
    password: databaseConfig.password || 'test_user',
    database: databaseConfig.database || 'easy_notify',
    host: databaseConfig.host || '0.0.0.0',
    dialect: 'postgres'
  },
  test: {
    username: databaseConfig.user || 'test_user',
    password: databaseConfig.password || 'test_user',
    database: databaseConfig.database || 'easy_notify',
    host: databaseConfig.host || '0.0.0.0',
    dialect: 'postgres'
  },
  production: {
    username: databaseConfig.user,
    password: databaseConfig.password,
    database: databaseConfig.database,
    host: databaseConfig.host,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true
    }
  }
};
