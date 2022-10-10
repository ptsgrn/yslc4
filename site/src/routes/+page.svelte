<script>
	// import Button from '../components/Button.svelte';
	import Human from 'svelte-material-icons/Human.svelte';
	import IconEmailOutline from 'svelte-material-icons/EmailOutline.svelte';
	import CommentSearchOutline from 'svelte-material-icons/CommentSearchOutline.svelte';
	import Introduce2 from '@assets/introduces2.png';
	import { Heading, P, Secondary, Span } from 'flowbite-svelte';
	import MascotImg from '@assets/mascot.png';
</script>

<svelte:head>
	<title>เติมเต็มความหวัง ให้การบริจาคของคุณมีคุณค่า</title>
</svelte:head>
<main
	class="dark:bg-gradient-to-br dark:bg-yellow-900 dark:from-orange-800 dark:to-red-800 mx-auto"
>
	<div class="flex flex-col sm:flex-row pt-10">
		<div class="sm:w-full mr-10 sm:mr-none sm:mb-10">
			<img
				src={MascotImg}
				class="h-56 w-auto m-auto py-3 
			after:block after:bg-yellow-200 after:w-20 after:h-20 after:content-['.']
			"
				alt="มาสคอตของเติมเต็ม: แมวสวมหมวกสีฟ้าถือหัวใจ สะพายกระเป๋าที่มีหัวใจหลายดวงข้างใน"
			/>
		</div>
		<div class="text-center sm:text-left flex flex-col justify-center px-10 sm:pl-0">
			<Heading class="block text-center sm:text-left">เติมเต็ม</Heading>
			<Secondary class="block text-center sm:text-left">
				ศูนย์กลางความช่วยเหลือที่<Span highlight>ไม่มีที่ว่างให้มิจฉาชีพ</Span>
			</Secondary>
			<P class="block text-center sm:text-left">
				เติมเต็ม ช่วยเชื่อมต่อผู้ที่ต้องการบริจาคและผู้รับบริจาคเข้าด้วยกัน บันทึกข้อมูลต่าง ๆ ไว้
				เพื่อให้สามารถเข้าถึงข้อมูลที่ถูกต้องและได้รับการตรวจสอบแล้วทั้งหมด
			</P>
		</div>
	</div>
	<div class="py-10 flex flex-col justify-center items-center">
		<Heading tag="h2" class="text-3xl p-2 mb-3 font-bold text-center">เริ่มต้น</Heading>
		<a href="/category" class="inline w-40">
			<button
				class="bg-white dark:bg-yellow-900 dark:text-white py-1.5 px-2 rounded-lg w-44 text-sm text-left shadow-md hover:shadow-lg active:shadow-sm transition duration-150"
			>
				<span class="mr-3">
					<Human size="27" />
				</span>
				<span class="w-40"> ผู้ขอรับบริจาค </span>
			</button>
		</a>
		<a href="/submit" class="inline w-40 mt-4">
			<button
				class="bg-white dark:bg-yellow-900 dark:text-white py-1.5 px-2 rounded-lg w-44 text-sm text-left shadow-md hover:shadow-lg active:shadow-sm transition duration-150"
			>
				<span class="mr-3">
					<IconEmailOutline size="27" />
				</span>
				<span class="w-40"> ยื่นขอรับบริจาค </span>
			</button>
		</a>
		<a href="/scan" class="inline w-40 mt-4">
			<button
				class="bg-white dark:bg-yellow-900 dark:text-white py-1.5 px-2 rounded-lg w-44 text-sm text-left shadow-md hover:shadow-lg active:shadow-sm transition duration-150"
			>
				<span class="mr-3">
					<CommentSearchOutline size="27" />
				</span>
				<span class="w-40"> แสกนรูปภาพ </span>
			</button>
		</a>
	</div>
	<img src={Introduce2} alt="introduce" class="w-full h-full" />
</main>
