import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://your-store.myshopify.com/admin/api/2024-04/graphql.json": {
        headers: {
          "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_ACCESS_TOKEN ?? "",
        },
      },
    },
  ],
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/admin.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        skipTypename: true,
        enumsAsTypes: true,
        documentMode: "string",
      },
    },
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
};

export default config;
