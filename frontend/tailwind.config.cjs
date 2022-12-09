/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        Falu:"#880D1E",
        Blond100:"#FFF3C6",
        Blond70:"#FFF7D8",
        Blond20:"#FFFDF4",
        Rusty: "#DD2D4A",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
