# TraceHub

A logs-first monitoring platform, inspired by [SigNoz](https://signoz.io).

Apps send their logs to TraceHub, which stores them in ClickHouse and lets developers search them. When something breaks, they can see what happened and why.

**Status:** work in progress. Right now TraceHub has a fake-log generator: you choose how many logs to create, how fast, and whether to simulate error bursts.

## Version 1 (in progress)

- Receive logs from apps over HTTP
- Store them in ClickHouse and delete old logs automatically
- Search them on a log screen by time, level, service and text
- Handle about 3,000 logs per second at peak without losing any

## Tech stack

TypeScript and Node.js. Planned: ClickHouse, PostgreSQL and React.

## Getting started

You need [Node.js](https://nodejs.org) 22.18 or newer (for example from nodejs.org, or with nvm) and Git.

1. Clone the repo and go into its folder:

   ```
   git clone https://github.com/yanivmoshe04-commits/tracehub.git
   cd tracehub
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Generate 20 logs:

   ```
   node src/generate.ts --count 20
   ```

   Each log is printed as one line of JSON.

## Generating logs

| Flag          | Required | What it does                                                                 |
| ------------- | -------- | ---------------------------------------------------------------------------- |
| `--count <n>` | yes      | How many logs to create                                                      |
| `--rate <n>`  | no       | How many logs per second. Without it, logs are created as fast as possible   |
| `--bursts`    | no       | Sometimes starts an error burst: 10–30 errors in a row from the same service |

Example: 1,000 logs at 50 per second, with error bursts:

```
node src/generate.ts --count 1000 --rate 50 --bursts
```

## Development

Run these before every commit:

```
npx tsc            # type check
npm run lint       # find likely mistakes
npm run format     # format the code with Prettier
```
