<script>
  // import Button from '../components/Button.svelte';
  import Human from 'svelte-material-icons/Human.svelte'
</script>
<main class="bg-mainpage back w-screen h-screen bg-center hover:bg-right transition-all duration-500">
  <div class="py-4 mx-auto max-w-sm p-4 text-center absolute top-[50%]"> <!-- container-wrapper -->
    <div class="flex flex-col items-center"> <!-- top -->
      <div class="w-20 h-20 rounded-full block bg-gray-400">
        <!-- <img src="" alt="Avatar" class="w-full h-full rounded-full"> -->
      </div>
      <h1 class="font-bold my-2 text-xl">
        เติมเต็ม
      </h1>
      <em class="text-md">
        คำคมซึ้ง ๆ
      </em>
    </div>
    <div class="">
      <div class="flex flex-col items-center">
        <a href="/donors" class="py-1">
          <button class="
          bg-lime-300 hover:bg-lime-500 active:bg-lime-700
          shadow-lg hover:shadow-md
          transition-all duration-500
          py-1 px-3 rounded-2xl 
          w-[20ch] 
          flex
          items-center
          ">
            <span class="w-[1.6em] text-left">
              <Human size="1.4em"/>
            </span>
            <span>
              ผู้ขอรับบริจาก
            </span>
          </button>
        </a>
      </div>
    </div>
  </div>
</main>