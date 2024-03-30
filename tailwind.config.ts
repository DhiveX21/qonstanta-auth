import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      colors: {
        q_litegray: "#d2d2d2",
        q_lightBlue: "#57B7DD",
        q_textgray: "#555555",
        q_slate: "#9195AF",
        q_blue: "#2D89EE",
        q_pink: "#fb748f",
        q_red: "#FF0000",
        q_litebg: "#FAFAFA",
        q_navy: "#2A2A4A",
        q_lightYellow: "#FADD9E",
        q_lightPink: "#fc97a6",
        q_lightGreen: "#A8F06F",
        q_orange: "#ff5722",
        q_green: "#4caf50",
        q_cambridgeBlue: "#84B59F",
        q_lemon: "#FFF05A",
      },
      animation: {
        "ping-second": "ping 1s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
