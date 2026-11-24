# TraceHub

A logs-first monitoring platform, inspired by [SigNoz](https://signoz.io).

What is TraceHub:
Apps send their logs to TraceHub, which stores them in ClickHouse and lets developers search them. When something breaks, they can see what happened and why.

**Status:** work in progress...

## Version 1 (in progress)

- Receive logs from apps over HTTP
- Store them in ClickHouse and delete old logs automatically
- Search them on a log screen by time, level, service and text
- Handle about 3,000 logs per second at peak without losing any
