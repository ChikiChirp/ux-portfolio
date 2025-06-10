/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        sansita: ["var(--font-sansita)"],
        kanit: ["Kanit", "sans-serif"],
        ruwudu: ["Ruwudu", "serif"],
        "ubuntu-sans": ["Ubuntu Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
