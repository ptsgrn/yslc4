/**
 * @desc Fetch API Wrapper
 * @author Patsagorn Y. <me@patsag.one>
 * @license MIT
 */

import { PUBLIC_API_ENDPOINT } from '$env/static/public';

/**
 * Fetches data from Strapi API and returns a promise
 * @param {RequestInfo} path API path
 * @param {RequestInit} [options] Fetch options
 */

export const endpointFetch = (path, options) => {
	if (typeof path !== 'string') {
		throw new TypeError('path must be a string');
	}
	return fetch(`${PUBLIC_API_ENDPOINT}/${path}`, {
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'max-age=300'
		},
		...options
	});
};
