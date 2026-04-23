# 部署

## 部署方式

- [Docker 部署](./docker.md) — 推荐的生产环境部署方式
- [直接运行](./docker.md) — 使用 Makefile 或 go run

## 优雅关闭

服务器捕获 SIGINT/SIGTERM 信号：

1. 停止后台压缩任务
2. 保存索引快照
3. 关闭 HTTP 服务器（15s 超时）
4. 关闭存储引擎
