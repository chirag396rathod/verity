import { table } from "console";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lp: "1400px",
        "3xl": "1700px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#1F1F1F",
        secondary: "#7F8892",
        main: "#330099",
        ternary: "#7D8BB7",
        // placeholder:'#9EA0AD'
      },
      backgroundColor: {
        primary: "#F5F6F8",
        secondary: "#F9FAFC",
        auth_primary: "#F1EEF8",
        table_header: "#F4F5F7",
      },
      fontFamily: {
        Hellix: ["Hellix"],
      },
      borderColor: {
        primary: "#F2F3F5",
        secondary: "#E1E0F4",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
