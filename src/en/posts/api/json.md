# JSON Document API

Dot-path JSON document operations powered by gjson/sjson.

Requires **namespace token** auth.

## Endpoints

| Method | Route | Query Param | Description |
|--------|-------|-------------|-------------|
| GET | `/{ns}/json` | — | List all JSON document keys |
| GET | `/{ns}/json/{key}` | `?path=a.b.c` | Get whole doc or sub-value |
| POST | `/{ns}/json/{key}` | `?path=a.b.c` | Create/replace doc or set sub-value |
| DELETE | `/{ns}/json/{key}` | `?path=a.b.c` | Delete whole doc or sub-value |

## Examples

```bash
# Create
curl -X POST .../json/config -d '{"name":"myapp","db":{"host":"localhost"}}'

# Get nested
curl ".../json/config?path=db.host"
# {"data":"localhost","status":200}

# Set nested
curl -X POST ".../json/config?path=db.host" -d '"127.0.0.1"'

# Auto-create parent
curl -X POST ".../json/config?path=cache.ttl" -d '3600'
# Creates {"cache":{"ttl":3600}} automatically

# Delete path
curl -X DELETE ".../json/config?path=version"

# Delete whole document
curl -X DELETE ".../json/config"
```

## Behavior

- Empty `path` = operate on entire document
- `setByPath` auto-creates parent objects
- `deleteByPath` removes document if result is `{}`

## Errors

| Status | Message | When |
|--------|---------|------|
| 404 | json document not found | Document doesn't exist |
| 404 | path not found | Path doesn't exist (GET/DELETE) |
| 400 | stored value is not valid JSON | Stored data isn't JSON |
