# App deployment checklist

- [ ] Update `shopify.app.toml` with production URLs
- [ ] Configure OAuth redirect URLs in Partner Dashboard
- [ ] Register required webhook subscriptions
- [ ] Set `SHOPIFY_API_KEY` and `SHOPIFY_API_SECRET` in CI/CD secrets
- [ ] Build and test `pnpm build`
- [ ] Deploy server/hosting (e.g., Vercel, Fly.io, Railway)
- [ ] Update app distribution settings in Partner Dashboard
- [ ] Verify App Bridge host and API key match
