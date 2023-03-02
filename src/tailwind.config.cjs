/** @type {import('tailwindcss').Config} */
const tailwind = require("tailwindcss");
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      animation: {
        ping: 'ping 1s cubic-bezier(.87,.86,.51,.89) infinite',
        // Customize the attributes here as desired:
        animationDelay: '3s',
      },
      keyframes: {
        'ping': {
          //this piece of code is generated using chat-gpt :) , it is fo fun
          '0%, 100%': { transform: 'scale(1)' },
          // Generate 28 additional keyframes with scale values between 1 and 1.5
          ...Array.from({ length: 28 }).reduce((keyframes, _, i) => {
            const scale = 1 + (0.5 * (i + 1)) / 30
            keyframes[`${(i + 1) * 100 / 30}%`] = { transform: `scale(${scale})` }
            return keyframes
          }, {}),
        },
      }
    },
  },
}
