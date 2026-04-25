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
                primary: "#5237f9",
                "primary-foreground": "#ffffff",
                secondary: "rgba(82, 55, 249, 0.1)",
                "secondary-foreground": "#ffffff",
                card: "rgba(255, 255, 255, 0.05)",
                "card-foreground": "#ffffff",
                popover: "rgba(255, 255, 255, 0.05)",
                "popover-foreground": "#ffffff",
                muted: "rgba(255, 255, 255, 0.1)",
                "muted-foreground": "rgba(255, 255, 255, 0.6)",
                accent: "rgba(82, 55, 249, 0.1)",
                "accent-foreground": "#ffffff",
                destructive: "#ef4444",
                border: "rgba(255, 255, 255, 0.1)",
                input: "rgba(255, 255, 255, 0.1)",
                ring: "#5237f9",
            },
            borderRadius: {
                lg: "0.5rem",
                md: "calc(0.5rem - 2px)",
                sm: "calc(0.5rem - 4px)",
            },
            backdropBlur: {
                xs: "2px",
            },
            animation: {
                "scroll-right": "scroll-right 40s linear infinite",
                "scroll-left": "scroll-left 40s linear infinite",
            },
            keyframes: {
                "scroll-right": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "scroll-left": {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;