/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "cl-1": "#007dc3",
        "cl-2": "#a4d7f4",
        "cl-3": "#aa1120",
        "cl-4": "#0c2749",
        "cl-5": "#003dc5",
      },
      borderRadius: {
        rounded: "10px", // Matches --num-rounded
      },
    },
    plugins: [],
  },
};
