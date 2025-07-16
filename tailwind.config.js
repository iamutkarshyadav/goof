/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "login-bg": "#A388EE",
        "interventio-text": "#FF6B6B",
        dotsnitch: "#7FBC8CX",
        "to-box-welcome": "#7fbc8c",
        "paragraph-box-welcome": "#DAF5F0",
        "main-screen-bg": "#d21e1e",
        "card-bg-1": "#10100e",
        "focus-text": "#ffffe3",
        focusSession: "#E3DFF2",
        "focus-start": "#E3A018",
      },
      fontFamily: {
        "SpaceGrotesk-Medium": ["SpaceGrotesk-Medium"],
        "fonts-for-focus": ["fonts-for-focus"],
      },
    },
  },
  plugins: [],
};
