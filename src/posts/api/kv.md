# KV 存储 API

简单键值操作。值以原始字节存储，响应以 JSON 字符串返回。

需要**命名空间 Token** 认证。

## 存储值

```
POST /namespaces/{ns}/kv/{key}
```

```bash
curl -X POST {baseURL}/namespaces/my-app/kv/name \
  -H "Authorization: Bearer ns_xxx" \
  -d "Alice"
```

响应 `201`:

```json
{
  "data": {
    "key": "name",
    "etag": "a1b2c3d4",
    "size": 5,
    "namespace": "my-app"
  },
  "status": 201
}
```

## 获取值

```
GET /namespaces/{ns}/kv/{key}
```

```bash
curl {baseURL}/namespaces/my-app/kv/name \
  -H "Authorization: Bearer ns_xxx"
```

响应 `200`:

```json
{
  "data": "Alice",
  "status": 200
}
```

## 删除值

```
DELETE /namespaces/{ns}/kv/{key}
```

```bash
curl -X DELETE {baseURL}/namespaces/my-app/kv/name \
  -H "Authorization: Bearer ns_xxx"
```

响应 `200`。

## 列出所有键

```
GET /namespaces/{ns}/kv
```

```bash
curl {baseURL}/namespaces/my-app/kv \
  -H "Authorization: Bearer ns_xxx"
```

响应 `200`:

```json
{
  "data": [
    "name",
    "email"
  ],
  "status": 200
}
```

## 键名规则

- 非空，最长 256 字符
- 不能以 `_meta:` 开头

## 错误响应

| 状态码 | 消息            | 场景                 |
|-----|---------------|--------------------|
| 404 | key not found | 键不存在               |
| 400 | invalid key   | 键名为空或以 `_meta:` 开头 |
