/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "*/**/**/.js"],
  theme: {
    extend: {
      colors: {
        "wargroove-brown": "#ad855a",
        "wargroove-white": "#f4f0e9",
        "wargroove-black": "#3d4265",
        "wargroove-red": "#aa003f",
        "wargroove-blue": "#335eb0",
      },
      translate: {
        "offscreen": "101vh",
      }
    },
  },
  plugins: [],
}

