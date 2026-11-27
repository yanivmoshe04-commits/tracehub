import type { Log } from './log.ts';

const levels: Log['level'][] = ['info', 'warn', 'error', 'debug'];
const services: string[] = ['checkout-api', 'auth-service', 'payments'];

function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function createRandomLog(): Log {
  const level = pickRandom(levels);

  const log: Log = {
    timestamp: new Date().toISOString(),
    level: level,
    service: pickRandom(services),
    message: `A random ${level} log message`,
  };

  if (Math.random() < 0.5) {
    log.attributes = {
      orderId: String(Math.floor(Math.random() * 100000)),
      durationMs: Math.floor(Math.random() * 1000),
      retried: Math.random() < 0.5,
    };
  }

  return log;
}

export function createErrorLog(message: string, service: string): Log {
  const log: Log = {
    timestamp: new Date().toISOString(),
    level: 'error',
    service,
    message,
    attributes: {
      errorCode: String(Math.floor(Math.random() * 1000)),
      orderId: String(Math.floor(Math.random() * 100000)),
    },
  };

  return log;
}

const errorMessages: string[] = [
  'Failed to process payment',
  'User authentication failed',
  'Database connection error',
  'Timeout while calling external API',
  'Invalid input data received',
];
export function pickBurst(): { service: string; message: string } {
  const service = pickRandom(services);
  const message = pickRandom(errorMessages);

  return { service, message };
}
