// tslint:disable no-console
import * as http from 'http';
import {Server as HttpServer} from 'http';

import app from './app';
import {config} from './config';
import {postgresDB} from './models';

export async function main(): Promise<any> {
  console.log('Starting server...');
  const application: HttpServer = http.createServer(app);

  try {
    await postgresDB.authenticate();
    await postgresDB.sync();
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred connecting to the database!');
  }
  console.info('Connected to the postgres');

  application.listen(config.port, (): void => {
    console.info(`Server listening on localhost:${config.port}`);
  });

  application.on('error', (error: NodeJS.ErrnoException): void => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const port: number | string = app.get('port');
    const bind: string = (typeof port === 'string') ? `Pipe ${port}` : `Port ${port}`;
    console.error(error.code);
    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`, error);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`, error);
        process.exit(1);
        break;
      default:
        throw error;
    }
  });

  function closeSever(server: HttpServer): void {
    Promise.all([
      //
    ]).then((results: any[]) => {
      let hasErrors = false;
      hasErrors = results.find((elem) => elem);
      server.close(() => {
        process.exit(hasErrors ? 1 : 0);
      });
    }).catch((error) => {
      console.error('Error while closing server.', error);
      server.close(() => {
        process.exit(1);
      });
    });
  }

  process.on('SIGTERM', () => closeSever(application));
  process.on('SIGINT', () => closeSever(application));
}

main();
