/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        card: {
          DEFAULT: 'var(--card)',
          hover: 'var(--card-hover)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'text-glow': 'text-glow 3s ease-in-out infinite alternate',
        'border-pulse': 'border-pulse 2s infinite',
        'typing': 'typing 1.2s steps(3) infinite',
      },
      keyframes: {
        'text-glow': {
          '0%': { textShadow: '0 0 4px rgba(255, 62, 66, 0.5)' },
          '100%': { textShadow: '0 0 8px rgba(255, 62, 66, 0.8)' },
        },
        'border-pulse': {
          '0%, 100%': { borderColor: 'var(--border)' },
          '50%': { borderColor: 'var(--accent)' },
        },
        'typing': {
          '0%': { content: '"."' },
          '33%': { content: '".."' },
          '66%': { content: '"..."' },
        },
      },
      transitionDuration: {
        '800': '800ms',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      perspective: {
        '800': '800px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
  },
  plugins: [],
};