import QueryString from 'qs';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	let donorData = await (await fetch(`http://localhost:5173/api/url-alias/get?path=/${params.id}&populate=*`)).json()
	return {
		donor: donorData.data
	};
}
