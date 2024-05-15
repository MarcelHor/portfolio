import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: '#101820',
        primary: '#48E5C2',
        secondary: '#F7B801',
        neutral: '#E5DADA',
        neutralLight: '#A9A9A9',
        neutralDark: '#202020',
        info: '#3B82F6',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#48E5C2",
          "secondary": "#F7B801",
          "accent": "#3B82F6",
          "base-100": "#101820",
          "info": "#3B82F6",
          "success": "#10B981",
          "warning": "#F59E0B",
          "error": "#EF4444",
          "background": "#101820",
          "neutral": "#E5DADA",
        },
      },
    ],
  },
};

export default config;
