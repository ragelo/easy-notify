import {Router} from 'express';

export const AuthRouter: Router = new Router();

AuthRouter.use('/token/refresh', () => {
  // refresh
});

AuthRouter.use('/token/google', (req, res, next) => {
  // body.token + validate token + verify email + if user exist generate and send auth tokens back
});
