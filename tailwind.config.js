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
        sans: ["var(--font-ubuntu-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        ubuntu: ["var(--font-ubuntu)", "sans-serif"],
        sansita: ["var(--font-sansita)"],
        kanit: ["var(--font-kanit)", "sans-serif"],
        ruwudu: ["Ruwudu", "serif"],
        "ubuntu-sans": ["var(--font-ubuntu-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
