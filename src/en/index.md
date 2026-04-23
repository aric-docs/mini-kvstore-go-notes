---
layout: home

hero:
  name: 'Mini KV Store'
  text: 'A production-ready, segmented key-value storage engine written in Go'
  actions:
    - theme: brand
      text: Get Started
      link: /en/posts/guide/getting-started.md
    - theme: alt
      text: API Reference
      link: /en/posts/api/index.md

features:
  - icon: 🗄️
    title: Segmented Log Storage
    details: Append-only segmented architecture with 16MB auto-rotation, CRC32 checksums, fsync durability
  - icon: ⚡
    title: O(1) Fast Reads
    details: In-memory HashMap index + Bloom Filter for fast lookups with millisecond response times
  - icon: 🏢
    title: Namespace Isolation
    details: Multi-tenant support with independent token auth per namespace and complete data isolation
  - icon: 📄
    title: JSON Document Operations
    details: Dot-path operations (a.b.c) for getting, setting, and deleting nested JSON fields
  - icon: 🔒
    title: Two-Tier Auth
    details: Global token + per-namespace token for flexible access control
  - icon: 🐳
    title: Docker Ready
    details: Multi-stage build image, docker-compose 3-node cluster, health checks included
---
