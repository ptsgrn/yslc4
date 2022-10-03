<script>
	import DynamicImage from '@lib/components/DynamicImage.svelte';
	import MarkdownRenderer from '@lib/components/MarkdownRenderer.svelte';
	import { A, Heading, Li, List, P, Span } from 'flowbite-svelte';
	import Anchor from '@lib/components/Anchor.svelte';
	let donor = {
		title: 'ช่วยช้างตกงาน',
		categories: [
			{
				name: 'สัตว์',
				referID: 'animals'
			},
			{
				name: 'ของ',
				referID: 'things'
			}
		],
		recipient: 'ช้าง',
		requester: 'อินเตอร์เน็ต',
		end: new Date().setFullYear(2023),
		goal: 20_000,
		heroImage: {
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
		},
		details: 'asd\nทดสอบ [example](https://example.org)',
		donateStuff: {
			contactName: 'นางสาวสมใจ ทดสอบเว็บ',
			tel: '+12 12043342',
			address: [
				{
					houseNumber: '212',
					moo: '54',
					villageName: '16/32',
					road: 'นานโด',
					subdistrict: 'นายิน',
					district: 'ทอง',
					province: 'ทองใจ',
					postalCode: '91232'
				},
				{
					houseNumber: '224',
					moo: '67',
					villageName: '18/32',
					road: 'นานโด2',
					subdistrict: 'นายิ2',
					district: 'ทอง2',
					province: 'ทองใจ2',
					postalCode: '11232'
				}
			]
		},
		donatMoney: [
			{
				accountName: 'บัญชีนาง1',
				accountID: '32123123123',
				bank: 'ธนชาตื'
			},
			{
				accountName: 'บัญชีนาย2',
				accountID: '82123123123',
				bank: 'กรุงไทย'
			}
		],
		campaignSource: '[อินเตอร์เน็ต](https://fb.me/)'
	};
</script>

<svelte:head>
	<title>
		{donor.title}
	</title>
</svelte:head>
<main class="p-10 container mx-auto md:max-w-2xl">
	<div class="">
		<DynamicImage formats={donor.heroImage} />
	</div>
	<Heading class="text-xl font-bold text-center my-7 mb-10">
		{donor.title}
	</Heading>

	<div class="container">
		<Heading tag="h2" class="text-xl mt-4 mb-2">ข้อมูลทั่วไป</Heading>
		<Span highlight>
			{donor.recipient}
		</Span>
		<MarkdownRenderer source={donor.details}/>

		<Heading tag="h2" class="text-xl mt-4 mb-2">ช่องทางการบริจาค</Heading>
		<Heading tag="h3">เงิน</Heading>
		<List class="ml-2 mt-2">
			{#each donor.donatMoney as account}
				<Li><b>ชื่อบัญชี:</b> {account.accountName || '-ไม่ได้ระบุ-'}</Li>
				<Li><b>เลขที่บัญชี:</b> {account.accountID || '-ไม่ได้ระบุ-'}</Li>
				<Li class="mb-2 last:mb-0"><b>ธนาคาร:</b> {account.bank || '-ไม่ได้ระบุ-'}</Li>
			{/each}
		</List>
		<Heading tag="h3">สิ่งของ</Heading>
		{#if donor.donateStuff.address.length !== 0}
			<P>
				เนื่องจากแคมเปญนี้รับการบริจาคหลายช่องทาง คุณสามารถเลือกช่องทางใดช่องทางหนึ่งเพื่อบริจาคได้
				กรณีมีข้อสงสัย กรุณาติดต่อผู้รับบริจากโดยตรงที่ส่วน<A href="#contact">ติดต่อ</A>ด้านล่าง
			</P>	
		{/if}
		<List class="ml-5 mt-2 list-decimal list-outside marker:">
			{#each donor.donateStuff.address as address}
				<Li>
					<b>บ้านเลขที่</b>
					{address.houseNumber}
					<b>หมู่</b>
					{address.moo}
					<b>ถนน</b>
					{address.road}
					<b>ตำบล</b>
					{address.subdistrict}
					<b>อำเภอ</b>
					{address.district}
					<b>จังหวัด</b>
					{address.province}
					<b>รหัสไปรษณีย์</b>
					{address.postalCode}
				</Li>
			{/each}
		</List>
		<Anchor id="contact" />
		<Heading tag="h2" class="text-xl mt-4 mb-2">ติดต่อ</Heading>
		<List>
			<Li>
				<b>ติอต่อ:</b>
				{donor.donateStuff.contactName}
			</Li>
			<li>
				<b>โทร:</b>
				{donor.donateStuff.tel}
			</li>
		</List>

		{#if donor.campaignSource}
			<Heading tag="h2" class="text-xl mt-4 mb-2">อ้างอิง</Heading>
			<MarkdownRenderer source={donor.campaignSource}/>
		{/if}
	</div>
</main>
