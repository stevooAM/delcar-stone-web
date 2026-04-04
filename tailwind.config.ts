import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#8B6D1F', bright: '#c9a84c', light: '#D4C4A0', pale: '#f0e9d6' },
        navy: { DEFAULT: '#1B2B5E', deep: '#0f1a3d', light: '#2E4080' },
        stone: { DEFAULT: '#F7F5F0', dark: '#ede9e0' },
        charcoal: '#2C2C2C',
        grey: '#6B6B6B',
        dark: { DEFAULT: '#0d0b08', 2: '#13100d' },
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
