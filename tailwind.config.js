/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#6b46c1',
        },
        blue: {
          500: '#4299e1',
        },
      },
    },
  },
  plugins: [],
}

