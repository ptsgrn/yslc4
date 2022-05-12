<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ params }) {
    return {
      props: {
        linkId: params.id
      }
    }
  }
</script>
<script>
  // @ts-nocheck
  import { donorsList } from '@lib/store/mockupdata'
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  export let linkId = '';
  $: data = $donorsList.find(donor => `${donor.id}` === linkId) || [];
  onMount(() => {
    if (!data) {
      goto('/donors');
    }
  });

</script>

<main class="p-10 container mx-auto">
  <div class="">
    <img src={data?.image} alt={data?.name} class="rounded-2xl mx-auto" />
  </div>
  <h1 class="text-xl font-bold text-center my-7 mb-10">
    {data?.name}
  </h1>

  <div class="container">
    <h2 class="text-xl mt-4 mb-2">
      ข้อมูลทั่วไป
    </h2>
    <strong>
        {data?.problems.persona}
    </strong>
    <p>
      {data?.problems}
    </p>

    <h2 class="text-xl mt-4 mb-2">
      ช่องทางการบริจาค
    </h2>
    <ul>
      {#each data?.bankAccounts as account}
        <li><b>ชื่อบัญชี:</b> {account.name || '-ไม่ได้ระบุ-'}</li>
        <li><b>เลขที่บัญชี:</b> {account.number || '-ไม่ได้ระบุ-'}</li>
        <li><b>ธนาคาร:</b> {account.bank || '-ไม่ได้ระบุ-'}</li>
      {/each}
    </ul>

    <h2 class="text-xl mt-4 mb-2">
      ติดต่อ
    </h2>
    <ul>
      <li><b>หมายเลขโทรศัพท์:</b> {data?.contact || '-ไม่ได้ระบุ-'}</li>
      <li><b>สถานที่:</b> {data?.address || '-ไม่ได้ระบุ-'}</li>
    </ul>

    {#if data?.others}
      <h2 class="text-xl mt-4 mb-2">
        อื่น ๆ
      </h2>
      <p>
        {data?.others}
      </p>
    {/if}
  </div>
</main>