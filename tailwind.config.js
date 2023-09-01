/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			pink: "#f68fff",
			purple: "#d863ff",
			turquoise: "#89ffe8",
			darkblue: "#0095ff",
			lightblue: "#3dd2ff",
			black: colors.black,
			white: colors.white,
            fairytale: "#eac4d5",
            lightred: "#FF6E6E",
            tiffanyblue: "#3DEEB0",
            powderblue: "#95b8d1",
            vistablue: "#809bce",
		},
		extend: {
			fontFamily: {
				satisfy: ["Satisfy", "cursive"],
			},
		},
	},
	plugins: [],
};
