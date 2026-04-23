# 指南

欢迎使用 Mini KV Store Go 文档。

## 什么是 Mini KV Store？

Mini KV Store Go 是一个用 Go 编写的高性能、追加写入式键值存储引擎，从 Rust 原版 [mini-kvstore-v2](https://github.com/whispem/mini-kvstore-v2) 移植而来。

核心特性：

- **持久化** — 追加写入日志 + fsync，崩溃安全
- **分段架构** — 16MB 自动轮转，手动压缩回收空间
- **O(1) 读取** — 内存 HashMap 索引
- **Bloom Filter** — 加速不存在键的查询
- **索引快照** — 快速重启恢复
- **HTTP REST API** — gorilla/mux 路由，CORS 支持
- **多租户** — 命名空间隔离 + 独立 Token 认证
- **JSON 文档** — 点路径操作，子字段增删改查
- **Blob 存储** — 原始二进制文件上传下载
