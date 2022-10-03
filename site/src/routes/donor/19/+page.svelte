<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { donorsList } from '@lib/store/mockupdata';
	import MarkdownRenderer from '@lib/components/MarkdownRenderer.svelte';
	import { onMount } from 'svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	export let linkId = '19';
	let campaignData = {
		data: {
			id: 2,
			title: 'บ้านไฟไหม้ ขอรับบริจาค',
			recipient: 'นางสาวฐิติชญา จิ๋วอยู่',
			requester: 'เจ้าหน้าที่ในท้องถิ่น',
			end: null,
			goal: null,
			datails:
				'ไฟไหม้ทุกอย่างหมด ไม่เหลืออะไรเลย ...\n.\nวันนี้ (5 พ.ค. 65) เวลาประมาณ 16.45 น. เกิดเหตุไฟไหม้บ้านของนางสาว ฐิติชญา จิ๋วอยู่ บ้านเลขที่ 103/1 หมู่4 ต.วังแดง อ.ตรอน จ.อุตรดิตถ์ ทุกอย่างไหม้หมดไม่เหลืออะไรเลย\n.\nขอเชิญร่วมบริจาคเงิน ท่านใดอยากช่วยเหลือเหลือครอบครัวผู้ประสบอัคคีภัยเนื่องจากเหตุการณ์ไฟไหม้บ้านครอบครัว นางสาว ฐิติชญา จิ๋วอยู่  สามารถโอนเงินเข้าบัญชีเงินฝากได้ตามบัญชี',
			campaignID: null,
			createdAt: '2022-08-16T16:10:28.195Z',
			updatedAt: '2022-08-16T16:15:41.265Z',
			publishedAt: '2022-08-16T16:10:30.558Z',
			source:
				'- [เพจเฟซบุ๊ก อุตรดิตถ์ 24 ชั่วโมง](https://www.facebook.com/permalink.php?story_fbid=120753317280520&id=106568285365690)',
			categories: [
				{
					id: 6,
					displayTitle: 'อุบัติภัย',
					referId: 'diasters',
					description:
						'ภัยต่าง ๆ มักมาในเวลาที่คาดไม่ถึงเสมอ ร่วมช่วยผู้ประสบภัย บริจากได้ทั้งสิ่งของและเงิน',
					icon: 'HomeFlood',
					heroBannerCreadits: null,
					createdAt: '2022-08-16T16:01:07.793Z',
					updatedAt: '2022-08-16T16:01:09.581Z',
					publishedAt: '2022-08-16T16:01:09.578Z',
					locale: 'th',
					url_path: '-29'
				}
			],
			heroImage: {
				id: 49,
				name: 'main.jpg',
				alternativeText: 'main.jpg',
				caption: 'main.jpg',
				width: 1080,
				height: 1440,
				formats: {
					thumbnail: {
						name: 'thumbnail_main.jpg',
						hash: 'thumbnail_main_a85a969c34',
						ext: '.jpg',
						mime: 'image/jpeg',
						path: null,
						width: 117,
						height: 156,
						size: 6.97,
						url: '/uploads/thumbnail_main_a85a969c34.jpg'
					},
					large: {
						name: 'large_main.jpg',
						hash: 'large_main_a85a969c34',
						ext: '.jpg',
						mime: 'image/jpeg',
						path: null,
						width: 750,
						height: 1000,
						size: 168.37,
						url: '/uploads/large_main_a85a969c34.jpg'
					},
					medium: {
						name: 'medium_main.jpg',
						hash: 'medium_main_a85a969c34',
						ext: '.jpg',
						mime: 'image/jpeg',
						path: null,
						width: 563,
						height: 750,
						size: 109.25,
						url: '/uploads/medium_main_a85a969c34.jpg'
					},
					small: {
						name: 'small_main.jpg',
						hash: 'small_main_a85a969c34',
						ext: '.jpg',
						mime: 'image/jpeg',
						path: null,
						width: 375,
						height: 500,
						size: 56.14,
						url: '/uploads/small_main_a85a969c34.jpg'
					}
				},
				hash: 'main_a85a969c34',
				ext: '.jpg',
				mime: 'image/jpeg',
				size: 227.61,
				url: '/uploads/main_a85a969c34.jpg',
				previewUrl: null,
				provider: 'local',
				provider_metadata: null,
				createdAt: '2022-08-16T16:06:46.847Z',
				updatedAt: '2022-08-16T16:06:46.847Z',
				placeholder: null
			},
			detailImages: [
				{
					id: 50,
					name: 'detail3.jpg',
					alternativeText: 'detail3.jpg',
					caption: 'detail3.jpg',
					width: 1080,
					height: 810,
					formats: {
						thumbnail: {
							name: 'thumbnail_detail3.jpg',
							hash: 'thumbnail_detail3_20972a2761',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 209,
							height: 156,
							size: 9.78,
							url: '/uploads/thumbnail_detail3_20972a2761.jpg'
						},
						large: {
							name: 'large_detail3.jpg',
							hash: 'large_detail3_20972a2761',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 1000,
							height: 750,
							size: 164.19,
							url: '/uploads/large_detail3_20972a2761.jpg'
						},
						medium: {
							name: 'medium_detail3.jpg',
							hash: 'medium_detail3_20972a2761',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 750,
							height: 563,
							size: 103.23,
							url: '/uploads/medium_detail3_20972a2761.jpg'
						},
						small: {
							name: 'small_detail3.jpg',
							hash: 'small_detail3_20972a2761',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 500,
							height: 375,
							size: 50.09,
							url: '/uploads/small_detail3_20972a2761.jpg'
						}
					},
					hash: 'detail3_20972a2761',
					ext: '.jpg',
					mime: 'image/jpeg',
					size: 149.25,
					url: '/uploads/detail3_20972a2761.jpg',
					previewUrl: null,
					provider: 'local',
					provider_metadata: null,
					createdAt: '2022-08-16T16:07:09.352Z',
					updatedAt: '2022-08-16T16:07:09.352Z',
					placeholder: null
				},
				{
					id: 51,
					name: 'detail2.jpg',
					alternativeText: 'detail2.jpg',
					caption: 'detail2.jpg',
					width: 1080,
					height: 810,
					formats: {
						thumbnail: {
							name: 'thumbnail_detail2.jpg',
							hash: 'thumbnail_detail2_a9b2ee03c9',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 209,
							height: 156,
							size: 10.33,
							url: '/uploads/thumbnail_detail2_a9b2ee03c9.jpg'
						},
						large: {
							name: 'large_detail2.jpg',
							hash: 'large_detail2_a9b2ee03c9',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 1000,
							height: 750,
							size: 198.53,
							url: '/uploads/large_detail2_a9b2ee03c9.jpg'
						},
						medium: {
							name: 'medium_detail2.jpg',
							hash: 'medium_detail2_a9b2ee03c9',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 750,
							height: 563,
							size: 122.88,
							url: '/uploads/medium_detail2_a9b2ee03c9.jpg'
						},
						small: {
							name: 'small_detail2.jpg',
							hash: 'small_detail2_a9b2ee03c9',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 500,
							height: 375,
							size: 57.72,
							url: '/uploads/small_detail2_a9b2ee03c9.jpg'
						}
					},
					hash: 'detail2_a9b2ee03c9',
					ext: '.jpg',
					mime: 'image/jpeg',
					size: 183.57,
					url: '/uploads/detail2_a9b2ee03c9.jpg',
					previewUrl: null,
					provider: 'local',
					provider_metadata: null,
					createdAt: '2022-08-16T16:07:09.415Z',
					updatedAt: '2022-08-16T16:07:09.415Z',
					placeholder: null
				},
				{
					id: 52,
					name: 'detail4.jpg',
					alternativeText: 'detail4.jpg',
					caption: 'detail4.jpg',
					width: 1108,
					height: 1477,
					formats: {
						thumbnail: {
							name: 'thumbnail_detail4.jpg',
							hash: 'thumbnail_detail4_1cdb4036ff',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 117,
							height: 156,
							size: 5.48,
							url: '/uploads/thumbnail_detail4_1cdb4036ff.jpg'
						},
						large: {
							name: 'large_detail4.jpg',
							hash: 'large_detail4_1cdb4036ff',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 750,
							height: 1000,
							size: 156.29,
							url: '/uploads/large_detail4_1cdb4036ff.jpg'
						},
						medium: {
							name: 'medium_detail4.jpg',
							hash: 'medium_detail4_1cdb4036ff',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 563,
							height: 750,
							size: 92.98,
							url: '/uploads/medium_detail4_1cdb4036ff.jpg'
						},
						small: {
							name: 'small_detail4.jpg',
							hash: 'small_detail4_1cdb4036ff',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 375,
							height: 500,
							size: 44.43,
							url: '/uploads/small_detail4_1cdb4036ff.jpg'
						}
					},
					hash: 'detail4_1cdb4036ff',
					ext: '.jpg',
					mime: 'image/jpeg',
					size: 261.61,
					url: '/uploads/detail4_1cdb4036ff.jpg',
					previewUrl: null,
					provider: 'local',
					provider_metadata: null,
					createdAt: '2022-08-16T16:07:09.608Z',
					updatedAt: '2022-08-16T16:07:09.608Z',
					placeholder: null
				},
				{
					id: 53,
					name: 'detail5.jpg',
					alternativeText: 'detail5.jpg',
					caption: 'detail5.jpg',
					width: 1800,
					height: 1200,
					formats: {
						thumbnail: {
							name: 'thumbnail_detail5.jpg',
							hash: 'thumbnail_detail5_037f0bf1fe',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 234,
							height: 156,
							size: 8.87,
							url: '/uploads/thumbnail_detail5_037f0bf1fe.jpg'
						},
						large: {
							name: 'large_detail5.jpg',
							hash: 'large_detail5_037f0bf1fe',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 1000,
							height: 667,
							size: 110.08,
							url: '/uploads/large_detail5_037f0bf1fe.jpg'
						},
						medium: {
							name: 'medium_detail5.jpg',
							hash: 'medium_detail5_037f0bf1fe',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 750,
							height: 500,
							size: 67.64,
							url: '/uploads/medium_detail5_037f0bf1fe.jpg'
						},
						small: {
							name: 'small_detail5.jpg',
							hash: 'small_detail5_037f0bf1fe',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 500,
							height: 333,
							size: 33.05,
							url: '/uploads/small_detail5_037f0bf1fe.jpg'
						}
					},
					hash: 'detail5_037f0bf1fe',
					ext: '.jpg',
					mime: 'image/jpeg',
					size: 254.81,
					url: '/uploads/detail5_037f0bf1fe.jpg',
					previewUrl: null,
					provider: 'local',
					provider_metadata: null,
					createdAt: '2022-08-16T16:07:09.624Z',
					updatedAt: '2022-08-16T16:07:09.624Z',
					placeholder: null
				},
				{
					id: 54,
					name: 'detail1.jpg',
					alternativeText: 'detail1.jpg',
					caption: 'detail1.jpg',
					width: 1477,
					height: 1108,
					formats: {
						thumbnail: {
							name: 'thumbnail_detail1.jpg',
							hash: 'thumbnail_detail1_dd7b6a4668',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 208,
							height: 156,
							size: 9.77,
							url: '/uploads/thumbnail_detail1_dd7b6a4668.jpg'
						},
						large: {
							name: 'large_detail1.jpg',
							hash: 'large_detail1_dd7b6a4668',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 1000,
							height: 750,
							size: 206.26,
							url: '/uploads/large_detail1_dd7b6a4668.jpg'
						},
						medium: {
							name: 'medium_detail1.jpg',
							hash: 'medium_detail1_dd7b6a4668',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 750,
							height: 563,
							size: 119.37,
							url: '/uploads/medium_detail1_dd7b6a4668.jpg'
						},
						small: {
							name: 'small_detail1.jpg',
							hash: 'small_detail1_dd7b6a4668',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 500,
							height: 375,
							size: 54.25,
							url: '/uploads/small_detail1_dd7b6a4668.jpg'
						}
					},
					hash: 'detail1_dd7b6a4668',
					ext: '.jpg',
					mime: 'image/jpeg',
					size: 355.69,
					url: '/uploads/detail1_dd7b6a4668.jpg',
					previewUrl: null,
					provider: 'local',
					provider_metadata: null,
					createdAt: '2022-08-16T16:07:09.692Z',
					updatedAt: '2022-08-16T16:07:09.692Z',
					placeholder: null
				}
			],
			donateStuff: {
				id: 3,
				name: 'นางสาวฐิติชญา จิ๋วอยู่',
				tel: '-',
				address: [
					{
						id: 4,
						houseNumber: '103/1',
						moo: '4',
						villageName: null,
						road: null,
						subdistrict: 'วังแดง',
						district: 'ตรอน',
						province: 'อุตรดิตถ์',
						postalCode: '53140'
					}
				]
			},
			donateMoney: [
				{
					id: 3,
					accountName: 'นางสาวฐิติชญา จิ๋วอยู่',
					accountID: '020299171064',
					bank: 'ออมสิน'
				}
			],
			url_path: '-32'
		},
		meta: {}
	};
</script>

<svelte:head>
	<title>
		{campaignData.data.title}
	</title>
</svelte:head>
<main class="p-10 container mx-auto md:max-w-2xl">
	<div class="">
		<img
			src="http://localhost:1337{campaignData.data.heroImage.formats.large.url}"
			alt={campaignData.data.heroImage.alternativeText}
			class="rounded-2xl mx-auto md:max-w-lg sm:max-w-md max-h-80"
		/>
	</div>
	<h1 class="text-xl font-bold text-center my-7 mb-10">
		{campaignData.data.title}
	</h1>

	<div class="container">
		<h2 class="text-xl mt-4 mb-2">รายละเอียด</h2>
		<Splide aria-label="ความเสียหาย">
			{#each campaignData.data.detailImages as image}
				<SplideSlide>
					<img
						src="http://localhost:1337{image.formats.large.url}"
						alt={image.alternativeText}
						class="rounded-2xl mx-auto md:max-w-lg sm:max-w-md max-h-72 m-10"
					/>
				</SplideSlide>
			{/each}
		</Splide>
		<MarkdownRenderer source={campaignData.data.datails.replace(/\n/g, '\n\n')} />

		<h2 class="text-xl mt-4 mb-2">ช่องทางการบริจาค</h2>
		<ul class="ml-2">
			{#if campaignData.data.donateMoney?.length >= 1}
				<li class="mb-2">
					<strong>บัญชีธนาคาร</strong>
					<ul class="ml-2">
						{#each campaignData.data.donateMoney as donateMoney}
							<li class="mb-2">
								<strong>{donateMoney.accountName}</strong>
								<ul class="ml-2">
									<li>
										<strong>เลขที่บัญชี</strong>
										{donateMoney.accountID}
									</li>
									<li>
										<strong>ธนาคาร</strong>
										{donateMoney.bank}
									</li>
								</ul>
							</li>
						{/each}
					</ul>
				</li>
			{/if}
			{#if campaignData.data.donateStuff?.address?.length >= 1}
				<li class="mb-2">
					หรือบริจากสิ่งของที่อยู่ด้านล่าง:
					<ul class="ml-2">
						<strong>
							{campaignData.data.donateStuff.name}
						</strong>
						{#each campaignData.data.donateStuff.address as address}
							<li class="mb-2">
								{address.houseNumber}
								หมู่ที่ {address.moo ?? '-'}
								หมู่บ้าน {address.villageName ?? '-'}
								ถนน {address.road ?? '-'}
								ตำบล{address.subdistrict}
								อำเภอ{address.district}
								จังหวัด{address.province}
								รหัสไปรษณีย์ {address.postalCode}
							</li>
						{/each}
					</ul>
				</li>
			{/if}
		</ul>
		<h2 class="text-xl mt-4 mb-2">แหล่งที่มา</h2>
		<MarkdownRenderer source={campaignData.data.source.replace(/\n/g, '\n\n')} />
		<small class=""
			>หมวดหมู่: <a href="/donors?category=accident"
				>{campaignData.data.categories[0].displayTitle}</a
			></small
		>
	</div>
</main>
