/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx', './index.html'],
	darkMode: 'class',
	purge: ['./src/**/*.tsx', './index.html'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f5f5f5',
					DEFAULT: '#3e3e3e',
					950: '#f5f5f5',
				},
				secondary: {
					50: '#f5f5f5',
					DEFAULT: '#e3e3e3',
					950: '#f5f5f5',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries'),
	],
}
