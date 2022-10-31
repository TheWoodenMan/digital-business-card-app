module.exports = {
	content: [
		"./src/**/*.{js,jsx}",
		"node_modules/daisyui/dist/**/*.js",
		"node_modules/react-daisyui/dist/**/*.js"
	],
	theme: {
		extend: {}
	},
	plugins: [require("daisyui")]
};
