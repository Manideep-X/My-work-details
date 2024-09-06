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
      transitionTimingFunction: {
        'slo-to-fast': 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
      },
    },
  },
  plugins: [],
}

