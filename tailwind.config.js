/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#4F46E5",
        "secondary-color": "#312ECB",
        "off-teal": "#E3E2FF",
        "error-color": "#FF006E",
        "black-ish": "#050051",
        "white-ish": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
