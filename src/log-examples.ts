import type { Log } from './log.ts';

    // @ts-expect-error
const log: Log = {
    timestamp: '2023-01-01T00:00:00.000Z',
    level: 'info',
    service: 'my-service',
    attributes: {
        key1: 'value1',
        key2: 'value2'
    }
};

const log2: Log = {
    timestamp: '2023-01-01T00:00:00.000Z',
        // @ts-expect-error
    level: 'eror',
    service: 'my-service',
    message: 'An error occurred',
    attributes: {
        key1: 'value1',
        key2: 'value2'
    }
};

const log3: Log = {
    timestamp: '2023-01-01T00:00:00.000Z',
    level: 'warn',
    service: 'my-service',
    message: 'A warning occurred',
    attributes: {
        key1: 'value1',
        key2: 'value2'
    }
};

console.log(log);