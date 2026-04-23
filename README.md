# Mini KV Store 文档

[mini-kvstore-go](https://github.com/whispem/mini-kvstore-go) 的文档站点，基于 VitePress 构建，支持中英双语。

## 开发

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## 内容结构

```
src/
├── posts/
│   ├── guide/          # 快速开始、配置说明
│   ├── api/            # API 参考（命名空间、KV、Blob、JSON、统计）
│   ├── architecture/   # 存储引擎、命名空间模型、认证
│   └── deployment/     # Docker 部署
├── en/posts/           # English docs
└── index.md            # 首页
```
