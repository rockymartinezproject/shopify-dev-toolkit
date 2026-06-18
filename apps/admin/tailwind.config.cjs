const sharedConfig = require("@shopify-dev-toolkit/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
};
