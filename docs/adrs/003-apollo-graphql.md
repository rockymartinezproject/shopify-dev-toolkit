# ADR 003: Apollo Client for GraphQL

## Status

Accepted

## Context

The admin app and shared queries package need strongly typed GraphQL operations.

## Decision

Use Apollo Client 3.9+ with GraphQL Code Generator for TypeScript types. Queries live in `packages/graphql-queries` so both admin and future storefront apps can reuse them.

## Consequences

- Centralized query and fragment definitions.
- Type-safe hooks and response shapes.
- Pagination helpers are framework-agnostic.
