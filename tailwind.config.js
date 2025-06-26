/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ancestral: {
          earth: '#8B4513',
          ochre: '#CC7722',
          forest: '#2D5016',
          gold: '#FFD700',
          bark: '#654321',
          sage: '#87A96B',
          copper: '#B87333',
          clay: '#A0522D'
        },
        tech: {
          circuit: '#00D4AA',
          neon: '#39FF14',
          digital: '#0066CC'
        }
      },
      fontFamily: {
        'organic': ['Georgia', 'serif'],
        'modern': ['Inter', 'sans-serif']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'wave': 'wave 2s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        wave: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(1.1)' }
        }
      }
    },
  },
  plugins: [],
};