# Blob Storage API

Raw binary file operations. GET returns `application/octet-stream`.

Requires **namespace token** auth.

## Upload Blob

```
POST /namespaces/{ns}/blobs/{key}
```

```bash
curl -X POST http://localhost:9002/namespaces/my-app/blobs/avatar.png \
  -H "Authorization: Bearer ns_xxx" \
  --data-binary @avatar.png
```

Response `201` with metadata.

## Download Blob

```
GET /namespaces/{ns}/blobs/{key}
```

Returns raw `application/octet-stream` binary data.

## Delete Blob

```
DELETE /namespaces/{ns}/blobs/{key}
```

Response `204 No Content` (no JSON wrapper).

## List Blob Keys

```
GET /namespaces/{ns}/blobs
```

## KV vs Blob

| Feature | KV | Blob |
|---------|-----|------|
| Storage | Same engine | Same engine |
| GET response | JSON wrapped | Raw binary |
| DELETE response | JSON wrapped | 204 No Content |
| Use for | Strings, config | Files, images, binaries |
