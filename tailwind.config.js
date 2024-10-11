/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#222222",
        "primary": "#F3F3F1",
        "secondary": "#13100C"
    }
    },
    fontFamily:{
      "standard": "Studio6"
    },
    fontWeight: {
      "black": 900,
      "extrabold": 800,
      "bold": 700,
      "semibold": 600,
      "medium": 500,
      "normal": 400,
    }
  },
  plugins: [],
}