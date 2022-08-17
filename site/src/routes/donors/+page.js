/** @type {import('@sveltejs/kit').PageLoad} */
export async function load({ params, fetch }) {
	// let categories = await (await fetch('/api/categories')).json();
	return {
		categoryData: {}
	};
}
