<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ url }) {
		return {
			props: {
				category: url.searchParams.get('category')
			}
		};
	}
</script>

<script>
	import HeroIMG from '@assets/banner.jpg';
	import IconWheelchair from 'svelte-material-icons/WheelchairAccessibility.svelte';
	import IconKid from 'svelte-material-icons/BabyFaceOutline.svelte';
	import IconHumanCane from 'svelte-material-icons/HumanCane.svelte';
	import IconPaw from 'svelte-material-icons/PawOutline.svelte';
	import IconHomeFlood from 'svelte-material-icons/HomeFlood.svelte';
	import IconHandHeart from 'svelte-material-icons/HandHeartOutline.svelte';
	import IconAll from 'svelte-material-icons/SetAll.svelte';
	import IcomAlert from 'svelte-material-icons/AlertBoxOutline.svelte';
	import PHD_3x4 from '@assets/phd_400x300.png';
	import { donorsList } from '@lib/store/mockupdata';
	export let category = '';
	const categories = [
		{
			icon: IconAll,
			id: 'all',
			title: 'ทั้งหมด'
		},
		{
			icon: IconWheelchair,
			id: 'patients-and-disabilities',
			title: 'ผู้ป่วยและผู้พิการ'
		},
		{
			icon: IconKid,
			id: 'children',
			title: 'เด็กและเยาวชน'
		},
		{
			icon: IconHumanCane,
			id: 'old-people',
			title: 'ผู้สูงอายุ'
		},
		{
			icon: IconPaw,
			id: 'animals',
			title: 'สัตว์'
		},
		{
			icon: IconHomeFlood,
			id: 'accident',
			title: 'อุบัติภัย'
		},
		{
			icon: IconHandHeart,
			id: 'other',
			title: 'อื่น ๆ'
		}
	];
	/**
	 * @typedef {import('@lib/store/mockupdata').MockupDataDonorsList} MockupDataDonorsList
	 */
	/** @type { MockupDataDonorsList[] } */
	let dataToShow = [];
	$: {
		if (category === 'all' || !category || !categories.find((c) => c.id === category)?.id) {
			dataToShow = $donorsList;
		} else {
			dataToShow = $donorsList.filter((donor) => donor.category === category);
		}
	}
</script>

<svelte:head>
	<title
		>รายการผู้ขอรับบริจาค{category === 'all' ||
		!category ||
		!categories.find((c) => c.id === category)?.id
			? ''
			: `ในหมวด: ${categories.find((c) => c.id === category)?.title}`}</title
	>
</svelte:head>
<main>
	<div class="relative w-full overflow-hidden">
		<img src={HeroIMG} alt="Homeless sideroad" class="w-full" />
		<div
			class="absolute top-[50%] -translate-y-[50%] inset-x-0 text-xs text-center backdrop-blur-sm w-[50%] p-2 mx-auto rounded-md drop-shadow-xl max-w-md"
		>
			<h1 class="text-3xl font-bold text-white drop-shadow-md">เติมเต็ม</h1>
			<span class="text-white drop-shadow-md text-lg">
				มาช่วยเติมเต็ม ส่งมอบโอกาสให้กับทุกๆคน ร่วมกันสร้างสังคมแห่งความเกื้อกูลกัน
				และเติมเต็มหวามหวังแห่งการบริจาคอีกครั้ง
			</span>
		</div>
	</div>
	<div class="">
		<h2 class="text-2xl font-bold text-center pb-2 mt-10">ผู้ขอรับบริจาค</h2>
		<div class="text-center">
			{#if category && categories.find((c) => c.id === category)?.title && category !== 'all'}
				หมวดหมู่: {categories.find((c) => c.id === category)?.title}
			{:else}
				คุณสามารถเลือกหมวดหมู่เพิ่มเติมได้ด้านล่าง
			{/if}
		</div>
		<div class="flex flex-row items-center justify-center flex-wrap m-3">
			{#each categories as { icon, id, title }}
				<a href={`/donors?category=${id}`}>
					<div
						class="
            flex flex-col
            w-32 
            items-center justify-start 
            rounded-md 
            p-2 mx-2 my-4
            md:first:ml-0 md:last:mr-0
            hover:bg-blue-100 active:bg-blue-200
            {category === id ? 'bg-blue-50' : ''}
          "
					>
						<svelte:component this={icon} size="30px" />
						<span class="text-sm font-bold text-center">
							{title}
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<!-- 3x3 grid -->
	<div
		class="
    grid grid-flow-row gap-3
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
  "
	>
		{#each dataToShow as data}
			<a
				href={`/donor/${data.id}`}
				class="
        p-3 m-2 rounded-2xl
        hover:shadow-md hover:bg-blue-50 hover:-translate-y-1
        transition-all duration-200
        visited:order-last peer-visited:order-last
      "
			>
				{#if data.image}
					<img src={data.image} alt={data.name} class="w-full aspect-[4/3] rounded-2xl mb-4" />
				{:else}
					<img src={PHD_3x4} alt={data.name} class="w-full aspect-[4/3] rounded-2xl mb-4" />
				{/if}
				<b class="text-lg">
					{data.name}
				</b>
				<div class="line-clamp-2">
					{typeof data.problems === 'object'
						? data.problems.persona
						: data.problems.persona}&nbsp;&middot;&nbsp;{data.problems.details}
				</div>
			</a>
		{/each}
	</div>
	{#if dataToShow.length !== 0}
		<div class="text-center pt-5 pb-2">
			พบ {dataToShow.length} รายการ
		</div>
	{:else}
		<div
			class="text-center p-5 font-bold border-2 m-10 border-red-600 text-red-600 flex flex-col items-center rounded-xl max-w-md mx-auto"
		>
			<IcomAlert size="30px" />
			<span class="mt-3"> ขออภัย ไม่พบข้อมูลหรือยังไม่มีผู้ขอรับบริจาคในขณะนี้ </span>
		</div>
	{/if}
</main>
