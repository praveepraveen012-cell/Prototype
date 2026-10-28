/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#173D32',
          dark: '#102A23',
          deep: '#0B1C17',
          light: '#23594A',
          surface: '#1D493C'
        },
        evergreen: {
          DEFAULT: '#102A23',
          dark: '#0B1C17',
          light: '#183C32'
        },
        ivory: {
          DEFAULT: '#F7F3E9',
          light: '#FCFAF5',
          dark: '#ECE5D3',
          muted: '#E3DCB'
        },
        gold: {
          DEFAULT: '#B99A5B',
          light: '#D4BC84',
          dark: '#93783E',
          shimmer: '#E8D5A5',
          border: 'rgba(185, 154, 91, 0.3)'
        },
        sage: {
          DEFAULT: '#DCE4D8',
          light: '#EDF2EB',
          dark: '#BACBB4',
          subtle: 'rgba(220, 228, 216, 0.4)'
        },
        stone: {
          DEFAULT: '#77766D',
          light: '#9B9A90',
          dark: '#58574F',
          muted: '#8D8C83'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Cinzel"', '"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'luxury': '0.22em',
        'subtle': '0.08em',
      },
      boxShadow: {
        'luxury': '0 20px 45px -15px rgba(16, 42, 35, 0.35)',
        'luxury-sm': '0 8px 24px -6px rgba(16, 42, 35, 0.2)',
        'gold-glow': '0 0 25px rgba(185, 154, 91, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B99A5B 0%, #D4BC84 50%, #93783E 100%)',
        'forest-gradient': 'linear-gradient(180deg, rgba(16, 42, 35, 0.95) 0%, rgba(23, 61, 50, 0.98) 100%)',
        'hero-vignette': 'linear-gradient(180deg, rgba(16, 42, 35, 0.4) 0%, rgba(16, 42, 35, 0.2) 40%, rgba(16, 42, 35, 0.85) 100%)',
      }
    },
  },
  plugins: [],
}

