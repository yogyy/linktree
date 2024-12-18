/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#d4d5df",
        background: "#21214e",
        primary: "#6662bb ",
        secondary: "#4c4a90",
        accent: "#879dc2",
      },
    },
  },
  plugins: [],
};
