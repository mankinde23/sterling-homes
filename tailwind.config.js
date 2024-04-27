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
        "our-service-text": "rgba(255, 255, 255, 1)",
        "our-servicet": "rgba(255, 255, 255, 0.72)",
        "profile-b": "#F3F3F3",
        "testimonial-text": "#939393",
        "testimonial-b": "#1E1E1E",
        "testimonial-w": "#101010",
        "cars-b": "rgba(16, 16, 16, 0.86)",
        "testimonial-const": "rgba(255, 255, 255, 0.67)",
        "founders-link": "#5C5C5C",
        "founders-socials": "rgba(255, 255, 255, 1)",
        "founders-text": "rgba(255, 255, 255, 0.78)",
      },
    },
    screens: {
      "2xl-max": { max: "2900px" },
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... } mobile 699
    },
  },
  plugins: [],
};
