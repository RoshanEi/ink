import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Coffee Color Palette
        'coffee-primary': '#8B4513',
        'coffee-secondary': '#D2B48C',
        'coffee-accent': '#F4E4C1',
        'coffee-dark': '#2F1B14',
        'coffee-light': '#FFF8DC',
        'coffee-gold': '#CD853F',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Caveat', 'cursive'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'steam-rise': 'steamRise 4s infinite cubic-bezier(0.4, 0, 0.2, 1)',
        'bean-float': 'beanFloat 8s infinite ease-in-out',
        'liquid-pour': 'liquidPour 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'crema-form': 'cremaForm 3s cubic-bezier(0.23, 1, 0.32, 1) forwards',
      },
      keyframes: {
        steamRise: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.8) blur(2px)',
          },
          '25%': {
            opacity: '1',
            transform: 'translateY(-10px) scale(1) blur(1px)',
          },
          '75%': {
            opacity: '0.7',
            transform: 'translateY(-40px) scale(1.2) blur(2px)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-80px) scale(1.5) blur(4px)',
          },
        },
        beanFloat: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-10px) rotate(180deg)',
          },
        },
        liquidPour: {
          '0%': {
            transform: 'scaleY(0)',
            transformOrigin: 'top',
          },
          '100%': {
            transform: 'scaleY(1)',
            transformOrigin: 'top',
          },
        },
        cremaForm: {
          '0%': {
            transform: 'scale(0) rotate(0deg)',
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1) rotate(360deg)',
            opacity: '0.8',
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'coffee': '0 8px 25px rgba(139, 69, 19, 0.15)',
        'coffee-lg': '0 16px 50px rgba(139, 69, 19, 0.2)',
      },
      transitionTimingFunction: {
        'coffee': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'steam': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'pour': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
};

export default config;