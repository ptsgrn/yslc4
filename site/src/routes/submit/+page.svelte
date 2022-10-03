<script>
	import {
		Button,
		Checkbox,
		Fileupload,
		Heading,
		Input,
		Label,
		P,
		Radio,
		Textarea
	} from 'flowbite-svelte';
	import { writable } from 'svelte/store';
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
	];
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
	});
	const styleLabel = 'mb-0.5 font-bold';
	const styleFieldset = 'flex flex-col my-3';
	const styleInput = '';
</script>

<svelte:head>
	<title>ส่งเรื่องให้เรา</title>
</svelte:head>
<main
	class="
  max-w-2xl
  container mx-auto
  p-10
"
>
	<Heading class="text-center text-2xl font-bold">ยื่นขอรับบริจาค</Heading>
	<P class="py-5">
		กรุณากรอกข้อมูลด้านล่างเพื่อยื่นขอรับบริจาค ข้อมูลเหล่านี้จะถูกใช้เพื่อยืนยันตัวตนเท่านั้น
		ไม่มีการเผยแพร่เอกสารส่วนบุคคลต่อสาธารณะ
	</P>
	<form class="">
		<Heading tag="h2" class="text-xl font-semibold mt-5">ข้อมูลบุคคล</Heading>
		<div class="pb-4 pt-2">
			<fieldset class={styleFieldset}>
				<Label for="iName" class={styleLabel}>ชื่อ - สกุล</Label>
				<Input
					bind:value={$userSelect['iName']}
					name="iname"
					type="text"
					id="iName"
					class={styleInput}
					placeholder="ชื่อ นามสกุล"
					required
				/>
			</fieldset>
			<fieldset class={styleFieldset}>
				<Label for="iAddress" class={styleLabel}>ที่อยู่ที่ติดต่อได้</Label>
				<Input
					bind:value={$userSelect['iAddress']}
					name="iaddress"
					type="text"
					class={styleInput}
					id="iAddress"
					placeholder="999 ม.18 ตำบล ก"
					required
				/>
			</fieldset>
			<fieldset class={styleFieldset}>
				<Label for="iPhone" class={styleLabel}>เบอร์โทรศัพท์</Label>
				<Input
					bind:value={$userSelect['iPhone']}
					name="iphone"
					type="text"
					id="iPhone"
					class="{styleInput} invalid:border-4 invalid:border-red-500"
					placeholder="0123456789"
					pattern="0[0-9]{'{'}9{'}'}"
				/>
			</fieldset>
			<fieldset class={styleFieldset}>
				<Label for="iType" class={styleLabel}>ประเภทของการรับบริจาค</Label>
				{#each iTypeList as type}
					<div class="flex items-center ml-3">
						<Radio
							bind:group={$userSelect['iType']}
							class="m-1 text-blue-500"
							name="itype"
							type="radio"
							value={type.value}
							id={type.value}
						/>
						<Label for={type.value}>
							{type.label}
						</Label>
					</div>
				{/each}
				{#if $userSelect['iType'] === 'other'}
					<Input
						bind:value={$userSelect['iTypeOther']}
						class={styleInput}
						name="itypeother"
						type="text"
						id="iTypeOther"
						placeholder="ระบุประเภทของการรับบริจาค"
					/>
				{/if}
			</fieldset>
		</div>
		<Heading tag="h2" class="text-xl font-semibold mt-5">ปัญหา</Heading>
		<div class="">
			<fieldset class={styleFieldset}>
				<Label for="iProblem">ปัญหาที่ต้องการรับบริจาค</Label>
				<Input
					type="text"
					name="iproblem"
					id="iProblem"
					class={styleInput}
					bind:value={$userSelect['iProblem']}
					required
				/>
			</fieldset>
			<fieldset class={styleFieldset}>
				<Label for="iProblemDetail">รายละเอียดปัญหา</Label>
				<Textarea
					name="iproblemdetail"
					id="iProblemDetail"
					class="border-2 border-gray-400 rounded-md p-1"
					bind:value={$userSelect['iProblemDetail']}
					placeholder="ลองเล่าให้เราฟัง"
					required
				/>
			</fieldset>
		</div>
		<Heading tag="h2" class="text-xl font-semibold mt-5">การเงิน</Heading>
		<div class="">
			<fieldset class={styleFieldset}>
				<Label for="iBankNumber">เลขที่บัญชี</Label>
				<Input
					type="text"
					name="ibanknumber"
					id="iBankNumber"
					class={styleInput}
					bind:value={$userSelect['iBankNumber']}
					required
				/>
			</fieldset>
			<fieldset class={styleFieldset}>
				<Label for="iBankName">ชื่อธนาคาร</Label>
				<Input
					type="text"
					name="ibankname"
					id="iBankName"
					class={styleInput}
					bind:value={$userSelect['iBankName']}
					required
				/>
			</fieldset>
			<fieldset class={styleFieldset}>
				<Label for="iBankOwnerName">ชื่อบัญชี</Label>
				<Input
					type="text"
					name="ibankownername"
					id="iBankOwnerName"
					class={styleInput}
					bind:value={$userSelect['iBankOwnerName']}
					required
				/>
			</fieldset>
			<fieldset class={styleFieldset}>
				<Label for="iAmount">จำนวนเงินที่ต้องการ</Label>
				<Input
					type="number"
					name="iamount"
					id="iAmount"
					class={styleInput}
					bind:value={$userSelect['iAmount']}
				/>
			</fieldset>
			<fieldset class={styleFieldset}>
				<Label for="iNote">รายละเอียดของที่ต้องการอื่น ๆ</Label>
				<Input
					type="text"
					name="inote"
					id="iNote"
					class={styleInput}
					bind:value={$userSelect['iNote']}
				/>
			</fieldset>
		</div>
		<Heading tag="h2" class="text-xl font-semibold mt-5">การยืนยันตัวตน</Heading>
		<div class="">
			<fieldset class={styleFieldset}>
				<Label for="iThaiIDCard">สำเนาหน้าบัตรประชาชน</Label>
				<Fileupload type="file" name="iidcard" class={styleInput} id="iThaiIDCard" required />
			</fieldset>
			<fieldset class={styleFieldset}>
				<Label for="iBankBook">สำเนาหน้าสมุดบัญชีธนาคาร</Label>
				<Fileupload type="file" name="ibankbook" class={styleInput} id="iBankBook" required />
			</fieldset>
			<fieldset class={styleFieldset}>
				<Label for="iOther">หมายเหตุอื่น ๆ เพิ่มเติม</Label>
				<Input type="text" name="iother" class={styleInput} id="iOther" />
			</fieldset>
			<fieldset class="flex my-3 flex-row">
				<Checkbox name="iagree" id="iAgree" class={styleInput} required />
				<Label for="iAgree"
					>ฉันยอมรับข้อตกลงและเงื่อนไขรวมทั้งยินยอมให้เว็บไซต์เก็บข้อมูลของฉันเพื่อการพิสูจน์ตัวตน
					และจำถูกทำลายทิ้งเมื่อถึงเวลาตามที่กฎหมายกำหนด</Label
				>
			</fieldset>
			<Button type="submit">
				ส่ง
			</Button>
		</div>
	</form>
</main>
