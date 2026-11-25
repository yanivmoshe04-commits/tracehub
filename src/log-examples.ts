import type { Log } from './log.ts';

// @ts-expect-error message is required
const _noMessage: Log = {
  timestamp: '2023-01-01T00:00:00.000Z',
  level: 'info',
  service: 'my-service',
  attributes: {
    key1: 'value1',
    key2: 'value2',
  },
};

const _badLevel: Log = {
  timestamp: '2023-01-01T00:00:00.000Z',
  // @ts-expect-error 'eror' is not a valid level
  level: 'eror',
  service: 'my-service',
  message: 'An error occurred',
  attributes: {
    key1: 'value1',
    key2: 'value2',
  },
};

const validLog: Log = {
  timestamp: '2023-01-01T00:00:00.000Z',
  level: 'warn',
  service: 'my-service',
  message: 'A warning occurred',
  attributes: {
    key1: 'value1',
    key2: 'value2',
  },
};

console.log(validLog);
