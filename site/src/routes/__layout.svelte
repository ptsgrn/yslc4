<script>
  import "../app.css";
  import LogoIMG from "../assets/logo_uncrop.png";
  import DtacSafeInternetIMG from '../assets/dtacSIC.png'
  import YSLCIMG from '../assets/yscl-dtac-1024x574.png'
  import IconEmailOutline from 'svelte-material-icons/EmailOutline.svelte'
  import LineSVGIMG from '../assets/line-brands.svg'
</script>
<nav class="bg-blue-400">
  <div class="max-w-5xl mx-auto">
    <div class="flex items-center justify-evenly">
      <a href="/" class="flex items-center">
        <span class="text-md p-1">
          หน้าแรก
        </span>
      </a>
      <a href="/" class="flex items-center">
        <span class="text-md p-1">
          ผู้ขอรับบริจาค
        </span>
      </a>
      <a href="/" class="flex items-center">
        <span class="text-md p-1">
          ยื่นขอรับบริจาค
        </span>
      </a>
      <a href="/" class="flex items-center">
        <span class="text-md p-1">
          ประกาศ
        </span>
      </a>
      <a href="/" class="flex items-center">
        <span class="text-md p-1">
          เข้าสู่ระบบ
        </span>
      </a>
    </div>
  </div>
</nav>
<slot />
<footer class="flex flex-row bg-gray-400 justify-center items-center p-3 max-w-5xl">
  <img src={LogoIMG} alt="Logo" class="h-14 w-14 rounded-full mx-4" />
  <img src={DtacSafeInternetIMG} alt="dtacSafeInternet logo" class="h-14 mx-4" />
  <img src={YSLCIMG} alt="Young Safe Internet Leader CyberCamp" class="h-14 mx-4"/>
  <ul class="flex flex-col justify-center mx-4 text-xs">
    <!-- <div class="flex">
      <a href='mailto:thermtem.org@gmail.com' class="">
        <IconEmailOutline size="20" />
      </a>
      <img src={LineSVGIMG} alt="line icon" class="h-[18px]" />
    </div> -->
    <li>
      Email:&nbsp;<a href='mailto:thermtem.org@gmail.com'>thermtem.org@gmail.com</a>
    </li>
    <li>
      Line&nbsp;Official:&nbsp;<a href='https://line.me/ti/p/~@287htijc'>@287htijc</a>
    </li>
    <li>
      Facebook:&nbsp;<a href='https://www.facebook.com/thermtem.org'>Thermtem.org</a>
    </li>
  </ul>
</footer>