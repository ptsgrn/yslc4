<script>
	import { Alert, Button, Heading, P, Secondary, Span } from 'flowbite-svelte';
	import DynamicImage from '@lib/components/DynamicImage.svelte';
	import MarkdownRenderer from '@lib/components/MarkdownRenderer.svelte';
	import IconPound from 'svelte-material-icons/Pound.svelte';
	import IconDone from 'svelte-material-icons/Check.svelte';
	import { ga } from '@beyonk/svelte-google-analytics'
	/** @type {import('./$types').PageData} */
	export let data;
	const categoryData = data.categoryData;
	let campaigns = data.campaigns;
	let allCampaignsCount = data.allCampaignsCount;
	function loadMoreData() {
		ga.addEvent('load_more_campaign_in_category', {
			category: categoryData.referId,
			currrent_show_count: campaigns,
			all_count: allCampaignsCount
		})
		campaigns.push({
			id: 2,
			title: 'ทดสอบอันที่ 2',
			datails:
				'ไฟไหม้ทุกอย่างหมด ไม่เหลืออะไรเลย ...\n.\nวันนี้ (5 พ.ค. 65) เวลาประมาณ 16.45 น. เกิดเหตุไฟไหม้บ้านของนางสาวฐิติชญา จิ๋วอยู่ บ้านเลขที่ 103/1 หมู่ 4 ต.วังแดง อ.ตรอน จ.อุตรดิตถ์ ทุกอย่างไหม้หมดไม่เหลืออะไรเลย\n.\nขอเชิญร่วมบริจาคเงิน ท่านใดอยากช่วยเหลือเหลือครอบครัวผู้ประสบอัคคีภัยเนื่องจากเหตุการณ์ไฟไหม้บ้านครอบครัว นางสาว ฐิติชญา จิ๋วอยู่  สามารถโอนเงินเข้าบัญชีเงินฝากได้ตามบัญชี',
			url_path: '/poor-dog-with-pra-test-test-2',
			image: {
				thumbnail: {
					name: 'thumbnail_evan-krause-InAu-8bM2ow-unsplash.jpg',
					hash: 'thumbnail_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0',
					ext: '.jpg',
					mime: 'image/jpeg',
					path: null,
					width: 245,
					height: 122,
					size: 9.67,
					url: 'http://storage.googleapis.com/termtem-site-assets/public/thumbnail_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0/thumbnail_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0.jpg'
				},
				medium: {
					name: 'medium_evan-krause-InAu-8bM2ow-unsplash.jpg',
					hash: 'medium_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0',
					ext: '.jpg',
					mime: 'image/jpeg',
					path: null,
					width: 750,
					height: 375,
					size: 71.09,
					url: 'http://storage.googleapis.com/termtem-site-assets/public/medium_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0/medium_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0.jpg'
				},
				large: {
					name: 'large_evan-krause-InAu-8bM2ow-unsplash.jpg',
					hash: 'large_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0',
					ext: '.jpg',
					mime: 'image/jpeg',
					path: null,
					width: 1000,
					height: 500,
					size: 116.26,
					url: 'http://storage.googleapis.com/termtem-site-assets/public/large_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0/large_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0.jpg'
				},
				small: {
					name: 'small_evan-krause-InAu-8bM2ow-unsplash.jpg',
					hash: 'small_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0',
					ext: '.jpg',
					mime: 'image/jpeg',
					path: null,
					width: 500,
					height: 250,
					size: 34.62,
					url: 'http://storage.googleapis.com/termtem-site-assets/public/small_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0/small_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0.jpg'
				}
			}
		});
		campaigns = campaigns;
	}
</script>

<svelte:head>
	<title>หมวดหมู่: {categoryData.displayTitle}</title>
</svelte:head>
<header
	class="
    flex flex-row items-start content-center p-10
  "
>
	<div
		class="
    text-center mr-10 p-2
  "
	>
		<Span>
			<IconPound size="50" />
		</Span>
	</div>
	<div
		class="
      text-left py-2
    "
	>
		<Heading class="text-3xl">
			{categoryData.displayTitle}
		</Heading>
		<Secondary
			class="
        text-xl pt-5
      "
		>
			<MarkdownRenderer source={categoryData.description} />
		</Secondary>
		<Span
			class="
        mt-4 text-md
      "
			highlight
		>
			{allCampaignsCount} เคมเปญในขณะนี้
		</Span>
	</div>
</header>
<main class="px-5">
	{#each campaigns as campaign}
		<a
			class="flex flex=row border my-3 overflow-hidden p-2 rounded"
			href="/campaign{campaign.url_path}"
			on:click|preventDefault={()=>{
				ga.all.selectContent('campaign', campaign.id)
			}}
		>
			<DynamicImage className="rounded w-40 object-fill" formats={campaign.heroImage.formats} />
			<div class="ml-3 overflow-hidden w-auto">
				<Span decorationClass="font-bold">{campaign.title}</Span>
				<P class="line-clamp-2">{campaign.datails}</P>
			</div>
		</a>
	{:else}
		<Alert color="dark">
			<svg
				slot="icon"
				aria-hidden="true"
				class="w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
					clip-rule="evenodd"
				/></svg
			>
			<span class="font-medium">ไม่พบผลลัพธ์</span> กรุณามาตรวจสอบใหม่อีกครั้งในภายหลัง
		</Alert>
	{/each}
	{#if campaigns.length < allCampaignsCount}
		<div class="text-center py-5" on:click|preventDefault={loadMoreData}>
			<Button outline color="blue">โหลดเพิ่มเติม</Button>
		</div>
	{:else}
		<Span italic class="text-center block py-5">
			<IconDone size="20" />
			หมดแล้ว
		</Span>
	{/if}
</main>
