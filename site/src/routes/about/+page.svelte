<script>
	const title = 'เกี่ยวกับ';
	import HeroIMG from '@assets/banner.jpg';
	import Link from '@lib/components/Link.svelte';
	import { Heading, Li, List, Listgroup, ListgroupItem, P } from 'flowbite-svelte';
	import IconExternalLink from 'svelte-material-icons/LinkVariant.svelte';
	const socialLinks = [
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/Thermtemcom-116128367755997/',
			text: 'Thermtem.com'
		},
		{
			name: 'บัญชีทางการบนไลน์',
			url: 'https://line.me/ti/p/~@287htijc',
			text: '@287htijc'
		},
		{
			name: 'Email',
			url: 'mailto:thermtem.org@gmail.com',
			text: 'thermtem.org@gmail.com'
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<main class="p-5 max-w-2xl container mx-auto">
	<div class="relative w-full overflow-hidden">
		<img src={HeroIMG} alt="Our banner" class="w-full" />
		<div
			class="absolute top-[50%] -translate-y-[50%] inset-x-0 text-xs text-center backdrop-blur-sm w-[50%] p-2 mx-auto rounded-md drop-shadow-xl max-w-md"
		>
			<Heading class="text-3xl font-bold text-white drop-shadow-md">{title}</Heading>
		</div>
	</div>
	<P class="mt-5">
		"เติมเต็ม" เกิดขึ้นมาจากคน 8 คนที่พบกันในค่ายพัฒนาไซเบอร์ (Young Safe Internet Leader Camp 4)
		ของดีแทค (DTAC) เพื่อป้องกันช่องโหว่ของโจรกรรมทางไซเบอร์
		เรื่องการบริจาคและการนำรูปภาพของผู้อื่นไปแอบอ้าง โดยเติมเต็ม
		จะเป็นตัวกลางการตรวจสอบและการเผยแพร่ เพื่อช่วยเหลือผู้ประสบความลำบากและไม่ผ่านมิจฉาชีพ
	</P>
	<Heading tag="h2" class="text-xl font-semibold mt-5 mb-3">3 บริการหลักของเติมเต็ม</Heading>
	<List class="list-['-_'] ml-3 text-black dark:text-white">
		<Li liClass="text-black dark:text-white">
			<b>ผู้ขอรับบริจาค</b> - รวบรวมข้อมูลรายชื่อผู้ที่ต้องการความช่วยเหลือ โดยมีรายละเอียดลต่างๆ ซึ่งได้รับการตรวจสอบและยืนยันแล้วว่าเป็นความจริง
			สร้างความเชื่อมั่น ช่องทางและรายละเอียดยังช่วยสร้างโอกาสด้านอื่นๆให้กับผู้ที่อยากยื่นมือเข้ามาช่วยด้วย
			นอกจากนี้เมื่อยอดเงินถึงแล้ว ยังได้แบ่งปันโอกาสให้กับผู้ที่เดือดร้อนคนอื่นๆด้วย
		</Li>
		<Li liClass="text-black dark:text-white">
			<b>ยื่นขอรับบริจาค</b> - ผู้ที่ต้องการความช่วยเหลือกรอกประวัติต่างๆ และเมื่อได้รับการติดต่อ ตรวจสอบ
			และยืนยันแล้วว่าเป็นความจริง จะมีการนำขึ้นประชาสัมพันธ์บนเว็บไซต์ เพื่อเพิ่มโอกาสการมองเห็นและช่วยผู้ที่กำลังเดือดร้อน
		</Li>
		<Li liClass="text-black dark:text-white">
			<b>สแกนรูปภาพ</b> - ผู้ใช้งานสามารถเซฟรูปที่ได้จากมิชฉาชีพมาตรวจสอบ เปรียบเทียบกับรูปที่มีอยู่ในฐานข้อมูลเพื่อแสดงข้อมูลรายละเอียดที่ถูกต้องของผู้ประสบภัยตัวจริง
		</Li>
	</List>

	<Heading tag="h2" class="text-xl font-semibold mt-5 mb-3">สมาชิกในทีม</Heading>
	<p class="sr-only">เรามาจากต่างที่กันแต่ก็มารวมกันได้แบบนี้:</p>
	<List class="list-['-_'] list-inside marker:text-gray-800 ml-3">
		<Li><tt>CEO</tt> dt-043 มาร์ค</Li>
		<Li><tt>CMO</tt> dt-184 ม่อน</Li>
		<Li><tt>CMO</tt> dt-081 เอ๊ะ</Li>
		<Li><tt>CTO</tt> dt-166 แมน</Li>
		<Li><tt>CTO</tt> dt-168 กองทัพ</Li>
		<Li><tt>CCO</tt> dt-191 ภูมิ</Li>
		<Li><tt>CCO</tt> dt-073 อินดี้</Li>
		<Li><tt>CFO</tt> dt-044 ดุหยง</Li>
	</List>
	<Heading tag="h2" class="text-xl font-semibold mt-5 mb-3">ช่องทางการรับข่าวสาร</Heading>
	<List class="list-['-_'] list-inside marker:text-gray-800 ml-3">
		{#each socialLinks as link}
			<Li>
				<b>{link.name}:</b>&nbsp;<Link href={link.url}>
					{link.text}
					<IconExternalLink size="1em" />
				</Link>
			</Li>
		{/each}
	</List>
</main>
