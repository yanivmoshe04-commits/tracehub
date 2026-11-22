# TraceHub

A logs-first monitoring platform inspired by SigNoz. A learning and portfolio project.

## Current state
- Version 1 is logs only: an app sends logs, TraceHub stores them in ClickHouse, and a React screen searches them.
- Now: stage 1 of 6, TypeScript basics and a fake-log generator.
- Stack: TypeScript (strict). Node.js 26 runs .ts files directly, and tsc checks types. Runs inside WSL (Ubuntu).

## How to help me (I'm learning)
- I write the code. Don't create or edit files unless I explicitly ask.
- Give hints and direction first. Show full code only when I ask for it.
- Explain why, briefly, and point out mistakes and risks in my code.
- For important decisions, show the options and trade-offs, and let me choose.
- Put code, commands and variable names in code blocks, on their own lines.

## Commands
- Run a file: node src/<file>.ts
- Check types: npx tsc