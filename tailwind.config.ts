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
      },
      animation: {
        'title-float': 'title-float 3s ease-in-out infinite',
        'subtitle-float': 'subtitle-float 3s ease-in-out infinite',
        'line-float': 'line-float 2s ease-in-out infinite',
        'line-float-slow': 'line-float 3s ease-in-out infinite',
        'corner-float': 'corner-float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'float-slow': 'float-slow var(--duration) infinite ease-in-out',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'title-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'subtitle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'line-float': {
          '0%, 100%': { 
            transform: 'translateY(0)',
            opacity: '0.5'
          },
          '50%': { 
            transform: 'translateY(-3px)',
            opacity: '0.8'
          },
        },
        'corner-float': {
          '0%, 100%': { 
            transform: 'translateY(0) translateX(0)',
            opacity: '0'
          },
          '50%': { 
            transform: 'translateY(-5px) translateX(-5px)',
            opacity: '1'
          },
        },
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
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;