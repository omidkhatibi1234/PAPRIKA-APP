// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors, // اضافه کردن تمام رنگ‌های موجود در tailwindcss
        // در اینجا می‌توانید رنگ‌های سفارشی دیگر هم اضافه کنید
      },
    },
  },
  plugins: [],
};
