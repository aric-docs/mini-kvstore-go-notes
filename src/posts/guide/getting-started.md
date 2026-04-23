# 快速开始

## 前置条件

- Go 1.21+
- Make（可选）
- Docker（可选）

## 安装

```bash
git clone https://github.com/aric-go/mini-kvstore-go
cd mini-kvstore-go
go mod download
make build
make test
```

## 启动服务器

```bash
# 默认启动
make server

# 自定义配置
PORT=9002 VOLUME_ID=my-vol DATA_DIR=./data go run ./cmd/volume-server

# 启用认证
AUTH_TOKEN=mysecret go run ./cmd/volume-server
```

## 第一个请求

```bash
# 健康检查
curl {baseURL}/health

# 创建命名空间（需要全局 Token）
curl -X POST {baseURL}/namespaces \
  -H "Authorization: Bearer mysecret" \
  -H "Content-Type: application/json" \
  -d '{"name":"my-app"}'
# 返回: {"data":{"name":"my-app","token":"ns_a1b2c3d4e5f6g7h8","created_at":"..."},"status":201}

# 存储 KV 值（使用命名空间 Token）
curl -X POST {baseURL}/namespaces/my-app/kv/name \
  -H "Authorization: Bearer ns_a1b2c3d4e5f6g7h8" \
  -d "Alice"

# 读取 KV 值
curl {baseURL}/namespaces/my-app/kv/name \
  -H "Authorization: Bearer ns_a1b2c3d4e5f6g7h8"
# 返回: {"data":"Alice","status":200}
```

## REPL CLI

```bash
make run
# > set key Alice
# > get key
# > list
# > stats
# > compact
# > quit
```
