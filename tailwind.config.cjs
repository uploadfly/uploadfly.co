/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ["uf-dark"]: "#0b0b0b",
        ["uf-light"]: "#eeecee",
        ["uf-accent"]: "#0B6CEC",
      },
    },
  },
  plugins: [],
};
