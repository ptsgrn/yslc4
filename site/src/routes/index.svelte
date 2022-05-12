<script>
  // import Button from '../components/Button.svelte';
  import Human from 'svelte-material-icons/Human.svelte'
  import IconEmailOutline from 'svelte-material-icons/EmailOutline.svelte'
  import CommentSearchOutline from 'svelte-material-icons/CommentSearchOutline.svelte'
  import Introduce1 from '@assets/introduces1.png'
  import Introduce2 from '@assets/introduces2.png'
</script>
<svelte:head>
  <title>
    เติมเต็มความหวัง ให้การบริจาคของคุณมีคุณค่า
  </title> 
</svelte:head>
<main class="bg-yellow-200 container mx-auto">
  <img src={Introduce1} alt="introduce" class="w-full h-full" />
  <div class="py-10 flex flex-col justify-center items-center">
    <h2 class="text-3xl p-2 mb-3 font-bold text-center">
      คุณอยากจะไปไหน
    </h2>
    <a href="donors" class="inline w-40">
      <button class="bg-white py-1.5 px-2 rounded-lg w-44 text-sm text-left shadow-md hover:shadow-lg active:shadow-sm transition duration-150">
        <span class="mr-3">
          <Human size="27" />
        </span>
        <span class="w-40">
          ผู้ขอรับบริจาค
        </span>
      </button>
    </a>
    <a href="/donors" class="inline w-40 mt-4">
      <button class="bg-white py-1.5 px-2 rounded-lg w-44 text-sm text-left shadow-md hover:shadow-lg active:shadow-sm transition duration-150">
        <span class="mr-3">
          <IconEmailOutline size="27" />
        </span>
        <span class="w-40">
          ยื่นขอรับบริจาค
        </span>
      </button>
    </a>
    <a href="/scan" class="inline w-40 mt-4">
      <button class="bg-white py-1.5 px-2 rounded-lg w-44 text-sm text-left shadow-md hover:shadow-lg active:shadow-sm transition duration-150">
        <span class="mr-3">
          <CommentSearchOutline size="27" />
        </span>
        <span class="w-40">
          แสกนรูปภาพ
        </span>
      </button>
    </a>
  </div>
  <img src={Introduce2} alt="introsuce" class="w-full h-full" />
</main>