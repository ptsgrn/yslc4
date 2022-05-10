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
  import PHD from '@assets/phd_400x300.png'
  import { donorsList } from '@lib/store/mockupdata'
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  export let linkId = '';
  let data = $donorsList.find(donor => donor.link === linkId);
  onMount(() => {
    if (!data) {
      goto('/donors');
    }
  });
</script>

<main class="p-10">
  <div class="rounded-md">
    <Splide aria-label="ภาพที่เกี่ยวข้อง">
      {#if typeof data?.image === 'string'}
      <SplideSlide>
        <img src={data.image} alt="{data.name}" class="rounded-xl" />
      </SplideSlide>
      {:else if typeof data?.image === 'object'}
        {#each data.image as image}
        <SplideSlide>
          <img src={image} alt="{data.name}" class="rounded-xl" />
        </SplideSlide>
      {:else}
        <SplideSlide>
          <img src={PHD} alt="{data.name}" class="rounded-xl" />
        </SplideSlide>
      {/each}
    {/if}
  </Splide>
</div>
<h1 class="text-xl font-bold text-center my-7">
  {data?.name}
</h1>

<h2 class="text-xl mt-4 mb-2">
  ข้อมูลทั่วไป
</h2>
<strong>
  {data?.problems.persona}
</strong>
<p>
  {data?.problems.details}
</p>

<h2 class="text-xl mt-4 mb-2">
  ช่องทางการบริจาค
</h2>
<ul>
  <li><b>ชื่อบัญชี:</b> {data?.bank_account?.name || '-ไม่ได้ระบุ-'}</li>
  <li><b>เลขที่บัญชี:</b> {data?.bank_account?.number || '-ไม่ได้ระบุ-'}</li>
  <li><b>ธนาคาร:</b> {data?.bank_account?.bank || '-ไม่ได้ระบุ-'}</li>
  {#if data?.goal}
    <li><b>ยอดเงินที่ต้องการ:</b> {data?.goal}</li>
  {/if}
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

</main>