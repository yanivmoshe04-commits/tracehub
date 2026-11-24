import { createRandomLog } from './generator.ts';

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const countIndex = process.argv.indexOf('--count');
if (countIndex === -1) {
  console.error('Please provide a count using --count <number>');
  process.exit(1);
}
const countText = process.argv[countIndex + 1];
const count = parseInt(countText, 10);
if (Number.isNaN(count) || count <= 0) {
  console.error('Please provide a valid positive number for count');
  process.exit(1);
}

let delayMs = 0;
const rateIndex = process.argv.indexOf('--rate');
if (rateIndex !== -1) {
  const rateText = process.argv[rateIndex + 1];
  const rate = parseInt(rateText, 10);
  if (Number.isNaN(rate) || rate <= 0) {
    console.error('Please provide a valid positive number for rate');
    process.exit(1);
  }
  delayMs = 1000 / rate;
}

for (let i = 0; i < count; i++) {
  const log = createRandomLog();
  await sleep(delayMs);
  console.log(JSON.stringify(log));
}
