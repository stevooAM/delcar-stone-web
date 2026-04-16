import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#9A7A14', bright: '#c9a84c', light: '#D4C4A0', pale: '#f0e9d6' },
        navy: { DEFAULT: '#1B2B5E', deep: '#0f1a3d', light: '#2E4080' },
        stone: { DEFAULT: '#FFFFFF', dark: '#f0efed' },
        charcoal: '#2C2C2C',
        grey: '#6B6B6B',
        dark: { DEFAULT: '#080e1f', 2: '#0d1530' },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      spacing: {
        '18': '72px',
      },
    },
  },
  plugins: [],
}
export default config
