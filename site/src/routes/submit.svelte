<script>
  import { writable } from "svelte/store";
  const iTypeList = [
    {
      value: 'patients-and-disabilities',
      label: 'ผู้ป่วยและผู้พิการ'
    },
    {
      value: 'children',
      label: 'เด็กและเยาวชน'
    },
    {
      value: 'old-people',
      label: 'ผู้สูงอายุ'
    },
    {
      value: 'animals',
      label: 'สัตว์'
    },
    {
      value: 'accident',
      label: 'อุบัติภัย'
    },
    {
      value: 'other',
      label: 'อื่น ๆ'
    }
  ]
  let userSelect = writable({
    iName: '',
    iAddress: '',
    iPhone: '',
    iType: '',
    iTypeOther: ''
  })
</script>
<main class="
  container mx-auto
  p-10
">
  <h1 class="text-center text-2xl font-bold">
    ยื่นขอรับบริจาค
  </h1>
  <form class="">
    <h2 class="text-lg">
      ข้อมูลบุคคล
    </h2>
    <div class="pb-4 pt-2">
      <fieldset class="">
        <label for="iName">ชื่อ - สกุล</label>
        <input bind:value={$userSelect['iName']} name="iname" type="text" id="iName" required>
      </fieldset>
      <fieldset class="">
        <label for="iAddress">ที่อยู่ที่ติดต่อได้</label>
        <input bind:value={$userSelect['iAddress']} name="iaddress" type="text" id="iAddress" required>
      </fieldset>
      <fieldset class="">
        <label for="iPhone">เบอร์โทรศัพท์</label>
        <input bind:value={$userSelect['iPhone']} name="iphone" type="text" id="iPhone" class="invalid:border-2 invalid:border-red-500" pattern="0[0-9]{'{'}9{'}'}">
      </fieldset>
      <fieldset class="">
        <label for="iType">ประเภทของการรับบริจาค</label>
        {#each iTypeList as type}
        <input bind:group={$userSelect['iType']} name="itype" type="radio" value={type.value} id={type.value}>
        <label for={type.value}>
          {type.label}
        </label>
        {/each}
        {#if $userSelect['iType'] === 'other'}
        <input bind:value={$userSelect['iTypeOther']} name="itypeother" type="text" id="iTypeOther" placeholder="ระบุประเภทของการรับบริจาค">
        {/if}
      </fieldset>
    </div>
    <h2 class="text-lg">
      ปัญหา
    </h2>
    <div class="">
      <fieldset class="">
        <label for="iProblem">ปัญหาที่ต้องการรับบริจาค</label>
        <input type="text" name="iproblem" id="iProblem" bind:value={$userSelect['iProblem']} required>
      </fieldset>
      <fieldset class="">
        <label for="iProblemDetail">รายละเอียดปัญหา</label>
        <textarea name="iproblemdetail" id="iProblemDetail" bind:value={$userSelect['iProblemDetail']} required></textarea>
      </fieldset>
    </div>
    <h2 class="text-lg">
      การเงิน
    </h2>
    <div class="">
      <fieldset class="">
        <label for="iBankNumber">เลขที่บัญชี</label>
        <input type="text" name="ibanknumber" id="iBankNumber" bind:value={$userSelect['iBankNumber']} required>
      </fieldset>
      <fieldset class="">
        <label for="iBankName">ชื่อธนาคาร</label>
        <input type="text" name="ibankname" id="iBankName" bind:value={$userSelect['iBankName']} required>
      </fieldset>
      <fieldset class="">
        <label for="iBankOwnerName">ชื่อบัญชี</label>
        <input type="text" name="ibankownername" id="iBankOwnerName" bind:value={$userSelect['iBankOwnerName']} required>
      </fieldset>
      <fieldset class="">
        <label for="iBank"
  </form>
</main>