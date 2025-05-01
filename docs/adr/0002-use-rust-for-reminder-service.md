# ADR 0002: Use Rust for Reminder Service

## Status
Accepted

## Date
2025-05-01

## Context
The `reminder-service` is responsible for creating and publishing reminders to Kafka. This service should be performant, memory-efficient, and ideally have low runtime overhead. I also want to improve my skills in Rust.

## Decision
We will implement `reminder-service` in **Rust** using the **Axum** web framework for its ergonomics and modern async model.

Kafka publishing will be done with the `rdkafka` crate.

## Consequences
### Pros
- High performance and safety guarantees from Rust
- Fast startup and low memory usage
- Great for learning and real-world Rust experience

### Cons
- Slower development speed compared to Node.js
- More verbose code
- Smaller ecosystem for web development than JavaScript

## Alternatives Considered
- Implementing the service in Node.js (would make all services JS-based, but lose performance gains and learning opportunity)