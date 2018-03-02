function normalizePort(val: number | string): number | string {
  const port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
  if (isNaN(port)) {
    return val;
  } else if (port >= 0) {
    return port;
  }
  console.warn(`Invalid server port: ${val}`);
}

export const config = {
  port: normalizePort(process.env.PORT || 9999),
};
