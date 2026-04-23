# API Reference

All APIs use a unified JSON response format:

```json
{"data": <result>, "status": <http_status_code>}
```

## Authentication

Three-tier auth model:

| Tier      | Mechanism                            | Endpoints                       |
|-----------|--------------------------------------|---------------------------------|
| None      | —                                    | `GET /`, `GET /health`          |
| Global    | `Authorization: Bearer <AUTH_TOKEN>` | Namespace CRUD + `/metrics`     |
| Namespace | `Authorization: Bearer <ns_token>`   | All `/namespaces/{ns}/*` routes |

## CORS

All responses include CORS headers:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS
Access-Control-Allow-Headers: Authorization, Content-Type
```

## API Categories

- **[Namespaces](./namespace.md)** — Create, list, delete namespaces
- **[KV Storage](./kv.md)** — Simple key-value operations
- **[Blob Storage](./blobs.md)** — Raw binary file operations
- **[JSON Documents](./json.md)** — JSON document path operations
- **[Stats & Monitoring](./stats.md)** — Health, metrics, per-namespace stats
