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
        'zen-dots': ['var(--font-zen-dots)'],
        'orbitron': ['var(--font-orbitron)'],
        'electrolize': ['var(--font-electrolize)'],
      },
    },
  },
  plugins: [],
}
export default config