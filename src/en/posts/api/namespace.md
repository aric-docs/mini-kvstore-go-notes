# Namespace API

Namespaces provide multi-tenant isolation. Each namespace gets its own token.

Requires **global token** auth.

## Create Namespace

```
POST /namespaces
```

```bash
curl -X POST http://localhost:9002/namespaces \
  -H "Authorization: Bearer mysecret" \
  -H "Content-Type: application/json" \
  -d '{"name":"my-app"}'
```

Response `201`:
```json
{"data":{"name":"my-app","token":"ns_a1b2c3d4e5f6g7h8","created_at":"2026-04-23T10:00:00Z"},"status":201}
```

## List Namespaces

```
GET /namespaces
```

Response `200` with array of namespace objects.

## Delete Namespace

```
DELETE /namespaces/{ns}
```

Deletes the namespace and **all its data**.

## Naming Rules

- Regex: `^[a-z0-9][a-z0-9\-_]{0,63}$`
- Lowercase alphanumeric, hyphens, underscores
- Length: 1-64 characters
