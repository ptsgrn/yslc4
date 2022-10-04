<script>
	import { Button, Heading, P, Secondary } from 'flowbite-svelte';
  import { page } from '$app/stores'
</script>

<main class="container m-auto py-10 px-5 md:px-0">
  <Heading>API Endpoint</Heading>
  <Secondary>
    {$page.url.pathname}
  </Secondary>
  <P>
    หน้านี้ (และหน้าย่อยทั้งหมดใน <code>/api</code>) มีไว้สำหรับการดึงข้อมูลจาก backend ของเราเท่านั้น เพื่อนำส่งข้อมูลผ่านหน้าเว็บถึงคุณ
  </P>
  <Button href="/">กลับหน้าหลัก</Button>
</main>