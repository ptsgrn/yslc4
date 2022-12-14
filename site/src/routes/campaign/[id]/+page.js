import QueryString from 'qs';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	let donorData = await (await fetch(`/api/url-alias/get?path=/${params.id}&populate=*`)).json();
	return {
		donor: donorData.data
	};
}
