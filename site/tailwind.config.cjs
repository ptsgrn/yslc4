const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		fontFamily: {
			sans: ['Inter', 'Noto Sans Thai', ...defaultTheme.fontFamily.sans]
		},
		colors: {
			red: colors.rose,
			pink: colors.fuchsia
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
			},
			gray: {
				50: '#f9fafb',
				100: '#f3f4f6',
				200: '#e5e7eb',
				300: '#d1d5db',
				400: '#9ca3af',
				500: '#6b7280',
				600: '#4b5563',
				700: '#374151',
				800: '#1f2937',
				900: '#111827'
			}
		}
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
		require('flowbite/plugin'),
		require('@tailwindcss/aspect-ratio')
	],
	darkMode: 'class',
	corePlugins: {
		aspectRatio: false
	}
};
