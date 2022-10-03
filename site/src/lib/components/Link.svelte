<script>
	export let href = '';
</script>

<a {href} class="text-blue-600 dark:text-blue-500 link-underline"><slot /></a>

<style>
	.link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(rgb(28 100 242 / var(--tw-text-opacity)), rgb(63 131 248 / var(--tw-text-opacity)));
		background-size: 0 3px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size .5s ease-in-out;
	}

	.link-underline:hover {
		background-size: 100% 3px;
		background-position: 0 100%
	}
</style>