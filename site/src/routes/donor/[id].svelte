<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params }) {
		return {
			props: {
				linkId: params.id
			}
		};
	}
</script>

<script>
	// @ts-nocheck
	import { donorsList } from '@lib/store/mockupdata';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	export let linkId = '';
	$: data = $donorsList.find((donor) => `${donor.id}` === linkId) || [];
	onMount(() => {
		if (!data) {
			goto('/donors');
		}
	});
</script>

<svelte:head>
	<title>
		{data.name}
	</title>
</svelte:head>
<main class="p-10 container mx-auto md:max-w-2xl">
	<div class="">
		<img src={data?.image} alt={data?.name} class="rounded-2xl mx-auto md:max-w-lg sm:max-w-md" />
	</div>
	<h1 class="text-xl font-bold text-center my-7 mb-10">
		{data?.name}
	</h1>

	<div class="container">
		<h2 class="text-xl mt-4 mb-2">ข้อมูลทั่วไป</h2>
		<strong>
			{data?.problems.persona}
		</strong>
		<p>
			{data?.problems.details}
		</p>

		<h2 class="text-xl mt-4 mb-2">ช่องทางการบริจาค</h2>
		<ul class="ml-2">
			{#each data?.bankAccounts as account}
				<li><b>ชื่อบัญชี:</b> {account.name || '-ไม่ได้ระบุ-'}</li>
				<li><b>เลขที่บัญชี:</b> {account.number || '-ไม่ได้ระบุ-'}</li>
				<li class="mb-2 last:mb-0"><b>ธนาคาร:</b> {account.bank || '-ไม่ได้ระบุ-'}</li>
			{/each}
		</ul>

		<h2 class="text-xl mt-4 mb-2">ติดต่อ</h2>
		<ul>
			<li>
				<b>ติอต่อ:</b>
				{Array.isArray(data?.contact) ? data?.contact.join(', ') : data?.contact || '-ไม่ได้ระบุ-'}
			</li>
			<li><b>สถานที่:</b> {data?.address || '-ไม่ได้ระบุ-'}</li>
		</ul>

		{#if data?.others}
			<h2 class="text-xl mt-4 mb-2">อื่น ๆ</h2>
			<p>
				{data?.others}
			</p>
		{/if}
	</div>
</main>
