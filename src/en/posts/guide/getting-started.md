# Getting Started

## Prerequisites

- Go 1.21+
- Make (optional)
- Docker (optional)

## Installation

```bash
git clone https://github.com/whispem/mini-kvstore-go
cd mini-kvstore-go
go mod download
make build
make test
```

## Start the Server

```bash
# Default
make server

# Custom config
PORT=9002 VOLUME_ID=my-vol DATA_DIR=./data go run ./cmd/volume-server

# With authentication
AUTH_TOKEN=mysecret go run ./cmd/volume-server
```

## Your First Request

```bash
# Health check
curl http://localhost:9002/health

# Create namespace (requires global token)
curl -X POST http://localhost:9002/namespaces \
  -H "Authorization: Bearer mysecret" \
  -H "Content-Type: application/json" \
  -d '{"name":"my-app"}'
# Response: {"data":{"name":"my-app","token":"ns_a1b2c3d4e5f6g7h8","created_at":"..."},"status":201}

# Store a KV value (use namespace token)
curl -X POST http://localhost:9002/namespaces/my-app/kv/name \
  -H "Authorization: Bearer ns_a1b2c3d4e5f6g7h8" \
  -d "Alice"

# Get a KV value
curl http://localhost:9002/namespaces/my-app/kv/name \
  -H "Authorization: Bearer ns_a1b2c3d4e5f6g7h8"
# Response: {"data":"Alice","status":200}
```

## REPL CLI

```bash
make run
# > set key Alice
# > get key
# > list
# > stats
# > compact
# > quit
```
