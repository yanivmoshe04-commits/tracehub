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
