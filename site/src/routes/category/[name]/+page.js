// http://localhost:1337/api/categories?filters[referId][$eq]=animals&populate=*

import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import QueryString from 'qs';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const queryCategory = QueryString.stringify({
		filters: {
			referId: {
				$eqi: params.name
			}
		},
		fields: ['displayTitle', 'description', 'heroBannerCreadits'],
		populate: ['heroBanner']
	});
	const queryCampaigns = QueryString.stringify({
		filters: {
			categories: {
				referId: params.name
			}
		},
		populate: '*'
	});
	const categoryData = await (await fetch(`/api/categories?${queryCategory}`)).json();
	const campaignsData = await (await fetch(`/api/campaigns?${queryCampaigns}`)).json();
	if (categoryData.data.length === 0) return redirect(301, '/category');
	return {
		categoryData: categoryData.data[0],
		campaigns: campaignsData.data,
		allCampaignsCount: campaignsData.meta.pagination.total
	};
}
