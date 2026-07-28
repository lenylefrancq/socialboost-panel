import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        base: { 950: '#05070C', 900: '#080B14', 850: '#0B0F1C', 800: '#0F1526', 700: '#161D33', 600: '#1E2740', 500: '#2A3454' },
        surface: { light: '#FFFFFF', DEFAULT: '#0B0F1C', raised: '#111830' },
        brand: { 50: '#EAF1FF', 100: '#D6E4FF', 200: '#AEC9FF', 300: '#7FA8FF', 400: '#4C82FF', 500: '#2E63F2', 600: '#1E49D6', 700: '#1638A8', 800: '#122C82', 900: '#0F2266', glow: '#3D7FFF' },
        ink: { 50: '#F5F7FB', 100: '#E7EBF3', 300: '#A6B0C6', 400: '#7C879F', 500: '#5B6580' },
        success: '#20C997', warning: '#F5A623', danger: '#F1526C',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jbmono)', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at 50% 0%, rgba(61,127,255,0.14) 0%, rgba(5,7,12,0) 60%)',
      },
      boxShadow: {
        'glow-sm': '0 0 0 1px rgba(61,127,255,0.15), 0 8px 24px -8px rgba(61,127,255,0.35)',
        'glow-md': '0 0 0 1px rgba(61,127,255,0.2), 0 16px 40px -12px rgba(61,127,255,0.45)',
        'card': '0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.6)',
      },
      animation: {
        ticker: 'ticker 22s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        ticker: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      borderRadius: { xl2: '1.25rem' },
    },
  },
  plugins: [],
};

export default config;
