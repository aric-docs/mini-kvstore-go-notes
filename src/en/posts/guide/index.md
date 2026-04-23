# Guide

Welcome to the Mini KV Store Go documentation.

## What is Mini KV Store?

Mini KV Store Go is a high-performance, append-only key-value storage engine written in Go, ported from the original
Rust [mini-kvstore-v2](https://github.com/whispem/mini-kvstore-v2).

Core features:

- **Durable** — Append-only log + fsync, crash-safe
- **Segmented** — 16MB auto-rotation, manual compaction
- **O(1) reads** — In-memory HashMap index
- **Bloom Filter** — Fast negative lookups
- **Snapshots** — Quick restart recovery
- **HTTP REST API** — gorilla/mux router, CORS support
- **Multi-tenant** — Namespace isolation + independent token auth
- **JSON Documents** — Dot-path operations for nested field CRUD
- **Blob Storage** — Raw binary file upload/download
