/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-pause': 'marquee 40s linear infinite paused',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
      },
    },
    fontFamily: {
      ritma: "var(--font-ritma)",
      signifier: "var(--font-signifier)",
      signifierItalic: "var(--font-signifier-italic)",
    }
  },
  plugins: [],
};
