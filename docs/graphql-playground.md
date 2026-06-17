# GraphQL query playground

## Shopify GraphiQL

Use the built-in GraphiQL explorer in your Shopify admin:

```text
https://your-store.myshopify.com/admin/api/2024-04/graphql.json
```

Generate an Admin API access token with the required scopes.

## Local codegen

```bash
pnpm --filter graphql-queries codegen
```

Update `codegen.ts` with your store URL and access token before running.

## Persisted queries

Apollo Client is configured with persisted-query-like behavior by using deterministic query strings. For full persisted queries, integrate `@apollo/persisted-query-lists` in the build step.
