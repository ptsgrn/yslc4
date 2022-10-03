/** @type {import('@sveltejs/kit').PageLoad} */
export async function load({ params }) {
	return {
		linkId: params.id
	};
}
