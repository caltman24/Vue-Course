/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const purgecss = require("@fullhuman/postcss-purgecss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    purgecss({
      content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    }),
  ],
};
