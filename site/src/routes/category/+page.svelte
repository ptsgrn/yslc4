<script>
	import DynamicImage from '@lib/components/DynamicImage.svelte';
	import { A, Heading, P, Span } from 'flowbite-svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	let categories = data?.categories?.data;
</script>

<svelte:head>
	<title>หมวดหมู่</title>
</svelte:head>

<header>
	<div class="p-7">
		<Heading class="mb-2 font-bold">เลือกหมวดหมู่</Heading>
		<P>คุณสามารถเลือกดูผู้รับบริจากรายหมวดหมู่ได้ด้านล่าง</P>
	</div>
</header>
<main
	class="
	m-auto
	container
	flex flex-col mb-7
	sm:grid sm:grid-cols-2
	md:grid-cols-2
	lg:grid-cols-3
	 "
>
	{#each categories as category}
		<a
			href="/category/{category.referId}"
			hreflang={category.locale}
			class="
			mx-5 my-5 cursor-pointer
			md:mx-5 md:my-5
			hover:z-50
			group
			"
		>
			<div
				class="
		flex flex-col bg-blue-200 dark:bg-blue-900 shadow-md overflow-hidden rounded-xl
		group-hover:bg-blue-600 group-hover:text-yellow-200 group-hover:shadow-xl transition
		"
			>
				<div class="basis-36 md:basis-52 relative overflow-hidden">
					<DynamicImage
						formats={category.heroBanner.formats}
						alt={category.heroBanner.alternativeText}
						className="z-10 group-hover:z-10 absolute saturate-50	group-hover:scale-110 transition-all group-hover:ease-in-out group-hover:saturate-100
			"
					/>
				</div>
				<div class="p-3 text-center">
					<Span class="text-xl font-semibold">
						{category.displayTitle}
					</Span>
					<P class="text-center text-md line-clamp-2">
						{category.description}
					</P>
				</div>
			</div>
		</a>
	{/each}
</main>
<Span class="text-gray-600 text-center block mb-3">
	พบทั้งสิ้น {categories.length} รายการ
</Span>
