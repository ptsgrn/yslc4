<script>
  import HeroIMG from '@assets/ev-IWJH-l-vb4k-unsplash.jpg'
  import IconWheelchair from 'svelte-material-icons/WheelchairAccessibility.svelte'
  import IconKid from 'svelte-material-icons/BabyFaceOutline.svelte'
  import IconHumanCane from 'svelte-material-icons/HumanCane.svelte'
  import IconPaw from 'svelte-material-icons/PawOutline.svelte'
  import IconHomeFlood from 'svelte-material-icons/HomeFlood.svelte'
  import IconHandHeart from 'svelte-material-icons/HandHeartOutline.svelte'
  import PHD_3x4 from '@assets/phd_400x300.png'
  import { donorsList } from '@lib/store/mockupdata'
  const category = [
    {
      icon: IconWheelchair,
      title: 'ผู้ป่วยและผู้พิการ'
    },
    {
      icon: IconKid,
      title: 'เด็กและเยาวชน'
    },
    {
      icon: IconHumanCane,
      title: 'ผู้สูงอายุ'
    },
    {
      icon: IconPaw,
      title: 'สัตว์'
    },
    {
      icon: IconHomeFlood,
      title: 'อุบัติภัย'
    },
    {
      icon: IconHandHeart,
      title: 'อื่น ๆ'
    }
  ]
</script>
<svelte:head>
  <title>รายการผู้ขอรับบริจาค</title>
</svelte:head>
<main>
  <div class="relative w-full h-52 overflow-hidden">
    <img src={HeroIMG} alt="Homeless sideroad" class="w-full -translate-y-16" />
    <div class="absolute top-[50%] -translate-y-[50%] inset-x-0 text-xs text-center backdrop-blur-sm w-[50%] p-2 mx-auto rounded-md drop-shadow-xl max-w-md">
      <h1 class="text-3xl font-bold text-white drop-shadow-md">
        เติมเต็ม
      </h1>
      <span class="text-white drop-shadow-md text-lg">
        รู้ว่าใครจะเป็นยังมีคนข้างหน้าอยู่ในอกที่อยากเจอ
      </span>
    </div>
  </div>
  <div class="">
    <h2 class="text-2xl font-bold text-center py-5 mt-5">
      ผู้ขอรับบริจาค
    </h2>
    <div class="flex flex-row items-center justify-center flex-wrap m-3">
      {#each category as { icon, title }}
        <div class="
          flex flex-col
          w-32 
          items-center justify-start 
          rounded-md 
          p-2 mx-2 my-4
          md:first:ml-0 md:last:mr-0
          hover:bg-blue-100 active:bg-blue-200
          ">
          <svelte:component this="{icon}" size="30px" />
          <span class="text-sm font-bold text-center">
            {title}
          </span>
        </div>
      {/each}
    </div>
  </div>
  <!-- 3x3 grid -->
  <div class="
    grid grid-col-2 grid-flow-row gap-3
    md:grid-cols-3
  ">
    {#each $donorsList as data}
      <a href={`/donor/${data.link}`} class="
        p-3 m-2 rounded-2xl
        hover:shadow-md hover:bg-blue-50 hover:-translate-y-1
        transition-all duration-200
        visited:order-last peer-visited:order-last
      ">
        {#if data.image}
          <img src={data.image} alt="{data.name}" class="w-full aspect-[4/3] rounded-2xl mb-4" />
        {:else}
          <img src={PHD_3x4} alt="{data.name}" class="w-full aspect-[4/3] rounded-2xl mb-4" />
        {/if}
        <b class="text-lg">
          {data.name}
        </b>
        <div class="line-clamp-2">
          {data.problems.persona}&nbsp;&middot;&nbsp;{data.problems.details} 
        </div>
      </a>
    {/each}
  </div>
</main>