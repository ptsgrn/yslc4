<script>
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
</script><main class="p-5">
  <h1 class="text-4xl text-center m-10">
    เกี่ยวกับเรา
  </h1>
  <p class="">
    "เติมเต็ม" เกิดขึ้นมาจากคน 8 คนที่พบกันในค่ายพัฒนาไซเบอร์ (Young Safe Internet Leader Camp 4) ของดีแทค (DTAC) เพื่อป้องกันช่องโหว่ของโจรกรรมทางไซเบอร์ 
    เรื่องการบริจาคและการนำรูปภาพของผู้อื่นไปแอบอ้าง โดยเติมเต็ม จะเป็นตัวกลางการตรวจสอบและการเผยแพร่ เพื่อช่วยเหลือผู้ประสบความลำบากและไม่ผ่านมิจฉาชีพ 
  </p>
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