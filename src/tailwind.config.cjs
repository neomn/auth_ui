/** @type {import('tailwindcss').Config} */
const tailwind = require("tailwindcss");
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      animation: {
        ping: 'ping 1s cubic-bezier(0.9, 1, 0.6, 0.1) 3',
        // Customize the attributes here as desired:
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationDelay: '1s',
        animationIterationCount: '3',
      },
    },
  },
}
