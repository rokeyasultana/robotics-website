/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      primary: "#AC94FA",
          secondary: "#F8B4D9",
    },
    extend: {},
  },
   plugins: [require("daisyui")],
}
