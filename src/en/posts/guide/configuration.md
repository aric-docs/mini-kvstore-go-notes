# Configuration

All configuration is via environment variables with sensible defaults.

## Environment Variables

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `PORT` | int | `9002` | HTTP listen port |
| `VOLUME_ID` | string | `vol-1` | Volume identifier |
| `DATA_DIR` | string | `data` | Data storage directory |
| `COMPACTION_THRESHOLD` | int | `5` | Min segments before compaction triggers |
| `COMPACTION_INTERVAL_SECS` | int | `60` | Compaction check interval (seconds) |
| `AUTH_TOKEN` | string | `""` | Global auth token; empty disables auth |
| `MAX_REQUEST_SIZE_MB` | int | `100` | Max request body size |

## Server Timeouts

| Setting | Value |
|---------|-------|
| ReadTimeout | 15s |
| WriteTimeout | 15s |
| IdleTimeout | 60s |
| Shutdown timeout | 15s |
