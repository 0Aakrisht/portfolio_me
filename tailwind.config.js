/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Sets Plus Jakarta Sans as the main globally used font (minimal & clean)
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        // Uses Space Grotesk for mono/edgy typography (cool GenZ vibe)
        mono: ['"Space Grotesk"', 'monospace'], 
      },
      colors: {
        'primary': '#fafafa', // Ensures your background stays clean
        'text-main': '#111111',
        'text-muted': '#737373',
      }
    },
  },
  plugins: [],
}