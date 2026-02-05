# OpenCami 🦎

A feature-rich web client for [OpenClaw](https://github.com/openclaw/openclaw) — forked from [WebClaw](https://github.com/ibelick/webclaw) with additional productivity features.

![OpenCami](https://img.shields.io/badge/OpenClaw-Web_Client-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square)

## ✨ Features

### Core (inherited from WebClaw)
- 🌐 Modern React + Vite web interface
- 🔌 WebSocket connection to OpenClaw Gateway
- 💬 Real-time streaming chat
- 🎨 Clean, responsive design with dark/light mode
- 📱 Mobile-friendly

### New in OpenCami
- 🤖 **Dynamic Model Selector** — Switch between all configured models (Claude, GPT, Grok, etc.)
- 💡 **Smart Follow-ups** — Contextual suggestion buttons after each response
- ⌨️ **Keyboard Shortcuts** — Power-user navigation
- 📤 **Conversation Export** — Download chats as Markdown, JSON, or plain text
- 🗑️ **Safe Delete** — Sessions are soft-deleted (recoverable)

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘K` / `Ctrl+K` | New conversation |
| `⌘/` / `Ctrl+/` | Focus input |
| `Esc` | Close modal/sidebar |
| `⌘⇧C` / `Ctrl+Shift+C` | Copy last response |
| `?` | Show help |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Running OpenClaw Gateway

### Installation

```bash
git clone https://github.com/robbyczgw-cla/opencami.git
cd opencami
npm install
```

### Configuration

Create `.env.local`:

```env
CLAWDBOT_GATEWAY_URL=ws://127.0.0.1:18789
CLAWDBOT_GATEWAY_TOKEN=your_token_here
```

Or set environment variables directly.

### Run

```bash
npm run dev
```

Open `http://localhost:3001`

## 🔧 Production Setup (systemd)

```bash
sudo tee /etc/systemd/system/opencami.service << 'EOF'
[Unit]
Description=OpenCami - Web Client for OpenClaw
After=network.target

[Service]
Type=simple
WorkingDirectory=/path/to/opencami
ExecStart=/usr/bin/npm run dev
Restart=always
RestartSec=5
Environment=NODE_ENV=development
Environment=CLAWDBOT_GATEWAY_TOKEN=your_token_here

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable --now opencami
```

## 🔒 Secure Access with Tailscale

For secure remote access without exposing ports:

```bash
# Serve OpenCami via Tailscale HTTPS
tailscale serve --https=3001 --bg http://127.0.0.1:3001
```

Access via: `https://your-machine.tail-xxx.ts.net:3001`

## 📊 API Endpoints

OpenCami adds these server-side API routes:

| Endpoint | Description |
|----------|-------------|
| `GET /api/models` | List available models from Gateway config |
| `POST /api/follow-ups` | Generate contextual follow-up suggestions |

## 🆚 OpenCami vs WebClaw

| Feature | WebClaw | OpenCami |
|---------|---------|----------|
| Basic Chat | ✅ | ✅ |
| Model Selector | ❌ | ✅ |
| Keyboard Shortcuts | ❌ | ✅ |
| Export Conversations | ❌ | ✅ |
| Follow-up Suggestions | ❌ | ✅ |
| Safe Delete | ❌ | ✅ |

## 🛠️ Tech Stack

- **Framework:** React 19 + TanStack Router
- **Build:** Vite 7
- **Styling:** Tailwind CSS
- **State:** Zustand
- **Backend:** TanStack Start (SSR)

## 🤝 Contributing

PRs welcome! Please:
1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a PR

## 📜 Credits

- Original [WebClaw](https://github.com/ibelick/webclaw) by [@ibelick](https://github.com/ibelick)
- Built for [OpenClaw](https://github.com/openclaw/openclaw)

## 📄 License

MIT License — see [LICENSE](LICENSE)

---

Made with 🦎 by [@robbyczgw-cla](https://github.com/robbyczgw-cla)
