/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        azul: '#20B6FF'
      },
      fontFamily: {
        text: 'Chillax-Variable'
      },
      fontSize: {
        title: '3rem'
      }
    }
  },
  plugins: []
}
