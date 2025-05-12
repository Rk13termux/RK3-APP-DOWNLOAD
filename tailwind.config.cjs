/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000", // fondo negro
        primary:    "#FF0000"  // rojo para botones/acento
      }
    }
  },
  plugins: []
}
