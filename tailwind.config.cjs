/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        emon: ["Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
