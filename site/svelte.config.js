import adapter from '@sveltejs/adapter-auto';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'@': path.resolve('./src'),
					'@components': path.resolve('./src/components'),
					'@lib': path.resolve('./src/lib'),
					'@assets': path.resolve('./src/lib/assets'),
				}
			}
		}
	}
};

export default config;
