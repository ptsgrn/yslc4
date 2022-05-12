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
    iTypeOther: '',
    iProblem: '',
    iProblemDetail: '',
    iBankNumber: '',
    iBankName: '',
    iBankOwnerName: '',
    iAmount: '',
    iNote: ''
  })
  const styleLabel = "mb-0.5 font-bold"
  const styleFieldset = "flex flex-col my-3"
  const styleInput = "border-2 rounded-md border-gray-400 p-1"
</script>
<svelte:head>
  <title>
    ส่งเรื่องให้เรา
  </title>
</svelte:head>
<main class="
  max-w-2xl
  container mx-auto
  p-10
">
  <h1 class="text-center text-2xl font-bold">
    ยื่นขอรับบริจาค
  </h1>
  <p class="py-5">
    กรุณากรอกข้อมูลด้านล่างเพื่อยื่นขอรับบริจาค ข้อมูลเหล่านี้จะถูกใช้เพื่อยืนยันตัวตนเท่านั้น ไม่มีการเผยแพร่เอกสารส่วนบุคคลต่อสาธารณะ
  </p>
  <form class="">
    <h2 class="text-xl font-semibold mt-5">
      ข้อมูลบุคคล
    </h2>
    <div class="pb-4 pt-2">
      <fieldset class={styleFieldset}>
        <label for="iName" class={styleLabel}>
          ชื่อ - สกุล
        </label>
        <input bind:value={$userSelect['iName']} name="iname" type="text" id="iName" class="{styleInput}" placeholder="ชื่อ นามสกุล" required>
      </fieldset>
      <fieldset class={styleFieldset}>
        <label for="iAddress" class={styleLabel}>ที่อยู่ที่ติดต่อได้</label>
        <input bind:value={$userSelect['iAddress']} name="iaddress" type="text" class="{styleInput}" id="iAddress" placeholder="999 ม.18 ตำบล ก" required>
      </fieldset>
      <fieldset class={styleFieldset}>
        <label for="iPhone" class={styleLabel}>เบอร์โทรศัพท์</label>
        <input bind:value={$userSelect['iPhone']} name="iphone" type="text" id="iPhone" class="{styleInput} invalid:border-4 invalid:border-red-500" placeholder="0123456789" pattern="0[0-9]{'{'}9{'}'}">
      </fieldset>
      <fieldset class={styleFieldset}>
        <label for="iType" class={styleLabel}>ประเภทของการรับบริจาค</label>
        {#each iTypeList as type}
          <div class="flex items-center ml-3">
            <input bind:group={$userSelect['iType']} class="inline m-2 w-4 h-4 text-blue-500" name="itype" type="radio" value={type.value} id={type.value}>
            <label for={type.value}>
              {type.label}
            </label>
          </div>
        {/each}
        {#if $userSelect['iType'] === 'other'}
          <input bind:value={$userSelect['iTypeOther']} class="{styleInput}" name="itypeother" type="text" id="iTypeOther" placeholder="ระบุประเภทของการรับบริจาค">
        {/if}
      </fieldset>
    </div>
    <h2 class="text-xl font-semibold mt-5">
      ปัญหา
    </h2>
    <div class="">
      <fieldset class={styleFieldset}>
        <label for="iProblem">ปัญหาที่ต้องการรับบริจาค</label>
        <input type="text" name="iproblem" id="iProblem" class="{styleInput}" bind:value={$userSelect['iProblem']} required>
      </fieldset>
      <fieldset class={styleFieldset}>
        <label for="iProblemDetail">รายละเอียดปัญหา</label>
        <textarea name="iproblemdetail" id="iProblemDetail" class="border-2 border-gray-400 rounded-md p-1" bind:value={$userSelect['iProblemDetail']} placeholder="ลองเล่าให้เราฟัง" required></textarea>
      </fieldset>
    </div>
    <h2 class="text-xl font-semibold mt-5">
      การเงิน
    </h2>
    <div class="">
      <fieldset class={styleFieldset}>
        <label for="iBankNumber">เลขที่บัญชี</label>
        <input type="text" name="ibanknumber" id="iBankNumber" class="{styleInput}" bind:value={$userSelect['iBankNumber']} required>
      </fieldset>
      <fieldset class={styleFieldset}>
        <label for="iBankName">ชื่อธนาคาร</label>
        <input type="text" name="ibankname" id="iBankName" class="{styleInput}" bind:value={$userSelect['iBankName']} required>
      </fieldset>
      <fieldset class={styleFieldset}>
        <label for="iBankOwnerName">ชื่อบัญชี</label>
        <input type="text" name="ibankownername" id="iBankOwnerName" class="{styleInput}" bind:value={$userSelect['iBankOwnerName']} required>
      </fieldset>
      <fieldset class={styleFieldset}>
      <label for="iAmount">จำนวนเงินที่ต้องการ</label>
        <input type="number" name="iamount" id="iAmount" class="{styleInput}" bind:value={$userSelect['iAmount']}>
      </fieldset>
      <fieldset class={styleFieldset}>
      <label for="iNote">รายละเอียดของที่ต้องการอื่น ๆ</label>
        <input type="number" name="inote" id="iNote" class="{styleInput}" bind:value={$userSelect['iNote']}>
      </fieldset>
    </div>
    <h2 class="text-xl font-semibold mt-5">
      การยืนยันตัวตน
    </h2>
    <div class="">
      <fieldset class={styleFieldset}>
        <label for="iThaiIDCard">สำเนาหน้าบัตรประชาชน</label>
        <input type="file" name="iidcard" class="{styleInput}" id="iThaiIDCard" required>
      </fieldset>
      <fieldset class={styleFieldset}>
        <label for="iBankBook">สำเนาหน้าสมุดบัญชีธนาคาร</label>
        <input type="file" name="ibankbook" class="{styleInput}" id="iBankBook" required>
      </fieldset>
      <fieldset class={styleFieldset}>
        <label for="iOther">หมายเหตุอื่น ๆ เพิ่มเติม</label>
        <input type="text" name="iother" class="{styleInput}" id="iOther">
      </fieldset>
      <fieldset class="flex my-3 flex-row">
        <input type=checkbox name="iagree" id="iAgree" class="{styleInput} m-4 w-10 h-10 text-sm" required>
        <label for="iAgree">ฉันยอมรับข้อตกลงและเงื่อนไขรวมทั้งยินยอมให้เว็บไซต์เก็บข้อมูลของฉันเพื่อการพิสูจน์ตัวตน และจำถูกทำลายทิ้งเมื่อถึงเวลาตามที่กฎหมายกำหนด</label>
      </fieldset>
    <button class="bg-red-500 hover:bg-red-700 text-white drop-shadow-lg font-bold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-150">
      ส่ง
    </button>
  </form>
</main>