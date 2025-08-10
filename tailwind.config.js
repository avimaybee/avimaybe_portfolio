/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-sky-blue': '#20406a',
        'night-gradient-teal-start': '#20406a',
        'night-gradient-teal-end': '#427384',
        'comet-white': '#fafbff',
        'comet-pink-peach': '#ecd7cf',
        'warm-earth-brown': '#b08968',
        'soft-gold': '#d4af37',
        'neutral-off-white': '#f8f8f8',
        'desaturated-gray': '#6c757d',
      },
      fontFamily: {
        header: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '8px', // For cards
        '2xl': '16px', // For cards
        'full': '9999px', // For pill-shaped buttons
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(236, 215, 207, 0.5)', // For buttons
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)', // For cards
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
        'transform': 'transform',
        'shadow': 'box-shadow',
      },
      transitionDuration: {
        '200': '200ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
