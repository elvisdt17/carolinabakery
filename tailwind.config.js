/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f0eade",
        secondary: "#b58e5e",
        accent: "#332416",
      },
    },
  },
  plugins: [],
}

