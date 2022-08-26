/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fcba03'
      }
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        '.grid-cards' : {
          gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`
        },
      }
      addUtilities(utilities)
    })
  ],
}
