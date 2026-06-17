# shopify-dev-toolkit

Production-ready Shopify development toolkit with Liquid 2.0 sections, GraphQL Admin API queries, React Polaris components, and Tailwind CSS theme scaffolding.

## Monorepo structure

```text
shopify-dev-toolkit/
├── apps/
│   ├── theme/      # Shopify Online Store 2.0 theme
│   └── admin/      # Shopify Admin embedded app
├── packages/
│   ├── graphql-queries/   # Shared GraphQL operations
│   ├── ui-components/     # Shared React components
│   └── tailwind-config/   # Shared Tailwind preset
├── tooling/
│   ├── eslint-config/
│   ├── typescript-config/
│   └── prettier-config/
├── docs/
└── .github/workflows/
```

## Prerequisites

- [Node.js](https://nodejs.org/) 20+ (use `.nvmrc`)
- [pnpm](https://pnpm.io/) 9+
- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) 3.x
- [ngrok](https://ngrok.com/) account for local app development

## Quick start

```bash
# Install dependencies
pnpm install

# Run theme and admin concurrently
pnpm dev

# Build all packages and apps
pnpm build

# Lint and typecheck
pnpm lint
pnpm typecheck
```

## Environment variables

Copy `.env.example` files and fill in your credentials:

- `apps/theme/.env` — store and theme token
- `apps/admin/.env` — API keys, scopes, and tunnel host

See [docs/environment.md](docs/environment.md) for details.

## Documentation

- [Architecture Decision Records](docs/adrs/)
- [Theme customization guide](docs/theme-customization.md)
- [App deployment checklist](docs/app-deployment-checklist.md)
- [GraphQL playground setup](docs/graphql-playground.md)
- [Contributing guidelines](docs/contributing.md)

## License

MIT
