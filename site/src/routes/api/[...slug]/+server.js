import { PUBLIC_API_ENDPOINT } from '$env/static/public';
import { error } from '@sveltejs/kit';
import axios from 'axios';
/** @type {any} */
// let cache = {}

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	let data = '';
	// if (cache[url.href]) {
	//   data = cache[url.href]
	// } else {
	//   cache[url.href] = data
	// }
	data = JSON.stringify(
		await (
			await axios.get(`${PUBLIC_API_ENDPOINT}${url.pathname}${url.search}`, {
				headers: {
					'Cache-Control': 'max-age=1500'
				}
			})
		).data
	);

	return new Response(data, {
		headers: {}
	});
}
