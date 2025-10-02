/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'eu-blue-soft': '#2b5ea8',
        'eu-yellow-soft': '#f1c21b',
        'eu-bg': '#f7f9fb'
      }
    },
  },
  plugins: [],
}
