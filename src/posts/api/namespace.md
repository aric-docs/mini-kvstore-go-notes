# 命名空间 API

命名空间提供多租户隔离。每个命名空间有独立的 Token。

需要**全局 Token** 认证。

## 创建命名空间

```
POST /namespaces
```

```bash
curl -X POST http://localhost:9002/namespaces \
  -H "Authorization: Bearer mysecret" \
  -H "Content-Type: application/json" \
  -d '{"name":"my-app"}'
```

响应 `201`:
```json
{"data":{"name":"my-app","token":"ns_a1b2c3d4e5f6g7h8","created_at":"2026-04-23T10:00:00Z"},"status":201}
```

Token 格式为 `ns_` + 16 位十六进制字符，自动生成。

## 列出所有命名空间

```
GET /namespaces
```

```bash
curl http://localhost:9002/namespaces \
  -H "Authorization: Bearer mysecret"
```

响应 `200`:
```json
{"data":[{"name":"my-app","token":"ns_a1b2c3d4e5f6g7h8","created_at":"..."}],"status":200}
```

## 删除命名空间

```
DELETE /namespaces/{ns}
```

```bash
curl -X DELETE http://localhost:9002/namespaces/my-app \
  -H "Authorization: Bearer mysecret"
```

响应 `200`。删除命名空间会同时删除该命名空间下的所有数据。

## 命名规则

- 正则：`^[a-z0-9][a-z0-9\-_]{0,63}$`
- 小写字母、数字、连字符、下划线
- 长度 1-64 字符
