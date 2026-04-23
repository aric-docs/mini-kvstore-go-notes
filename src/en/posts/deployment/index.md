# Deployment

## Options

- [Docker](./docker.md) — Recommended for production
- [Direct run](./docker.md) — Using Makefile or `go run`

## Graceful Shutdown

Server handles SIGINT/SIGTERM:

1. Stop background compaction
2. Save index snapshot
3. Shutdown HTTP server (15s timeout)
4. Close storage engine
