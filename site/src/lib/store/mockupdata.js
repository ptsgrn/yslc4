import { readable } from 'svelte/store';
import yslcDtac from '@assets/yscl-dtac-1024x574.png'
import Img1 from '@assets/image1.jpg'
import Img2 from '@assets/image2.jpg'
import Img3 from '@assets/image3.jpg'
import Img4 from '@assets/image4.jpg'
import Img5 from '@assets/image5.jpg'

const PLACEHOLDER_IMG = yslcDtac

const _donorsList = [
  // {
  //   "link": "0000",
  //   "category": 'animals',
  //   // "image": PLACEHOLDER_IMG,
  //   "slide": [],
  //   "name": "สมทบทุนค่ารถขนช้างเพื่อเดินทางไปรักษา",
  //   "problems": {
  //     "persona": "ช้างชรา",
  //     "details": "อาการกำเริบ กินน้อย นอนเจ็บนอนป่วย ต้องเดินทางจากชลบุรีไปรักษาที่โรงพยาบาลช้างสุรินทร์"
  //   },
  //   "address": "ชลบุรี",
  //   "bank_account": {
  //     "name": "สุชาติ บริสุทธิ์",
  //     "number": "020328740251",
  //     "bank": "ออมสิน"
  //   },
  //   "requirement": "ตามศรัทธา",
  //   "contact": "0945055080",
  //   "date": {
  //     "day": "06",
  //     "month": "May",
  //     "year": "2022"
  //   },
  //   "others": ""
  // },
  {
    "link": "0001",
    "category": 'animals',
    "image": Img1,
    "slide": [
      Img1,
    ],
    "name": "สมทบทุนค่ารถขนช้างเพื่อเดินทางไปรักษา",
    "problems": {
      "persona": "ช้างชรา",
      "details": "อาการกำเริบ กินน้อย นอนเจ็บนอนป่วย ต้องเดินทางจากชลบุรีไปรักษาที่โรงพยาบาลช้างสุรินทร์"
    },
    "address": "ชลบุรี",
    "bank_account": {
      "name": "สุชาติ บริสุทธิ์",
      "number": "020328740251",
      "bank": "ออมสิน"
    },
    "requirement": "ตามศรัทธา",
    "contact": "0945055080",
    "date": {
      "day": "06",
      "month": "May",
      "year": "2022"
    },
    "others": ""
  },
  {
    "link": "0002",
    "category": 'animals',
    "image": Img2,
    "slide": [
      Img2,
    ],
    "name": "เจ้าอาวาสวัดขอบิณฑบาตอาหารเม็ดช่วยสุนัขจรจัดกว่า 200 ตัว",
    "problems": { "persona": "สุนัขจรจัด", "details": "หมาแก่ หมาป่วย หมาพิการ และหมากำลังจะโต ขาดแคลนอาหารในการเลี้ยงดูไม่เพียงพอ จากสถานการณ์โควิคยาวต่อเนื่อง ทำให้มีคนมาทำบุญน้อยลง จนส่งผลกระทบกับสุนัขจรจัด ที่ชาวบ้านแอบนำมาปล่อย" },
    "address": "เชียงใหม่",
    "bank_account": { "name": "พระครูอภิสิทธิ์ ชัยวิชิต", "number": "7142259517", "bank": "ไทยพาณิชย์" },
    "requirement": "ตามศรัทธา",
    "contact": "",
    "date": { "day": "06", "month": "May", "year": "2022" },
    "others": ""
  },
  {
    "link": "0003",
    "category": 'children',
    "image": Img3,
    "slide": [
      Img3,
    ],
    "name": "ร่วมกันทำทุนขายขนมเต้ยออทิสติกสู้ชีวิต",
    "problems": { "persona": "ผู้ป่วยออทิสติก", "details": "อยากได้ต้นทุนในการทำขนมขาย" },
    "address": "",
    "bank_account": { "name": "นายจิรภาส ราชบุตร", "number": "7142259517", "bank": "ไทยพาณิชย์" },
    "requirement": "ตามศรัทธา",
    "contact": "",
    "date": { "day": "29", "month": "Apr", "year": "2022" },
    "others": ""
  },
  {
    "link": "0004",
    "category": 'animals',
    "image": Img4,
    "slide": [
      Img4,
    ],
    "name": "ขอให้สุนัขได้มีหลังคาหลบแดดหลบฝน",
    "problems": { "persona": "สุนัข", "details": "เปิดระดมทุน 77,000 บาทเพื่อสร้างหลังคาที่หลบฝนเพิ่ม ขนาด 10เมตร*10เมตร" },
    "address": "ลพบุรี",
    "bank_account": { "name": "ประทุมศรี ธรรมรัตน์", "number": "2414227799", "bank": "กรุงเทพ" },
    "requirement": "50000",
    "contact": "0634985593",
    "date": { "day": "07", "month": "May", "year": "2022" },
    "others": "",
    "goal": "77,000 บาท"
  },
  {
    "link": "0005",
    "category": 'animals',
    "image": Img5,
    "slide": [
      Img5,
    ],
    "name": "ช่วยช้างตกงาน",
    "problems": { "persona": "ช้าง", "details": "เปิดจองผลไม้ป้อนช้างออนไลน์ ช่วยช้างตกงานที่ไม่มีรายได้ ไม่มีเงินเดือน เพื่อจะได้นำเงินไปซื้อไร่อ้อยและต้นสับปะรดให้กับน้องช้าง" },
    "address": "",
    "bank_account": { "name": "มนต์ ยูงรัมย์", "number": "1280511915", "bank": "กรุงไทย" },
    "requirement": "ตามศรัทธา",
    "contact": "0625376824",
    "date": { "day": "07", "month": "May", "year": "2022" },
    "others": ""
  }
]
export const donorsList = readable(_donorsList)