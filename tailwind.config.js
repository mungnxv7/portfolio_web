/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1CA7EC",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Thay 'Roboto' bằng tên font bạn đã cài đặt
      },
      container: {
        center: true,
        padding: "3rem",
        screens: {
          "2xl": "1280px",
        },
      },
      animation: {
        scaleIn: "scaleIn ease .5s",
        scaleOut: "scaleOut ease .5s",
      },
      keyframes: {
        scaleIn: {
          from: {
            transform: "scale(0)",
            opacity: 0,
          },
          to: {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
