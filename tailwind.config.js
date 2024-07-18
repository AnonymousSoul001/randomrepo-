/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#412A72",
        page: "#7B69A4",
        card: "#350A68",
        "card-hover": "#4f5e74",
        "default-text": "#f1f3f5",
        "blue-accent": "#350A68",
        "blue-accent-hover": "#8871A3",
      },
    },
  },
  plugins: [],
};
