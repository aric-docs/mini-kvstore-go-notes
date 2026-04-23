# 统计与监控

## 健康检查（无需认证）

```
GET /health
```

```bash
curl {baseURL}/health
```

响应 `200`:

```json
{
  "data": {
    "status": "healthy",
    "volume_id": "vol-1",
    "keys": 10,
    "segments": 2,
    "total_mb": 0.05,
    "uptime_secs": 3600
  },
  "status": 200
}
```

## 全局指标（需要全局 Token）

```
GET /metrics
```

```bash
curl {baseURL}/metrics \
  -H "Authorization: Bearer mysecret"
```

响应 `200`:

```json
{
  "data": {
    "total_keys": 10,
    "total_segments": 2,
    "total_bytes": 52428,
    "total_mb": 0.05,
    "active_segment_id": 1,
    "oldest_segment_id": 0,
    "volume_id": "vol-1",
    "uptime_secs": 3600,
    "avg_value_size_bytes": 5242.8
  },
  "status": 200
}
```

## 命名空间统计（需要命名空间 Token）

```
GET /namespaces/{ns}/stats
```

```bash
curl {baseURL}/namespaces/my-app/stats \
  -H "Authorization: Bearer ns_xxx"
```

响应 `200`:

```json
{
  "data": {
    "namespace": "my-app",
    "keys": 5,
    "total_bytes": 10240
  },
  "status": 200
}
```
