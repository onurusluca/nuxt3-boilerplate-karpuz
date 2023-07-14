import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: [
    "components/**/*.{vue,js}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "plugins/**/*.{js,ts}",
    "app.vue",
    "error.vue",
  ],
  theme: {
    extend: {
      colors: {
        /*   boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      } */

        // Text
        "text-100": "#0f172a",
        "text-200": "#a8a5a5",

        // Background
        "base-100": "#0f172a", // background
        "base-200": "#14203a",
        "--text-input-bg": "#212121",

        // Border
        "border-100": "#444",
        "border-200": "#555",

        // Shadow
        "shadow-100": "#2020208e",
        "shadow-200": "#111111bf",

        // Other

        /*  primary: "#08D9D6",
          secondary: "#222831",
          accent: "#ff2e63",
          neutral: "#EAEAEA",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272", */
      },
    },
    fontFamily: {
      Cabin: ["Cabin", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
