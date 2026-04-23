# 认证模型

双层认证架构，保护不同层级的 API。

## 认证层级

```
请求进入
    │
    ├─ GET /health → 放行（无认证）
    │
    ├─ /namespaces (CRUD) → 全局 Token 认证
    │   └─ Authorization: Bearer <AUTH_TOKEN>
    │
    └─ /namespaces/{ns}/* → 命名空间 Token 认证
        └─ Authorization: Bearer <ns_token>
            ├─ 查找命名空间元数据
            ├─ 对比 Token
            └─ 命名空间不存在 → 404
               Token 不匹配 → 401
```

## 全局认证

通过 `AUTH_TOKEN` 环境变量配置。如果为空，认证中间件直接放行（向后兼容）。

```go
// authMiddleware 检查全局 Token
func authMiddleware(authToken string) func(http.Handler) http.Handler
```

## 命名空间认证

每个命名空间在创建时自动生成独立的 Token。中间件从 URL 提取 `{ns}`，从存储中查找该命名空间的 Token 进行比对。

```go
// nsAuthMiddleware 检查命名空间 Token
func nsAuthMiddleware(storage *BlobStorage) func(http.Handler) http.Handler
```

## 关闭认证

不设置 `AUTH_TOKEN` 环境变量即可。此时全局中间件放行所有请求，但命名空间路由仍会检查命名空间 Token。
