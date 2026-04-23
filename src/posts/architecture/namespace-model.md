# 命名空间隔离

所有数据存储在同一个 `KVStore` 实例中，通过键前缀实现逻辑隔离。

## 键前缀方案

| 类型         | 内部键格式                | 示例                      |
|------------|----------------------|-------------------------|
| 命名空间元数据    | `_meta:ns:{name}`    | `_meta:ns:my-app`       |
| KV/Blob 数据 | `ns:{ns}:{key}`      | `ns:my-app:name`        |
| JSON 文档    | `ns:{ns}:json:{key}` | `ns:my-app:json:config` |

## 命名空间结构

```json
{
  "name": "my-app",
  "token": "ns_a1b2c3d4e5f6g7h8",
  "created_at": "2026-04-23T10:00:00Z"
}
```

Token 格式：`ns_` + 8 字节随机数 = 16 位十六进制。

## 数据隔离机制

- `ListKeysByPrefix("ns:{ns}:")` 实现命名空间内的键扫描
- `DeleteNamespace` 扫描所有 `ns:{name}:*` 键并逐一删除
- `_meta:` 前缀被保留，用户键不允许以此开头
- JSON 文档使用 `ns:{ns}:json:` 子前缀，与普通 KV 键不冲突

## 路由结构

```
r (公共路由)
  GET /health → 无认证

global 子路由器 (全局 Token)
  POST   /namespaces        → 创建命名空间
  GET    /namespaces        → 列出命名空间
  DELETE /namespaces/{ns}   → 删除命名空间
  GET    /metrics           → 全局指标

ns 子路由器 (命名空间 Token)
  /{ns}/kv/*               → KV 操作
  /{ns}/blobs/*             → Blob 操作
  /{ns}/json/*              → JSON 操作
  /{ns}/stats               → 命名空间统计
```
