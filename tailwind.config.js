const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          main: '#f2f1f0',
          secondary: '#ffffff'
        },
        foreground: {
          main: '#fafafa'
        },
        'font-color': {
          header: '#333333'
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}

