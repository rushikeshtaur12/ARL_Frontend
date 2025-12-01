import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                popcorn: {
                    butter: "#F5E050",
                    caramel: "#C07000",
                    kernel: "#FAF9F6",
                    charred: "#1A1A1A",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-poppins)"],
            },
            animation: {
                "pop-in": "popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
                float: "float 3s ease-in-out infinite",
            },
            keyframes: {
                popIn: {
                    "0%": { opacity: "0", transform: "scale(0.5)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
