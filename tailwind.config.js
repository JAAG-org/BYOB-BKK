/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Boltyn"],
        mono: ["JetBrains Mono"],
      },
      cursor: {
        star: "url('/images/star.svg'), default",
      },
    },
  },
  plugins: [],
};
