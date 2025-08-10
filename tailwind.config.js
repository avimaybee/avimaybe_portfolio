/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-deep-sky-blue': '#20406a',
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
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(236, 215, 207, 0.5)',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
    },
  },
  plugins: [],
}
