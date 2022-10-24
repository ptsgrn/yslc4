import qs from 'qs';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	let query = qs.stringify(
		{
			fields: ['displayTitle', 'referId', 'description', 'heroBannerCreadits'],
			populate: ['heroBanner']
		}
	);
	console.log(await fetch(`/api/categories?${query}`))
	const categories = await (await fetch(`/api/categories?${query}`)).json();
	return {
		categories
	};
}
