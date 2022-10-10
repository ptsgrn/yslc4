/**
 * @descripttion Hook file for all hooks in the project.
 * @author Patsagorn Y. <me@patsag.one>
 * @license MIT
 * @version 1.0.0
 */
import { PUBLIC_API_ENDPOINT } from '$env/static/public';

/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ request, fetch }) {
	if (request.url.startsWith('https://api.termtem.org/')) {
		request = new Request(
			request.url.replace('https://api.termtem.org/', PUBLIC_API_ENDPOINT),
			request
		);
	}

	return fetch(request);
}
