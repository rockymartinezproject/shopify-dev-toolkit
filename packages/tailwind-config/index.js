/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./templates/**/*.liquid",
    "./layout/**/*.liquid",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui-components/src/**/*.{ts,tsx}",
  ],
  safelist: [
    "bg-shopify-green",
    "bg-shopify-dark",
    "text-shopify-green",
    "text-white",
    "container-query-sm",
    "container-query-md",
    "container-query-lg",
  ],
  theme: {
    extend: {
      colors: {
        shopify: {
          green: "#008060",
          dark: "#002e25",
          light: "#f6f6f7",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      fontSize: {
        "polaris-2xl": ["2rem", { lineHeight: "2.5rem", fontWeight: "600" }],
        "polaris-xl": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
        "polaris-lg": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "500" }],
        "polaris-md": ["1rem", { lineHeight: "1.5rem" }],
        "polaris-sm": ["0.875rem", { lineHeight: "1.25rem" }],
      },
      spacing: {
        "polaris-1": "0.25rem",
        "polaris-2": "0.5rem",
        "polaris-3": "0.75rem",
        "polaris-4": "1rem",
        "polaris-5": "1.25rem",
        "polaris-6": "1.5rem",
        "polaris-8": "2rem",
        "polaris-10": "2.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
