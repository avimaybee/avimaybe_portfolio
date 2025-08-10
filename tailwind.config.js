/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
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

  			// Shadcn UI overrides
  			background: '#20406a', // deep-sky-blue
  			foreground: '#fafbff', // comet-white
  			card: {
  				DEFAULT: '#427384', // night-gradient-teal-end
  				foreground: '#fafbff' // comet-white
  			},
  			popover: {
  				DEFAULT: '#20406a', // deep-sky-blue
  				foreground: '#fafbff' // comet-white
  			},
  			primary: {
  				DEFAULT: '#ecd7cf', // comet-pink-peach
  				foreground: '#20406a' // deep-sky-blue
  			},
  			secondary: {
  				DEFAULT: '#b08968', // warm-earth-brown
  				foreground: '#fafbff' // comet-white
  			},
  			muted: {
  				DEFAULT: '#6c757d', // desaturated-gray
  				foreground: '#fafbff' // comet-white
  			},
  			accent: {
  				DEFAULT: '#d4af37', // soft-gold
  				foreground: '#20406a' // deep-sky-blue
  			},
  			destructive: {
  				DEFAULT: '#ef4444', // default red
  				foreground: '#fafbff' // comet-white
  			},
  			border: '#ecd7cf', // comet-pink-peach
  			input: '#f8f8f8', // neutral-off-white
  			ring: '#ecd7cf', // comet-pink-peach
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			header: [
  				'Playfair Display',
  				'serif'
  			],
  			body: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			xl: '8px',
  			'2xl': '16px',
  			full: '9999px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'glow-sm': '0 0 15px rgba(236, 215, 207, 0.5)',
  			'glow-lg': '0 0 30px rgba(236, 215, 207, 0.7)',
  			card: '0 4px 20px rgba(0, 0, 0, 0.05)'
  		},
  		transitionProperty: {
  			colors: 'background-color, border-color, color, fill, stroke',
  			transform: 'transform',
  			shadow: 'box-shadow'
  		},
  		transitionDuration: {
  			'200': '200ms',
  			'400': '400ms'
  		}
  	}
  },
  plugins: [function ({ addUtilities }) {
    const newUtilities = {
      '.glass': {
        'backdrop-filter': 'blur(16px)',
        'background-color': 'rgba(255, 255, 255, 0.05)',
        'border': '1px solid rgba(255, 255, 255, 0.1)',
        'border-radius': '16px',
      },
      '.glass-sm': {
        'backdrop-filter': 'blur(8px)',
        'background-color': 'rgba(255, 255, 255, 0.03)',
        'border': '1px solid rgba(255, 255, 255, 0.08)',
        'border-radius': '12px',
      },
    };
    addUtilities(newUtilities, ['responsive']);
  },
      require("tailwindcss-animate")
],
}
