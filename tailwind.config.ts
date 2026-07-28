import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        base: { 950: '#05100C', 900: '#081712', 850: '#0B1D17', 800: '#0F251D', 700: '#16332A', 600: '#1E4438', 500: '#2A5C4A' },
        surface: { light: '#FFFFFF', DEFAULT: '#0B1D17', raised: '#112A22' },
        brand: { 50: '#EAFBF3', 100: '#D2F6E4', 200: '#A5EDC9', 300: '#6FDDA8', 400: '#34D399', 500: '#10B981', 600: '#0D9668', 700: '#0A7853', 800: '#0A5F44', 900: '#084D38', glow: '#10B981' },
        ink: { 50: '#F5FBF8', 100: '#E4F1EB', 300: '#A8C4B8', 400: '#7C9A8C', 500: '#5B7A6D' },
        success: '#20C997', warning: '#F5A623', danger: '#F1526C',
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jbmono)', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at 50% 0%, rgba(16,185,129,0.14) 0%, rgba(5,16,12,0) 60%)',
      },
      boxShadow: {
        'glow-sm': '0 0 0 1px rgba(16,185,129,0.15), 0 8px 24px -8px rgba(16,185,129,0.35)',
        'glow-md': '0 0 0 1px rgba(16,185,129,0.2), 0 16px 40px -12px rgba(16,185,129,0.45)',
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
