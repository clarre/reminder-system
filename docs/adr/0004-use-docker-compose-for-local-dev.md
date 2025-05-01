# ADR 0004: Use Docker Compose for Local Development

## Status
Accepted

## Date
2025-05-01

## Context
The system has three microservices and depends on Kafka and Zookeeper. Managing all this manually is inefficient and error-prone during development.

## Decision
We will use **Docker Compose** to orchestrate the services and infrastructure for local development.

## Consequences
### Pros
- Simplifies local startup
- Ensures consistency across environments
- Easy to run the full system for testing or demos

### Cons
- Docker overhead
- Slightly slower dev feedback loop than native processes

## Alternatives Considered
- Manual service start via scripts
- Kubernetes (overkill for now)