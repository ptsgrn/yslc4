import { redirect } from '@sveltejs/kit';
/** @type {import('@sveltejs/kit').Load} */
export async function load() {
	throw redirect(301, '/category');
}
