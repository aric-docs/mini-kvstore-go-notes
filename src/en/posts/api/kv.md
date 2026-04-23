# KV Storage API

Simple key-value operations. Values stored as raw bytes, returned as JSON strings.

Requires **namespace token** auth.

## Store Value

```
POST /namespaces/{ns}/kv/{key}
```

Response `201` with key metadata (key, etag, size, namespace).

## Get Value

```
GET /namespaces/{ns}/kv/{key}
```

Response `200`: `{"data":"the-value","status":200}`

## Delete Value

```
DELETE /namespaces/{ns}/kv/{key}
```

Response `200`.

## List Keys

```
GET /namespaces/{ns}/kv
```

Response `200`: `{"data":["key1","key2"],"status":200}`

## Key Rules

- Non-empty, max 256 chars
- Cannot start with `_meta:`

## Errors

| Status | Message | When |
|--------|---------|------|
| 404 | key not found | Key doesn't exist |
| 400 | invalid key | Empty key or `_meta:` prefix |
