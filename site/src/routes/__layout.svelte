<script>
  import "../app.css";
  import '@splidejs/svelte-splide/css/skyblue';
  import LogoIMG from "@assets/logo_uncrop.png";
  import DtacSafeInternetIMG from '@assets/dtacSIC.png'
  import YSLCIMG from '@assets/yscl-dtac-1024x574.png'
  import IconWarning from 'svelte-material-icons/AlertCircleOutline.svelte'
  import { dismissInPresentMode } from '@lib/store/dismiss';
</script>
<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;800&family=JetBrains+Mono:ital,wght@0,400;0,500;0,800;1,400;1,800&family=Noto+Sans+Thai&display=swap" rel="stylesheet">
</svelte:head>
<div class="bg-red-700 text-yellow-50 p-2 text-center text-sm { $dismissInPresentMode ? 'hidden' : 'block'}">
  <IconWarning size="25px"/> เว็บไซต์อยู่ในโหมดนำเสนอ หลาย ๆ ฟังก์ชันอาจใช้งานไม่ได้ และเราตั้งใจให้เป็นแบบนั้น <button class="underline" on:click={()=> $dismissInPresentMode = true }>ปิด</button>
</div>
<nav class="bg-blue-400">
  <div class="max-w-5xl mx-auto">
    <div class="flex items-center justify-center">
      <a href="/" class="flex items-center px-3">
        <span class="text-md p-1">
          หน้าแรก
        </span>
      </a>
      <a href="/donors" class="flex items-center px-3">
        <span class="text-md p-1">
          ผู้ขอรับบริจาค
        </span>
      </a>
      <a href="/" class="flex items-center px-3">
        <span class="text-md p-1">
          ยื่นขอรับบริจาค
        </span>
      </a>
      <a href="/announces" class="flex items-center px-3">
        <span class="text-md p-1">
          ประกาศ
        </span>
      </a>
      <a href="/login" class="flex items-center px-3">
        <span class="text-md p-1">
          เข้าสู่ระบบ
        </span>
      </a>
    </div>
  </div>
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
        <b>Facebook:</b>&nbsp;<a href='https://www.facebook.com/thermtem.org'>Thermtem.org</a>
      </li>
    </ul>
  </div>
</footer>