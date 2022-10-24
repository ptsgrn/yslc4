<script>
	import DynamicImage from '@lib/components/DynamicImage.svelte';
	import MarkdownRenderer from '@lib/components/MarkdownRenderer.svelte';
	import { A, Heading, Li, List, P, Span } from 'flowbite-svelte';
	import Anchor from '@lib/components/Anchor.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	let donor = data.donor;
</script>
<svelte:head>
	<title>
		{donor.title}
	</title>
</svelte:head>
<main class="p-10 container mx-auto md:max-w-2xl">
	<div class="">
		<DynamicImage formats={donor.heroImage.formats} />
	</div>
	<Heading class="text-xl font-bold text-center my-7 mb-10">
		{donor.title}
	</Heading>
	<div class="container">
		<Heading tag="h2" class="text-xl mt-4 mb-2">ข้อมูลทั่วไป</Heading>
		<Span highlight>
			{donor.recipient}
		</Span>
		<MarkdownRenderer source={donor.datails} />
		<Heading tag="h2" class="text-xl mt-4 mb-2">ช่องทางการบริจาค</Heading>
		{#if donor.donateMoney.length > 0}
			<Heading tag="h3">เงิน</Heading>
			<List class="ml-2 mt-2">
				{#each donor.donateMoney as account}
				<Li><b>ชื่อบัญชี:</b> {account.accountName ?? '-ไม่ได้ระบุ-'}</Li>
				<Li><b>เลขที่บัญชี:</b> {account.accountID ?? '-ไม่ได้ระบุ-'}</Li>
				<Li class="mb-2 last:mb-0"><b>ธนาคาร:</b> {account.bank ?? '-ไม่ได้ระบุ-'}</Li>
				{/each}
			</List>
		{/if}
		{#if donor.donateStuff?.address}
			<Heading tag="h3">สิ่งของ</Heading>
			{#if donor.donateStuff?.address?.length > 0}
				<P>
					เนื่องจากแคมเปญนี้รับการบริจาคหลายช่องทาง
					คุณสามารถเลือกช่องทางใดช่องทางหนึ่งเพื่อบริจาคได้ กรณีมีข้อสงสัย
					กรุณาติดต่อผู้รับบริจากโดยตรงที่ส่วน<A href="#contact">ติดต่อ</A>ด้านล่าง
				</P>
			{/if}
			<List class="ml-5 mt-2 list-decimal list-outside marker:">
				{#each donor.donateStuff?.address as address}
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
		{/if}
		<Anchor id="contact" />
		<Heading tag="h2" class="text-xl mt-4 mb-2">ติดต่อ</Heading>
		<List>
			<Li>
				<b>ติอต่อ:</b>
				{donor.donateStuff.contactName ?? '-ไม่ได้ระบุ-'}
			</Li>
			<Li>
				<b>โทร:</b>
				{donor.donateStuff.tel}
			</Li>
		</List>
		{#if donor.campaignSource}
			<Heading tag="h2" class="text-xl mt-4 mb-2">อ้างอิง</Heading>
			<MarkdownRenderer source={donor.campaignSource}/>
		{/if}
	</div>
</main>
