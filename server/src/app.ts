import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';

const allowedMethods: string[] = ['GET', 'POST', 'PUT', 'OPTIONS'];
export const app: express.Application = express();

app.use(morgan('dev', {
  skip: (req, res) => res.statusCode < 500,
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Just want to host server and client only from one Heroku container
app.use(compression(), express.static(path.join(__dirname, '../../client/dist')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin.toString() : '*');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type');
  if (allowedMethods.find((method: string) => req.headers['access-control-request-method'] === method)) {
    res.header('Access-Control-Allow-Method', req.headers['access-control-request-method'].toString());
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

export default app;
