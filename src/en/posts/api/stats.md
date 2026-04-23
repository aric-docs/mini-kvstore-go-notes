# Stats & Monitoring

## Health Check (no auth)

```
GET /health
```

Returns: status, volume_id, keys, segments, total_mb, uptime_secs.

## Global Metrics (global token)

```
GET /metrics
```

Returns: total_keys, total_segments, total_bytes, avg_value_size_bytes, etc.

## Namespace Stats (namespace token)

```
GET /namespaces/{ns}/stats
```

Returns: namespace, keys, total_bytes for that namespace.
