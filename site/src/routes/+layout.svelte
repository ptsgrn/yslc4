<script>
	import '@splidejs/svelte-splide/css';
	import {
		DarkMode,
		Footer,
		FooterCopyright,
		FooterLink,
		FooterLinkGroup,
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl
	} from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import '../app.css';
	import LogoIMG from '@assets/logo_uncrop.png';
	import DtacSafeInternetIMG from '@assets/dtacSIC.png';
	import YSLCIMG from '@assets/yscl-dtac-1024x574.png';
	import IconWarning from 'svelte-material-icons/AlertCircleOutline.svelte';
	import { dismiss } from '@lib/store/dismiss';
	let key = 'user';
	onMount(() => {
		if (window.localStorage.getItem(key)) {
			$dismiss = JSON.parse(window.localStorage.getItem(key) ?? '{}');
		}
		dismiss.subscribe((value) => {
			window.localStorage.setItem(key, JSON.stringify(value));
		});
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&family=JetBrains+Mono:ital,wght@0,400;0,500;0,800;1,400;1,800&family=Noto+Sans+Thai:wght@400;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<a
	href="#content"
	class="absolute bg-blue-400 p-1 border-2 z-50 dark:text-white m-5 focus-within:opacity-100 opacity-0"
	>ข้ามไปส่วนเนื้อหา</a
>
<div class="fixed px-8 w-full z-40">
	<Navbar
		let:hidden
		let:toggle
		navClass="px-2 sm:px-4 py-2.5 absolute w-full top-0 left-0 border-b h-16 z-40"
	>
		<NavBrand href="/" class="h-11">
			<img src={LogoIMG} class="ml-3 hidden sm:h-9 sm:block rounded-full" alt="โลโก้ของเติมเต็ม" />
			<span class="self-center ml-3 whitespace-nowrap text-xl font-semibold dark:text-white"
				>เติมเต็ม</span
			>
		</NavBrand>
		<div class="flex flex-row align-baseline">
			<NavHamburger on:click={toggle} />
			<NavUl {hidden}>
				<NavLi href="/">หน้าหลัก</NavLi>
				<NavLi href="/about">เกี่ยวกับ</NavLi>
				<NavLi href="/category">ผู้ขอรับบริจาค</NavLi>
				<NavLi href="/contact">ติดต่อเรา</NavLi>
				<NavLi href="/scan">แสกน</NavLi>
			</NavUl>
			<DarkMode
				btnClass="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5 sm:p-none z-40"
			/>
		</div>
	</Navbar>
</div>
<div class="pt-16" id="content">
	<slot />
</div>

<Footer footerType="sitemap">
	<div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4 border-t-2 dark:border-gray-700">
		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">บริจาค</h2>
			<FooterLinkGroup ulClass="text-gray-300">
				<FooterLink liClass="mb-4" href="/category">หมวดหมู่</FooterLink>
				<FooterLink liClass="mb-4" href="/submit">ยื่นขอรับบริจาค</FooterLink>
				<FooterLink liClass="mb-4" href="/scan">สแกน</FooterLink>
			</FooterLinkGroup>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">สื่อสังคมออนไลน์</h2>
			<FooterLinkGroup ulClass="text-gray-300">
				<FooterLink liClass="mb-4" href="https://www.facebook.com/Thermtemcom-116128367755997/"
					>Facebook</FooterLink
				>
				<FooterLink liClass="mb-4" href="https://line.me/ti/p/~@287htijc"
					>Line Official Account</FooterLink
				>
				<FooterLink liClass="mb-4" href="mailto:mailto:thermtem.org@gmail.com">Email</FooterLink>
			</FooterLinkGroup>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">เกี่ยวกับ</h2>
			<FooterLinkGroup ulClass="text-gray-300">
				<FooterLink liClass="mb-4" href="/about">เกี่ยวกับเรา</FooterLink>
				<FooterLink liClass="mb-4" href="/contact">ติดต่อ</FooterLink>
				<FooterLink liClass="mb-4" href="/terms">ข้อกำหนดและเงื่อนไข</FooterLink>
			</FooterLinkGroup>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">โครงการ</h2>
			<FooterLinkGroup ulClass="text-gray-300">
				<FooterLink liClass="mb-4" href="https://safeinternetlab.com/"
					>Dtac Safe internet Lab</FooterLink
				>
				<FooterLink liClass="mb-4" href="https://safeinternetlab.com/challenge/camp"
					>Young Safe Internet Leader Cyber Camp ปี 4</FooterLink
				>
			</FooterLinkGroup>
		</div>
	</div>

	<div
		class="flex flex-col justify-center items-center p-3 py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between"
	>
		<div class="flex flex-row">
			<img src={LogoIMG} alt="Termtem logo" class="h-9 w-9 rounded-full mx-2" />
			<a href="https://safeinternetlab.com/" title="จัดโครงการโดย Safe Internet LAB">
				<img src={DtacSafeInternetIMG} alt="dtac Safe Internet logo" class="h-9 mx-2" />
			</a>
			<a
				href="https://safeinternetlab.com/challenge/camp"
				title="Young Safe Internet Leader Cyber Camp ปี 4"
			>
				<img src={YSLCIMG} alt="Young Safe Internet Leader CyberCamp" class="h-9 mx-2" />
			</a>
		</div>
		<div class="flex flex-row">
			<FooterCopyright
				by="ptsgrn"
				href="https://ptsgrn.dev"
				spanClass="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-2"
			/>
		</div>
	</div>
</Footer>
