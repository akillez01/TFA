/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ancestral: {
          earth: '#0D1B2A',
          ochre: '#FF8C42',
          forest: '#111111',
          gold: '#FF9F1C',
          bark: '#000000',
          sage: '#4EA8DE',
          copper: '#FF6B35',
          clay: '#FF4FA3'
        },
        tech: {
          circuit: '#2EA8FF',
          neon: '#FF5CA8',
          digital: '#1F4B99'
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