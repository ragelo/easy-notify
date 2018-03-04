import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';

import {cors} from './middleware/cors';

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

app.use(cors);

export default app;
