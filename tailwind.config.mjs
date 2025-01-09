/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E6D8CC',
          600: '#996830',
        },
        neutral: {
          100: '#E5E5E5',
          300: '#D9D9D6',
          700: '#444444',
          900: '#2C2C2C',
        },
      },
    },
  },
  plugins: [],
};
