# ADR 001: Monorepo with pnpm and Turborepo

## Status

Accepted

## Context

We need to share code between a Shopify theme, an embedded admin app, and reusable packages.

## Decision

Use pnpm workspaces for package management and Turborepo for task orchestration and caching.

## Consequences

- Fast disk-space efficient installs via pnpm.
- Shared packages are linked locally through `workspace:*`.
- Turbo caches `build`, `lint`, and `typecheck` outputs.
