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
                background: "#ffffff",
                surface: "#fafafa",
                "surface-dark": "#f5f5f5",
                border: "#e5e5e5",
                "text-primary": "#1a1a1a",
                "text-secondary": "#666666",
                "text-muted": "#999999",
                accent: "#2563eb",
                "accent-hover": "#1d4ed8",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                display: ["var(--font-poppins)"],
            },
            spacing: {
                "sidebar": "320px",
            },
        },
    },
    plugins: [],
};

export default config;
