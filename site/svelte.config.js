import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		files: {
			hooks: 'src/lib/hooks.js'
		}
	}
};

export default config;
