export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        // montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideInLeft: 'slideInLeft 0.5s ease-out',
      },
      colors: {
        'brand-black': "#1a1a1a",
        'brand-gray-dark': "#2a2a2a",
        'brand-gray-light': "#f5f5f5",
        'brand-blue': "#0000CD",
        'brand-blue-dark': "#000080",
        'brand-midnight': '#191970'
      },
    },
  },
  plugins: [],
};
