/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {
      // colors: {
      //   'pending': '#EE9B00',
      //   'approve': '#39876D',
      //   'invalid_data': '#AE2012',
      //   'wait_for_approve': '#005F73'
      // },
    },
  },
  plugins: [],
});
