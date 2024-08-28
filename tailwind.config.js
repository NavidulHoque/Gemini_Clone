/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #4b90ff, #ff5546)',
      },
    },
    fontFamily: {
      outfitRegular: ["outfit-regular"],
      outfitMedium: ["outfit-medium"]
    }
  },
  plugins: [],
}