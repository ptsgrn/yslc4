<script context="module">

/** @type {import('@sveltekit/kit').Load} */
export async function load({ url }) {
  return {
    props: {
      url
    }
  }
}
</script>
<script>
  import "../app.css";
  import LogoIMG from "@assets/logo_uncrop.png";
  import DtacSafeInternetIMG from '@assets/dtacSIC.png'
  import YSLCIMG from '@assets/yscl-dtac-1024x574.png'
  import IconWarning from 'svelte-material-icons/AlertCircleOutline.svelte'
  import { dismissInPresentMode } from '@lib/store/dismiss';
  export let url;
  function isCurentPage(link) {
    return url.pathname === link;
  }
  let navigations = [
    {
      text: 'หน้าหลัก',
      link: '/'
    },
    {
      text: 'เกี่ยวกับ',
      link: '/about'
    },
    {
      text: 'ผู้ขอรับบริจาค',
      link: '/donors'
    },
    {
      text: 'ยื่นขอรับบริจาค',
      link: '/submit'
    },
    // {
    //   text: 'ประกาศ',
    //   link: '/announcements'
    // },
    {
      text: 'ติดต่อเรา',
      link: '/contact'
    },
    {
      text: 'แสกน',
      link: '/scan',
      highlight: true
    }
  ]
  let isMenuOpen = false
</script>
<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;800&family=JetBrains+Mono:ital,wght@0,400;0,500;0,800;1,400;1,800&family=Noto+Sans+Thai&display=swap" rel="stylesheet">
</svelte:head>
<div class="bg-red-700 text-yellow-50 p-2 text-center text-sm { $dismissInPresentMode ? 'hidden' : 'block'}">
  <IconWarning size="25px"/> เว็บไซต์อยู่ในโหมดนำเสนอ หลาย ๆ ฟังก์ชันอาจใช้งานไม่ได้ และเราตั้งใจให้เป็นแบบนั้น <button class="underline" on:click={()=> $dismissInPresentMode = true }>ปิด</button>
</div>
<nav class="bg-white md:flex md:flex-row md:justify-between relative z-50">
  <a href="/" class="w-14 md:w-20 lg:w-[1fr] m-3 md:p-1 text-center mx-auto block text-xl text-blue-500 md:flex md:items-center relative">
    <img src={LogoIMG} alt="เติมเต็ม" class="rounded-full md:w-14" />
    <span class="ml-2 hidden w-28 lg:block whitespace-nowrap">เติมเต็ม</span>
  </a>
  <div class="w-full mx-auto absolute md:static md:max-w-5xl">
    <div class="
      h-full
      {isMenuOpen?'flex':'hidden'} md:flex flex-col items-center justify-center
      p-2 text-lg
      md:flex-row md:items-center md:justify-between
      lg:static
      bg-white
      w-full
      md:max-w-5xl
    ">
    {#each navigations as entry}
      <a href={entry.link} class="
        w-full flex 
        justify-center 
        items-center 
        md:px-3 md:border-0 md:w-sm md:hover:shadow-md md:rounded-lg md:mx-2
        border-b-2 
        border-blue-300 transition-all duration-200
        hover:bg-blue-200
        last:border-b-0
        {isCurentPage(entry.link)?'bg-blue-100':''}
        {entry.highlight?'bg-blue-500 text-white md:font-bold md:shadow-lg':''}
      ">
        <span class="text-md p-2">
          {entry.text}
        </span>
      </a>
    {/each}
      <!-- <a href="/login" class="
        w-full flex 
        justify-center 
        items-center 
        md:px-3  md:border-0 md:w-sm md:hover:shadow-md md:hover:rounded-lg
        border-b-2 
        border-blue-300 transition-all duration-200
        hover:bg-blue-200
      ">
        <span class="text-md p-2">
          เข้าสู่ระบบ
        </span>
      </a> -->
    </div>
  </div>
  <button class="p-2 absolute cursor-pointer border-2 right-3 rounded-lg top-[50%] -translate-y-[50%] md:hidden {isMenuOpen ?'bg-gray-300':''}" on:click={()=> isMenuOpen = !isMenuOpen}>
    เมนู
  </button>
</nav>
<slot />
<footer class="flex flex-col md:flex-row bg-gray-300 justify-center items-center p-3">
  <div class="flex flex-row mb-3 md:mb-0">
    <img src={LogoIMG} alt="Logo" class="h-14 w-14 rounded-full mx-4" />
    <img src={DtacSafeInternetIMG} alt="dtacSafeInternet logo" class="h-14 mx-4" />
  </div>
  <div class="flex flex-row">
    <img src={YSLCIMG} alt="Young Safe Internet Leader CyberCamp" class="h-14 mx-4"/>
    <ul class="flex flex-col justify-center mx-4 text-xs">
      <!-- <div class="flex">
        <a href='mailto:thermtem.org@gmail.com' class="">
          <IconEmailOutline size="20" />
        </a>
        <img src={LineSVGIMG} alt="line icon" class="h-[18px]" />
      </div> -->
      <li>
        <b>Email:</b>&nbsp;<a href='mailto:thermtem.org@gmail.com'>thermtem.org@gmail.com</a>
      </li>
      <li>
        <b>Line&nbsp;Official:</b>&nbsp;<a href='https://line.me/ti/p/~@287htijc'>@287htijc</a>
      </li>
      <li>
        <b>Facebook:</b>&nbsp;<a href='https://www.facebook.com/Thermtemcom-116128367755997/'>Thermtem.org</a>
      </li>
    </ul>
  </div>
</footer>