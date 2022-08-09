/**
 * @descripttion Hook file for all hooks in the project.
 * @author Patsagorn Y. <me@patsag.one>
 * @license MIT
 * @version 1.0.0
 */

/** @type {import('@sveltejs/kit').ExternalFetch} */
export async function externalFetch(request) {
	if (request.url.startsWith('https://api.termtem.org/')) {
		// clone the original request, but change the URL
		request = new Request(
			request.url.replace('https://api.termtem.org/', 'http://localhost:1337/'),
			request
		);
	}

	return fetch(request);
}
