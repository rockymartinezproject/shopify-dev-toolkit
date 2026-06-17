# ADR 002: Tailwind CSS with Polaris design tokens

## Status

Accepted

## Context

Polaris covers most admin UI needs, but the Shopify theme requires utility-first CSS.

## Decision

Use Tailwind CSS with a shared preset that encodes Shopify brand colors and Polaris-like typography and spacing scales.

## Consequences

- Consistent tokens across theme and admin.
- Container queries via official Tailwind plugin.
- Safelist protects dynamic classes used in Liquid files.
