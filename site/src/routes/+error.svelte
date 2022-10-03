<script>
	import { page } from '$app/stores';
	import { Heading } from 'flowbite-svelte';
	let code = $page.status;
	let message = $page.error?.message;
</script>

<svelte:head>
	<title>{code}: {message}</title>
</svelte:head>

<main class="pb-10">
	<Heading class="text-2xl text-center mt-5 animate-bounce">
		{message}
	</Heading>
</main>
