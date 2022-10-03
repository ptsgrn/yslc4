<script>
	import IconExternalLink from 'svelte-material-icons/LinkVariant.svelte';
	import IconEmail from 'svelte-material-icons/EmailOutline.svelte';
	import { Heading, Li, List } from 'flowbite-svelte';
	import Link from '@lib/components/Link.svelte';
	const socialLinks = [
		{
			name: 'facebook',
			url: 'https://www.facebook.com/Thermtemcom-116128367755997/',
			text: 'Thermtem.com'
		},
		{
			name: 'บัญชีทางการบนไลน์',
			url: 'https://line.me/ti/p/~@287htijc',
			text: '@287htijc'
		},
		{
			name: 'email',
			url: 'mailto:thermtem.org@gmail.com',
			text: 'thermtem.org@gmail.com'
		}
	];
</script>

<svelte:head>
	<title>ติดต่อเรา</title>
</svelte:head>
<main
	class="
  max-w-2xl
  container mx-auto
  p-5
  "
>
	<Heading class="text-4xl text-center m-10">ติดต่อเรา</Heading>
	<Heading tag="h2" class="text-xl font-semibold mt-5">สื่อออนไลน์</Heading>
	<List class="marker:text-gray-800 ml-3">
		{#each socialLinks as link}
			<Li>
				<b>{link.name}:</b>&nbsp;<Link href={link.url}>
					{link.text}
					<IconExternalLink size="1em" />
				</Link>
			</Li>
		{/each}
	</List>
	<Heading tag="h2" class="text-xl font-semibold mt-5">เว็บไซต์</Heading>
	<List class="marker:text-gray-800 ml-3">
		<Li>
			ดูซอร์สโค้ดบน <Link href="https://github.com/ptsgrn/yslc4/tree/main/site"
				>GitHub <IconExternalLink size="1em" /></Link>
		</Li>
		<Li>
			กรุณาติดต่อผู้ดูแลเว็บที่ <Link href="mailto:contact+s9t34onc@patsag.one"
				>contact+s9t34onc@patsag.one <IconEmail size="1em" /></Link>
		</Li>
	</List>
</main>