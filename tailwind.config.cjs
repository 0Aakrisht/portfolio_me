module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        'xl-2': '20px',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      colors: {
        primary: '#fafafa',
        secondary: '#f4f4f5',
        accent: '#0066cc',
        'text-main': '#0f172a',
        'text-muted': '#64748b',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #bae6fd 0deg, #e9d5ff 180deg, #fbcfe8 360deg)',
      }
    },
  },
  plugins: [],
}
