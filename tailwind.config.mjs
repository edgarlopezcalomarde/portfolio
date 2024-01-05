/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": ".6875rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Mona Sans", "sans-serif"],
      },
      opacity: {
        2.5: "0.025",
        7.5: "0.075",
        15: "0.15",
      },
      colors: {
        "green-mambo": "#577f60",
        "blue-mambo": "#6d9fda",
        "grey-mambo": "#1F2937",
      },
    },
  },
  plugins: [],
};
