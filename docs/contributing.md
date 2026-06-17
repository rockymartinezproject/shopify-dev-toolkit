# Contributing

## Conventional commits

We use [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat(theme): add product spotlight section
fix(admin): correct inventory pagination
chore(deps): upgrade Polaris
```

## Workflow

1. Create a feature branch
2. Make changes
3. Add a changeset if the change affects a publishable package
4. Open a pull request
5. Ensure CI passes

## Changesets

```bash
pnpm changeset
```

Select affected packages and describe the change.
