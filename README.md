# 🧩 Reminder System Monorepo

This is a monorepo for a distributed **Reminder System**, built using **Node.js** (Fastify) and **Rust** (Axum), communicating through **Kafka**. Managed with `pnpm` and organized using a `services/` structure.

---

## 📁 Project Structure

```
reminder-system/
├── docs/                        # Documentation, diagrams, ADRs
├── services/                    # All services live here
│   ├── api-gateway/             # Fastify-based API Gateway (Node.js)
│   ├── notification-service/    # (planned)
│   └── reminder-service/        # (planned)
├── package.json                 # Root config
├── pnpm-lock.yaml               # Lockfile
├── pnpm-workspace.yaml          # pnpm workspaces
└── README.md                    # This file
```

---

## 🚀 Getting Started

### 1. Install `pnpm`

If you haven't already:

```bash
npm install -g pnpm
```

### 2. Install All Dependencies

From the root:

```bash
pnpm install
```

### 3. Run the API Gateway

```bash
pnpm dev:gateway
```

Then visit [http://localhost:3000/health](http://localhost:3000/health) to test the gateway.

---

## 🛠 Tech Stack

- **API Gateway**: Node.js + Fastify
- **Planned Services**:
  - Notification (Node.js)
  - Reminder (Rust / Axum)
- **Event Bus**: Kafka (planned)
- **Monorepo Tooling**: `pnpm` with workspaces
- **Languages**: TypeScript & Rust

---

## 🧠 Architecture

See [`docs/architecture.png`](docs/architecture.png) for an overview of how services are structured and communicate via Kafka.

---

## 📜 Decision Records

Architecture Decision Records (ADRs) are stored in [`docs/adr/`](docs/adr/).

Run `make create-adr` for creating a new decision record

---

## ✅ Healthcheck Endpoint

| Route     | Method | Description      |
|-----------|--------|------------------|
| `/health` | GET    | API status check |

---

## 📦 Scripts

| Script            | Description                          |
|-------------------|--------------------------------------|
| `pnpm dev:gateway`| Starts the API Gateway in watch mode |

---

## 🧩 License

MIT License
```