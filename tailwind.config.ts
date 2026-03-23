import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#3B82F6',
        cta: '#F97316',
        'vibrant-rose': '#EC4899',
        purple: '#8B5CF6',
        dark: '#0F172A',
        background: '#F8FAFC',
        text: '#1E293B',
      },
      fontFamily: {
        heading: ['Righteous', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
