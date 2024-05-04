/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/bg.jpg')",
        gradient: "linear-gradient(to left,#2400ff, #42ff00,#ff0000)",
      },
      backgroundColor: {
        primary: "#6F00A9",
        secondary: "#0B0045",
      },
    },
  },
  plugins: [],
};
