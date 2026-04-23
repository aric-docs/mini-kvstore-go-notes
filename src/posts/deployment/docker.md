# Docker 部署

## 单节点

```bash
# 构建镜像
docker build -t mini-kvstore-go:latest .

# 运行
docker run -d \
  -p 9002:9002 \
  -v $(pwd)/data:/data \
  -e AUTH_TOKEN=mysecret \
  --name kvstore \
  mini-kvstore-go:latest
```

镜像使用多阶段构建：`golang:1.21-alpine` 编译 → `alpine:latest` 运行。

## 三节点集群

```bash
docker-compose up -d
```

| 节点       | 主机端口 | 容器端口 | Volume ID |
|----------|------|------|-----------|
| volume-1 | 9001 | 9002 | vol-1     |
| volume-2 | 9002 | 9002 | vol-2     |
| volume-3 | 9003 | 9002 | vol-3     |

```bash
# 查看日志
docker-compose logs -f

# 停止
docker-compose down
```

## 健康检查

Dockerfile 内置健康检查，每 30 秒请求 `/health`：

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:${PORT}/health || exit 1
```

## Makefile 常用命令

| 命令               | 说明                |
|------------------|-------------------|
| `make build`     | 编译 CLI + 服务器      |
| `make server`    | 编译并启动服务器          |
| `make test`      | 运行测试              |
| `make docker`    | 构建 Docker 镜像      |
| `make docker-up` | 启动 docker-compose |
| `make clean`     | 清理构建产物            |
