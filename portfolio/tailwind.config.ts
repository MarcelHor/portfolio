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
                    "base-200": "#2f3136",
                    "primary": "#f97417",
                    'primary-content': '#ffffff',
                    "secondary": "#26C485",
                    "accent": "#7E78D2",
                    'base-content': '#ffffff',
                },
            },
        ],
    },
};

export default config;
