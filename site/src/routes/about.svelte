<script>
  import IconExternalLink from 'svelte-material-icons/LinkVariant.svelte';
  const socialLinks = [
    {
      name: 'facebook',
      url: 'https://www.facebook.com/Thermtemcom-116128367755997/',
      text: 'Thermtem.com'
    },
    {
      name: 'บัญชีทางการบนไลน์',
      url: 'https://line.me/ti/p/~@287htijc',
      text: '@287htijc'
    },
    {
      name: 'email',
      url: 'mailto:thermtem.org@gmail.com',
      text: 'thermtem.org@gmail.com'
    }
  ]
</script>
<style>
  a {
    color: rgb(24, 87, 187);
  }
</style>
<svelte:head>
  <title>
    เกี่ยวกับเรา
  </title>
</svelte:head>
<main class="p-5 max-w-2xl container mx-auto">
  <h1 class="text-4xl text-center m-10">
    เกี่ยวกับเรา
  </h1>
  <p class="">
    "เติมเต็ม" เกิดขึ้นมาจากคน 8 คนที่พบกันในค่ายพัฒนาไซเบอร์ (Young Safe Internet Leader Camp 4) ของดีแทค (DTAC) เพื่อป้องกันช่องโหว่ของโจรกรรมทางไซเบอร์ 
    เรื่องการบริจาคและการนำรูปภาพของผู้อื่นไปแอบอ้าง โดยเติมเต็ม จะเป็นตัวกลางการตรวจสอบและการเผยแพร่ เพื่อช่วยเหลือผู้ประสบความลำบากและไม่ผ่านมิจฉาชีพ 
  </p>
  <h2 class="text-xl font-semibold mt-5 mb-3">
    3 บริการหลักของเติมเต็ม
  </h2>
  <ul class="list-['_-_'] ml-5">
    <li>ผู้ขอรับบริจาค - รวบรวมข้อมูลรายชื่อผู้ที่ต้องการความช่วยเหลือ โดยมีรายละเอียดลต่างๆ ซึ่งได้รับการตรวจสอบและยืนยันแล้วว่าเป็นความจริง สร้างความเชื่อมั่น ช่องทางและรายละเอียดยังช่วยสร้างโอกาสด้านอื่นๆให้กับผู้ที่อยากยื่นมือเข้ามาช่วยด้วย นอกจากนี้เมื่อยอดเงินถึงแล้ว ยังได้แบ่งปันโอกาสให้กับผู้ที่เดือดร้อนคนอื่นๆด้วย</li>
    <li>ยื่นขอรับบริจาค - ผู้ที่ต้องการความช่วยเหลือกรอกประวัติต่างๆ และเมื่อได้รับการติดต่อ ตรวจสอบ และยืนยันแล้วว่าเป็นความจริง จะมีการนำขึ้นประชาสัมพันธ์บนเว็บไซต์ เพื่อเพิ่มโอกาสการมองเห็นและช่วยผู้ที่กำลังเดือดร้อน</li>
    <li>แสกนรูปภาพ - ผู้ใช้งานสามารถเซฟรูปที่ได้จากมิขฉาชีพมาตรวจสอบ เปรียบเทียบกับรูปที่มีอยู่ในฐานข้อมูลเพื่อแสดงข้อมูลรายละเอียดที่ถูกต้องของผู้ประสบภัยตัวจริง</li>
  </ul>

  <h2 class="text-xl font-semibold mt-5 mb-3">
    สมาชิกในทีม
  </h2>
  <p class="p-5 sr-only">
    เรามาจากต่างที่กันแต่ก็มารวมกันได้แบบนี้:
  </p>
  <ul class="list-['-_'] list-inside marker:text-gray-800 ml-3">
    <li><tt>CEO</tt> dt-043 มาร์ค</li>
    <li><tt>CMO</tt> dt-184 ม่อน</li>
    <li><tt>CMO</tt> dt-081 เอ๊ะ</li>
    <li><tt>CTO</tt> dt-166 แมน</li>
    <li><tt>CTO</tt> dt-168 กองทัพ</li>
    <li><tt>CCO</tt> dt-191 ภูมิ</li>
    <li><tt>CCO</tt> dt-073 อินดี้</li>
    <li><tt>CFO</tt> dt-044 ดุหยง</li>
  </ul>
  <h2 class="text-xl font-semibold mt-5 mb-3">
      ช่องทางการรับข่าวสาร
  </h2>
  <ul class="list-['-_'] list-inside marker:text-gray-800 ml-3">
    {#each socialLinks as link}
      <li>
        <b>{link.name}:</b>&nbsp;<a href={link.url}>
          {link.text} <IconExternalLink size="1em"/>
        </a>
      </li>
    {/each}
  </ul>
</main>