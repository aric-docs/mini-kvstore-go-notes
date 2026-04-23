# Authentication

Two-tier authentication architecture.

## Global Auth

Configured via `AUTH_TOKEN` env var. If empty, auth middleware passes all requests through.

Protects: namespace CRUD, `/metrics`

## Namespace Auth

Each namespace gets an auto-generated token (`ns_` + 16 hex chars). Middleware extracts `{ns}` from URL, looks up the
namespace's token, and compares with the Bearer token.

Protects: all `/namespaces/{ns}/*` routes

## Flow

```
Request → CORS middleware
  → Global auth middleware (for namespace CRUD + metrics)
  → Namespace auth middleware (for /{ns}/* routes)
  → Handler
```

## Disabling Auth

Set `AUTH_TOKEN` to empty (default). Global middleware passes through. Namespace routes still check namespace tokens.
