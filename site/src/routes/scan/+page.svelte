<script>
	import { Button, Heading, P, Span, Alert } from 'flowbite-svelte';
	import IconShutter from 'svelte-material-icons/CameraIris.svelte';
	import IconImageFile from 'svelte-material-icons/FileImagePlusOutline.svelte';
	/**
	 * @type {string | null | undefined}
	 */
	let image;
	/**
	 * @type {FileList | null | undefined}
	 */
	let files;
	function onFileUpload() {
		if (files && files.length) {
			image = URL.createObjectURL(files[0]);
		}
	}
</script>

<svelte:head>
	<title>สแกนแชต</title>
</svelte:head>
<main class="container py-10 p-5 m-auto">
	<div class="flex flex-col items-center">
		<Span>
			<IconShutter size="40px" />
		</Span>
		<Heading class="text-center text-2xl font-bold">สแกนรูปภาพ</Heading>
		<Alert color="none" class="bg-red-700 text-white mt-5">
			<b>ระบบกำลังอยู่ระหว่างการพัฒนา</b> ยังไม่สามารถใช้งานได้ในขณะนี้
		</Alert>
		<input
			type="file"
			id="file"
			class="hidden"
			bind:files
			on:change={onFileUpload}
			accept=".jpeg,.jpg,.png,.gif"
			disabled
		/>
		<label
			class="
		w-full max-w-md m-5 min-w-fit py-20 bg-gray-200 rounded-3xl
		flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-150
		border-4 border-blue-300 overflow-hidden
		flex-row
		dark:bg-gray-900 dark:border-gray-700
		opacity-50 cursor-not-allowed 
    "
			for="file"
			title="กำลังพัฒนา ยังพร้อมใช้งานได้ในขณะนี้"
		>
			{#if image}
				<img src={image} alt="ภาพที่นำเข้า" class="" />
			{:else}
				<Span><IconImageFile size="35" /></Span>
				<Span class="text-center ml-2">เลือกรูปภาพ</Span>
			{/if}
		</label>
		<Button disabled type="submit">ตกลง</Button>
		<P class="w-full max-w-md mt-10">
			<b>รูปแบบการทำงานของการสแกน:</b> เมื่อนำรูปมาสแกนระบบจะทำการสแกนรูปที่ท่านแนบลงมาและทำการ สแกนรูปภาพที่เหมือนในเว็บไซต์ให้ท่านได้เช็คการบริจาคนั้นๆว่าชื่อและเลขบัญชีเหมือนกันหรือไม่เพื่อให้ท่านมั่นใจในการบริจาคว่าจะไม่ถูก
			มิจฉาชีพหลอก
		</P>
	</div>
</main>
