import {config} from '../src/config';

describe('configuration', () => {
  it('port', () => {
    if (process.env.PORT) {
      expect(config.port).toEqual(process.env.PORT);
    } else {
      expect(config.port).toEqual(9999);
    }
  });
});
