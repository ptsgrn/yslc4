import { sveltekit } from '@sveltejs/kit/vite';
import path from 'node:path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@': path.resolve('./src'),
			'@components': path.resolve('./src/components'),
			'@lib': path.resolve('./src/lib'),
			'@assets': path.resolve('./src/lib/assets')
		}
	},
};

export default config;
