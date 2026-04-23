# JSON 文档 API

支持点路径（dot-path）操作的 JSON 文档存储。基于 `gjson` 和 `sjson` 库。

需要**命名空间 Token** 认证。

## 端点总览

| 方法     | 路由                 | 查询参数          | 说明            |
|--------|--------------------|---------------|---------------|
| GET    | `/{ns}/json`       | —             | 列出所有 JSON 文档键 |
| GET    | `/{ns}/json/{key}` | `?path=a.b.c` | 获取整个文档或子路径    |
| POST   | `/{ns}/json/{key}` | `?path=a.b.c` | 创建/替换文档或设置子路径 |
| DELETE | `/{ns}/json/{key}` | `?path=a.b.c` | 删除整个文档或子路径    |

## 创建 JSON 文档

```bash
curl -X POST {baseURL}/namespaces/my-app/json/config \
  -H "Authorization: Bearer ns_xxx" \
  -H "Content-Type: application/json" \
  -d '{"name":"myapp","version":1,"db":{"host":"localhost","port":5432}}'
```

响应 `201`:

```json
{
  "data": {
    "key": "config",
    "etag": "6a28a913",
    "size": 66,
    "namespace": "my-app"
  },
  "status": 201
}
```

## 获取整个文档

```bash
curl "{baseURL}/namespaces/my-app/json/config" \
  -H "Authorization: Bearer ns_xxx"
```

响应 `200`:

```json
{
  "data": {
    "db": {
      "host": "localhost",
      "port": 5432
    },
    "name": "myapp",
    "version": 1
  },
  "status": 200
}
```

## 获取嵌套字段

```bash
curl "{baseURL}/namespaces/my-app/json/config?path=db.host" \
  -H "Authorization: Bearer ns_xxx"
```

响应 `200`:

```json
{
  "data": "localhost",
  "status": 200
}
```

## 设置嵌套字段

```bash
curl -X POST "{baseURL}/namespaces/my-app/json/config?path=db.host" \
  -H "Authorization: Bearer ns_xxx" \
  -d '"127.0.0.1"'
```

## 设置新路径（自动创建父对象）

```bash
curl -X POST "{baseURL}/namespaces/my-app/json/config?path=cache.ttl" \
  -H "Authorization: Bearer ns_xxx" \
  -d '3600'
```

在空文档 `{}` 上设置 `a.b.c = 123` 会自动创建 `{"a":{"b":{"c":123}}}`。

## 删除路径

```bash
curl -X DELETE "{baseURL}/namespaces/my-app/json/config?path=version" \
  -H "Authorization: Bearer ns_xxx"
```

如果删除后文档变成 `{}`，会自动删除整个文档。

## 删除整个文档

```bash
curl -X DELETE "{baseURL}/namespaces/my-app/json/config" \
  -H "Authorization: Bearer ns_xxx"
```

## 错误响应

| 状态码 | 消息                             | 场景                |
|-----|--------------------------------|-------------------|
| 404 | json document not found        | 文档不存在             |
| 404 | path not found                 | 路径不存在（GET/DELETE） |
| 400 | stored value is not valid JSON | 存储的值不是合法 JSON     |
| 400 | invalid key                    | 键名无效              |
