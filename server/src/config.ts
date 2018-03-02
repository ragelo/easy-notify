function normalizePort(val: number | string): number | string {
  const port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
  if (isNaN(port)) {
    return val;
  } else if (port >= 0) {
    return port;
  }
  console.warn(`Invalid server port: ${val}`);
}

const env = process.env.NODE_ENV || 'development';

export const config = {
  env,
  port: normalizePort(process.env.PORT || 9999),
  postgres: {
    ssl: env === 'production',
    uri: process.env.DATABASE_URL || 'postgres://test_user:test_user@127.0.0.1:5432/easy_notify',
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://root@localhost:6379',
  },
  rollbar: {
    token: process.env.ROLLBAR_ACCESS_TOKEN || 'd04efcde14b84445bfeaac69b9fcf370',
    endpoint: process.env.ROLLBAR_ENDPOINT || 'https://api.rollbar.com/api/1/item/',
  }
};
