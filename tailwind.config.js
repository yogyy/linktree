/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#fefefb",
        background: "#1e2124",
        primary: "#7289da ",
        secondary: "#424549",
        accent: "#36393e",
      },
    },
  },
  plugins: [],
};
