# Theme customization guide

## Tailwind CSS

The theme consumes `@shopify-dev-toolkit/tailwind-config`. Run the watch task during development:

```bash
pnpm --filter theme tailwind:watch
```

## Sections

Sections live in `apps/theme/sections/`. Each section should include a valid `{% schema %}` block and at least one preset.

## Metafields

Use `product.metafields.custom.<key>` to render structured product data. Define metafield definitions in the Shopify admin under **Settings > Custom data**.

## Responsive images

Always use the `responsive-image` snippet to get `srcset` and lazy loading.

## Theme Check

```bash
pnpm --filter theme lint
```
