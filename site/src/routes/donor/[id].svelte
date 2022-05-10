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

<strong>
  {data?.problems.persona}
</strong>
<p>
  {data?.problems.details}
</p>


</main>