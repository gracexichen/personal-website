/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			pink: "#f68fff",
			turquoise: "#89ffe8",
			darkblue: "#0095ff",
			lightblue: "#3dd2ff",
			black: colors.black,
			white: colors.white,
		},
		extend: {
			fontFamily: {
				satisfy: ["Satisfy", "cursive"],
			},
		},
	},
	plugins: [],
};
