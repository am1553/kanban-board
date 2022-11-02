/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "black": "#000112",
      "very-dark-grey": "#20212C",
      "dark-grey": "#2B2C37",
      "dark-lines": "#3E3F4E",
      "medium-grey": "#828FA3",
      "light-lines": "#E4EBFA",
      "light-grey": "#F4F7FD",
      "white": "#FFFFFF",
      "main-purple": "#635FC7",
      "main-purple-hover": "#A8A4FF",
      "red": "#EA5555",
      "red-hover": "#FF9898"
    },
    fontSize: {
      "xl": ["24px", "30px"],
      "l": ["18px", "23px"],
      "m": ["15px", "19px"],
      "s": ["12px", "15px", {letterSpacing: "2.4px"}],
      "body-l": ["13px", "23px"],
      "body-m": ["12px", "15px"]
    }
  },
  plugins: [],
}