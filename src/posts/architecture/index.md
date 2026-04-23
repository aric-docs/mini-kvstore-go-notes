# 架构

Mini KV Store 采用分层架构：

```
[HTTP Client]
      │
  [HTTP Server (gorilla/mux)]
      │
  [Volume Layer (命名空间 + 认证)]
      │
  [KVStore Engine (分段日志)]
     /  |  \
 [Index][Segments][Bloom Filter]
```

## 分层说明

| 层级 | 包 | 职责 |
|------|-----|------|
| HTTP | `pkg/volume/handlers.go` | 路由、请求解析、响应格式化 |
| 认证 | `pkg/volume/auth.go` | 全局 Token + 命名空间 Token 认证 |
| 存储逻辑 | `pkg/volume/storage.go` | 命名空间 CRUD、KV/Blob/JSON 操作 |
| JSON 操作 | `pkg/volume/json_ops.go` | getByPath / setByPath / deleteByPath |
| 存储引擎 | `pkg/store/engine.go` | 追加写入、段管理、压缩 |
| 索引 | `pkg/store/index.go` | 内存 HashMap（键 → 段位置） |
| Bloom | `pkg/store/bloom.go` | 概率性负查询过滤器 |
| 快照 | `pkg/store/snapshot.go` | 索引持久化（快速重启） |
