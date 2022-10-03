<script>
	import { Button, Heading, P, Span } from 'flowbite-svelte';
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
		<Heading class="text-center text-2xl font-bold">แสกนรูปภาพ</Heading>
		<input
			type="file"
			id="file"
			class="hidden"
			bind:files
			on:change={onFileUpload}
			accept=".jpeg,.jpg,.png,.gif"
		/>
		<label
			class="
      w-full max-w-md m-5 min-w-fit py-20 bg-gray-200 rounded-3xl cursor-pointer
      flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-150
      border-4 border-blue-300 overflow-hidden
			flex-row
			dark:bg-gray-900 dark:border-gray-700
    "
			for="file"
			title="กดเพื่อเลือกรูปภาพสำหรับอัปโหลด"
		>
			{#if image}
				<img src={image} alt="ภาพที่นำเข้า" class="" />
			{:else}
				<Span><IconImageFile size="35" /></Span>
				<Span class="text-center ml-2">เลือกรูปภาพ</Span>
			{/if}
		</label>
		<Button type="submit">ตกลง</Button>

		<P class="w-full max-w-md mt-10">
			<b>รูปแบบการทำงานของการสแกน:</b> เมื่อนำรูปมาสแกนระบบจะทำการสแกนรูปที่ท่านแนบลงมาและทำการ สแกนรูปภาพที่เหมือนในเว็บไซต์ให้ท่านได้เช็คการบริจาคนั้นๆว่าชื่อและเลขบัญชีเหมือนกันหรือไม่เพื่อให้ท่านมั่นใจในการบริจาคว่าจะไม่ถูก
			มิจฉาชีพหลอก
		</P>
	</div>
</main>
