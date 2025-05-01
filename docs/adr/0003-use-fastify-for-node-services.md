# ADR 0003: Use Fastify for Node.js Services

## Status
Accepted

## Date
2025-05-01

## Context
The system has two Node.js services: `api-gateway` and `notification-service`. Both need fast HTTP handling and a clean plugin architecture.

## Decision
We will use **Fastify** in both Node.js services due to its lightweight design, speed, and support for JSON Schema-based validation.

## Consequences
### Pros
- Very fast compared to Express
- Built-in validation
- Clean plugin model
- Strong community and ecosystem

### Cons
- Smaller developer base than Express
- Some middleware may need adaptation

## Alternatives Considered
- Express (heavier, slower)