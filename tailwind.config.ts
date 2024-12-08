import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'spicy-rice': ['var(--font-spicy-rice)', 'cursive'],
        'unbounded': ['var(--font-unbounded)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        'float-slow': 'float-slow var(--duration) infinite ease-in-out',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'float-slow': {
          '0%': { 
            transform: 'translateY(100vh) rotate(0deg) scale(1)',
            opacity: '0'
          },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': {
            transform: 'translateY(-20vh) rotate(360deg) scale(1.5)',
            opacity: '0'
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;