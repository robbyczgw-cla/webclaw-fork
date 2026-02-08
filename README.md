# WebClaw

![Cover](https://raw.githubusercontent.com/ibelick/webclaw/main/apps/webclaw/public/cover.jpg)

Fast web client for OpenClaw.

[webclaw.dev](https://webclaw.dev)

Currently in beta.

## Setup

Create `apps/webclaw/.env.local` with `CLAWDBOT_GATEWAY_URL` and either
`CLAWDBOT_GATEWAY_TOKEN` (recommended) or `CLAWDBOT_GATEWAY_PASSWORD`. These map
to your OpenClaw Gateway auth (`gateway.auth.token` or `gateway.auth.password`).
Default URL is `ws://127.0.0.1:18789`. Docs: https://docs.openclaw.ai/gateway

```bash
pnpm install
pnpm dev
```
