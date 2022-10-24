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
	try {
		const response = await axios.get(`${PUBLIC_API_ENDPOINT}${url.pathname}${url.search}`);
		data = JSON.stringify(response.data);
	} catch (err) {
		// @ts-ignore
		error(500, err);
	}

	return new Response(data, {
		headers: {}
	});
}
