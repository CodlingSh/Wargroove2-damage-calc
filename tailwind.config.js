/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "*/**/**/.js"],
  theme: {
    extend: {
      colors: {
        "wargroove-brown": "#ad855a",
        "wargroove-white": "#f4f0e9",
      },
      translate: {
        "offscreen": "101vh",
      }
    },
  },
  plugins: [],
}

