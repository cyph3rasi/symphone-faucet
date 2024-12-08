import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'zen-dots': ['var(--font-zen-dots)', 'sans-serif'],
        'orbitron': ['var(--font-orbitron)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config