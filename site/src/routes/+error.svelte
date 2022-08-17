<script>
	import { page } from '$app/stores';
	let code = $page.status;
	let message = $page.error?.message;
</script>

<svelte:head>
	<title>{code}: {message}</title>
</svelte:head>

<main class="pb-10">
	<img src={`https://http.cat/${code}`} alt="Status: {code}" class="w-full" />
	<h2 class="text-2xl text-center mt-5">
		{message}
	</h2>
</main>
