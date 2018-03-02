const allowedMethods: string[] = ['GET', 'POST', 'PUT', 'OPTIONS'];

export function cors(req, res, next) {
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
}
