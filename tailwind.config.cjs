/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#B7E8CD",
					200: "#85A895",
					300: "#7B9C8A",
					400: "#678273",
					500: "#495C51",
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
