/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	return {
		example: await (await fetch('https://api.termtem.org/anything')).json()
	};
}
