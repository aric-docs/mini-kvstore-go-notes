# Namespace Isolation

All data lives in a single KVStore, logically isolated by key prefixes.

## Key Prefix Scheme

| Type | Internal Key | Example |
|------|-------------|---------|
| Metadata | `_meta:ns:{name}` | `_meta:ns:my-app` |
| KV/Blob | `ns:{ns}:{key}` | `ns:my-app:name` |
| JSON | `ns:{ns}:json:{key}` | `ns:my-app:json:config` |

## Mechanism

- `ListKeysByPrefix("ns:{ns}:")` for namespace-scoped key listing
- `DeleteNamespace` scans and deletes all `ns:{name}:*` keys
- `_meta:` prefix reserved, rejected for user keys
- JSON uses `ns:{ns}:json:` sub-prefix to avoid KV collision

## Router Structure

```
Public: GET /health
Global auth: POST/GET/DELETE /namespaces, GET /metrics
Namespace auth: /{ns}/kv/*, /{ns}/blobs/*, /{ns}/json/*, /{ns}/stats
```
