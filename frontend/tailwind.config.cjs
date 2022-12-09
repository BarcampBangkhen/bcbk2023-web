/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        Falu100:"#880D1E",
        Falu70:"#AC5662",
        Falu20:"#E7CFD2",
        Blond100:"#FFF3C6",
        Blond70:"#FFF7D8",
        Blond20:"#FFFDF4",
        Rusty100:"#DD2D4A",
        Rusty70:"#E86C81",
        Rusty20:"#F8D5DB",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
