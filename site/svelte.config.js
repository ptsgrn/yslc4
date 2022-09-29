import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		files: {
			hooks: {
				server: 'src/lib/hooks.server.js'
			}
		}
	}
};

export default config;
