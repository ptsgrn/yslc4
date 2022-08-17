<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }) {
		return {
			props: {
				code: status,
				message: error?.message
			}
		};
	}
</script>

<script>
	export let code = '';
	export let message = '';
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
