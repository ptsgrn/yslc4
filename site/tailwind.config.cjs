const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'Noto Sans Thai', ...defaultTheme.fontFamily.sans]
		}
	},
	extend: {
		backgroundImage: {
			mainpage: "url('/pexels-ben-mack.jpg')"
		},
		colors: {
			yellow: {
				...defaultTheme.colors.yellow,
				200: '#fae57c'
			},
			blue: {
				100: '#d6f0ff',
				200: '#99daff',
				300: '#5cc4ff',
				400: '#34b6ff',
				500: '#2991cc',
				600: '#1f6d99',
				700: '#1a5b7f',
				800: '#0f364c',
				900: '#051219'
			}
		}
	},
	plugins: [require('@tailwindcss/line-clamp')]
};
