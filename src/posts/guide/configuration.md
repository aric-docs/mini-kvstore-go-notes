# 配置

通过环境变量配置，所有配置项都有默认值。

## 环境变量

| 变量名                        | 类型     | 默认值     | 说明                |
|----------------------------|--------|---------|-------------------|
| `PORT`                     | int    | `9002`  | HTTP 监听端口         |
| `VOLUME_ID`                | string | `vol-1` | 卷标识符              |
| `DATA_DIR`                 | string | `data`  | 数据存储目录            |
| `COMPACTION_THRESHOLD`     | int    | `5`     | 触发压缩的最小段数         |
| `COMPACTION_INTERVAL_SECS` | int    | `60`    | 压缩检查间隔（秒）         |
| `AUTH_TOKEN`               | string | `""`    | 全局认证 Token，空值禁用认证 |
| `MAX_REQUEST_SIZE_MB`      | int    | `100`   | 请求体最大大小           |

## Docker Compose 示例

```yaml
services:
  volume-1:
    build: .
    ports:
      - "9001:9002"
    environment:
      - PORT=9002
      - VOLUME_ID=vol-1
      - DATA_DIR=/data
      - AUTH_TOKEN=mysecret
      - COMPACTION_THRESHOLD=5
      - COMPACTION_INTERVAL_SECS=60
    volumes:
      - vol1-data:/data
```

## 服务器超时

| 参数           | 值   |
|--------------|-----|
| ReadTimeout  | 15s |
| WriteTimeout | 15s |
| IdleTimeout  | 60s |
| Shutdown 超时  | 15s |
