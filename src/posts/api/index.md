# API 文档

所有 API 使用统一的 JSON 响应格式：

```json
{"data": <结果>, "status": <HTTP状态码>}
```

## 认证

三层认证模型：

| 层级         | 机制                                   | 适用端点                       |
|------------|--------------------------------------|----------------------------|
| 无          | —                                    | `GET /`, `GET /health`     |
| 全局 Token   | `Authorization: Bearer <AUTH_TOKEN>` | 命名空间 CRUD + `/metrics`     |
| 命名空间 Token | `Authorization: Bearer <ns_token>`   | 所有 `/namespaces/{ns}/*` 路由 |

## CORS

所有响应包含 CORS 头：

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS
Access-Control-Allow-Headers: Authorization, Content-Type
```

## API 分类

- **[命名空间](./namespace.md)** — 创建、列表、删除命名空间
- **[KV 存储](./kv.md)** — 简单键值操作
- **[Blob 存储](./blobs.md)** — 原始二进制文件操作
- **[JSON 文档](./json.md)** — JSON 文档的路径操作
- **[统计监控](./stats.md)** — 健康检查、指标、统计
