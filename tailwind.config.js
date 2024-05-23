module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // Enable dark mode based on a class
  theme: {
    extend: {
      colors: {
        primary: "#ff69b4",
        secondary: "#8a2be2",
        background: "#000000",
        foreground: "#ffffff",
        accent: "#00ffff",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
