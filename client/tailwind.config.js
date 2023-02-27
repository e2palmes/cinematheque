/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '600px',
      // => @media (min-width: 800px) { ... }
      'laptop': '1110px',
      // => @media (min-width: 1375px) { ... }
      'desktop': '1500px',
      // => @media (min-width: 1500px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
