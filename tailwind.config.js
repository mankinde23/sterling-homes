/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ameretto: ["Ameretto", "sans-serif"],
      },
      colors: {
        "navbar-bg": "rgba(16, 16, 16, 0.41)",
        "nav-text": "#FFFFFF",
        "light-gray": "rgba(211, 211, 211, 0.5)",
        "sterling-theme": "#00D079",
        "about-b": "#101010",
        "about-t": "#000",
        "about-s-b": "#CECECE",
        "about-s-w": "#6F6F6F",
        "about-bg": "#111",
        "our-service": "rgba(255, 255, 255, 0.94)",
        "our-service-b": "rgba(17, 17, 17, 0.88)",
      },
    },
    screens: {
      "2xl-max": { max: "2900px" },
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
