<script>
  import IconExternalLink from 'svelte-material-icons/LinkVariant.svelte';
  import IconEmail from 'svelte-material-icons/EmailOutline.svelte'
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
    ติดต่อเรา
  </title>
</svelte:head>
<main class="
  max-w-2xl
  container mx-auto
  p-5
  ">
  <h1 class="text-4xl text-center m-10">ติดต่อเรา</h1>
  <h2 class="text-xl font-semibold mt-5">
      สื่อออนไลน์
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
  <h2 class="text-xl font-semibold mt-5">
      เว็บไซต์
  </h2>
  <ul class="list-['-_'] list-inside marker:text-gray-800 ml-3">
    <li>ดูซอร์สโค้ดบน <a href="https://github.com/ptsgrn/yslc4/tree/main/site">GitHub <IconExternalLink size="1em"/></a></li>
    <li>กรุณาติดต่อผมที่ <a href="mailto:contact+s9t34onc@patsag.one">contact+s9t34onc@patsag.one <IconEmail size="1em"/></a></li>
  </ul>
</main>