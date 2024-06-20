import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    "base-100": "#202225",
                    "base-200": "#1d1d21",
                    "primary": "#f97417",
                    'primary-content': '#ffffff',
                    "secondary": "#26C485",
                    "accent": "#9891e3",
                    'base-content': '#ffffff',
                },
            },
        ],
    },
};

export default config;
