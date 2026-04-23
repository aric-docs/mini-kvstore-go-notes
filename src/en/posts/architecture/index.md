# Architecture

Layered design:

```
[HTTP Client]
      │
  [HTTP Server (gorilla/mux)]
      │
  [Volume Layer (namespaces + auth)]
      │
  [KVStore Engine (segmented log)]
     /  |  \
 [Index][Segments][Bloom Filter]
```

| Layer         | Package                  | Responsibility                                     |
|---------------|--------------------------|----------------------------------------------------|
| HTTP          | `pkg/volume/handlers.go` | Routing, request/response                          |
| Auth          | `pkg/volume/auth.go`     | Global + namespace token auth                      |
| Storage Logic | `pkg/volume/storage.go`  | Namespace CRUD, KV/Blob/JSON ops                   |
| JSON Ops      | `pkg/volume/json_ops.go` | getByPath / setByPath / deleteByPath               |
| Engine        | `pkg/store/engine.go`    | Append-only writes, segment management, compaction |
| Index         | `pkg/store/index.go`     | In-memory HashMap (key → segment location)         |
| Bloom         | `pkg/store/bloom.go`     | Probabilistic negative-lookup filter               |
| Snapshot      | `pkg/store/snapshot.go`  | Index persistence for fast restart                 |
