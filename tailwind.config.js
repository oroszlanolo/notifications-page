/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {    
    extend: {
      colors: {
        'primary-red': 'hsl(1, 90%, 64%)',
        'primary-blue': 'hsl(219, 85%, 26%)',
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-100': 'hsl(210, 60%, 98%)',
        'neutral-200': 'hsl(211, 68%, 94%)',
        'neutral-300': 'hsl(205, 33%, 90%)',
        'neutral-400': 'hsl(219, 14%, 63%)',
        'neutral-500': 'hsl(219, 12%, 42%)',
        'neutral-600': 'hsl(224, 21%, 14%)',
      },
  }
  },
  plugins: [],
}
