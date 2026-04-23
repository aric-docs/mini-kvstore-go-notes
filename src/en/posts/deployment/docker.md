# Docker Deployment

## Single Node

```bash
docker build -t mini-kvstore-go:latest .
docker run -d -p 9002:9002 -v $(pwd)/data:/data -e AUTH_TOKEN=mysecret --name kvstore mini-kvstore-go:latest
```

## 3-Node Cluster

```bash
docker-compose up -d
```

| Node     | Host Port | Volume ID |
|----------|-----------|-----------|
| volume-1 | 9001      | vol-1     |
| volume-2 | 9002      | vol-2     |
| volume-3 | 9003      | vol-3     |

## Health Check

Built into Dockerfile — hits `/health` every 30s.

## Makefile Commands

| Command          | Description            |
|------------------|------------------------|
| `make build`     | Build CLI + server     |
| `make server`    | Build and start server |
| `make test`      | Run tests              |
| `make docker`    | Build Docker image     |
| `make docker-up` | Start docker-compose   |
| `make clean`     | Clean build artifacts  |
