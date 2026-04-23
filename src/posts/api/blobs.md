# Blob 存储 API

原始二进制文件操作。GET 返回 `application/octet-stream`，适合文件和二进制数据。

需要**命名空间 Token** 认证。

## 上传 Blob

```
POST /namespaces/{ns}/blobs/{key}
```

```bash
curl -X POST {baseURL}/namespaces/my-app/blobs/avatar.png \
  -H "Authorization: Bearer ns_xxx" \
  --data-binary @avatar.png
```

响应 `201`:

```json
{
  "data": {
    "key": "avatar.png",
    "etag": "e5f6g7h8",
    "size": 12345,
    "namespace": "my-app"
  },
  "status": 201
}
```

## 下载 Blob

```
GET /namespaces/{ns}/blobs/{key}
```

```bash
curl {baseURL}/namespaces/my-app/blobs/avatar.png \
  -H "Authorization: Bearer ns_xxx" \
  --output avatar.png
```

返回 `application/octet-stream` 原始二进制数据。

## 删除 Blob

```
DELETE /namespaces/{ns}/blobs/{key}
```

响应 `204 No Content`（与其他 API 不同，不返回 JSON 包装）。

## 列出所有 Blob 键

```
GET /namespaces/{ns}/blobs
```

响应 `200`，返回 JSON 数组。

## KV 与 Blob 的区别

| 特性        | KV                       | Blob                          |
|-----------|--------------------------|-------------------------------|
| 存储        | 相同底层                     | 相同底层                          |
| GET 响应    | JSON 包装 `{"data":"..."}` | 原始 `application/octet-stream` |
| DELETE 响应 | JSON 包装                  | `204 No Content`              |
| 适合        | 字符串、配置值                  | 文件、图片、二进制数据                   |
