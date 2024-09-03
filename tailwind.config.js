/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'titles': ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

