const sharedConfig = require("@shopify-dev-toolkit/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  content: [
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./templates/**/*.liquid",
    "./layout/**/*.liquid",
  ],
};
