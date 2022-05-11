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
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import PHD from '@assets/phd_400x300.png'
  import IconAlert from 'svelte-material-icons/AlertBoxOutline.svelte'
  import { donorsList } from '@lib/store/mockupdata'
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  export let linkId = '';
  let data = $donorsList.find(donor => donor.link === linkId);
  onMount(() => {
    if (!data) {
      goto('/donors');
    }
  });

</script>

<main class="p-10 container mx-auto">
  <div class="container">
    <Swiper
    spaceBetween={50}
    slidesPerView={data.slide.length === 1 ? 1 : 2}
    navigation={true}
    modules={[Navigation, Pagination, Scrollbar, A11y]}
  >
    {#each data.slide as slide}
      {#if slide.length === 1}
        <img src={slide} alt="PHD" class="w-full max-w-sm mx-auto rounded-full" />
      {:else}
        <SwiperSlide>
          <img src={slide} alt="PHD" class="w-full max-w-sm mx-auto" />
        </SwiperSlide>
      {/if}
    {:else}
      <div class="w-48 bg-gray-300 text-center flex flex-col items-center justify-center aspect-[4/3] rounded-2xl mx-auto">
        <IconAlert size="30" />
        <span>
          ไม่มีภาพ
        </span>
      </div>
    {/each}
  </Swiper>
  </div>
<h1 class="text-xl font-bold text-center my-7">
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
</div>

</main>