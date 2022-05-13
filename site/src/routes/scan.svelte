<script>
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
<main class="container py-10 p-5">
	<div class="flex flex-col items-center">
		<IconShutter size="40px" />
		<h1 class="text-center text-2xl font-bold">แสกนรูปภาพ</h1>
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
      w-full max-w-md m-5 aspect-[16/9] bg-gray-200 rounded-3xl cursor-pointer
      flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-150
      border-4 border-blue-300 overflow-hidden
    "
			for="file"
			title="กดเพื่อเลือกรูปภาพสำหรับอัปโหลด"
		>
			{#if image}
				<img src={image} alt="ภาพที่นำเข้า" class="" />
			{:else}
				<IconImageFile size="35px" />
				<span class="text-center ml-2"> เลือกรูปภาพ </span>
			{/if}
		</label>
		<button
			class="bg-red-500 hover:bg-red-700 text-white drop-shadow-lg font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-150"
		>
			ตกลง
		</button>

		<p class="w-full max-w-md mt-10">
			<b>รูปแบบการทำงานของการสแกน:</b> เมื่อนำรูปมาสแกนระบบจะทำการสแกนรูปที่ท่านแนบลงมาและทำการ สแกนรูปภาพที่เหมือนในเว็บไซต์ให้ท่านได้เช็คการบริจาคนั้นๆว่าชื่อและเลขบัญชีเหมือนกันหรือไม่เพื่อให้ท่านมั่นใจในการบริจาคว่าจะไม่ถูก
			มิจฉาชีพหลอก
		</p>
	</div>
</main>
