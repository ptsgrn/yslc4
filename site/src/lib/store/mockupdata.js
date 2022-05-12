import {
  readable
} from 'svelte/store';

/**
 * @typedef {Object} MockupDonorsProblem
 * @property {string | string[]} persona The persona(s) that the problem is for.
 * @property {string} details The problem details.
 */
/**
 * @typedef {Object} MockupDonorBankAccount
 * @property {string} name The name of the bank account.
 * @property {string} number The number of the bank account.
 * @property {string} bank The bank of the bank account.
 */
/**
 * @typedef {Object} MockupDonorDate
 * @property {string} day The day of the date.
 * @property {string} month The month of the date.
 * @property {string} year The year of the date.
 */
/**
 * @typedef {Object} MockupDataDonorsList
 * @property {'patients-and-disabilities'|'children'|'old-people'|'animals'|'accident'|'other'} category The category of the donors list.
 * @property {number} id ID of the donor to use as key and url
 * @property {string} image URL of the donor's image
 * @property {string} name Name of the donor
 * @property {MockupDonorsProblem} problems The problems the donor has
 * @property {string} address The donor's address
 * @property {MockupDonorBankAccount[]} bankAccounts The donor's bank accounts
 * @property {string} requirement The requirement the donor has
 * @property {string[] | string} contact The donor's contact
 * @property {MockupDonorDate} date The donor's submitted date
 * @property {string} others The donor's other information
 */

/**
 * @type {MockupDataDonorsList[]}
 */
const _donorsList = [{
  id: 1,
  category: "animals",
  image: "/donors/image1.jpg",
  name: "สมทบทุนค่ารถขนช้างเพื่อเดินทางไปรักษา",
  problems: {
    persona: "ช้างชรา",
    details: "อาการกำเริบ กินน้อย นอนเจ็บนอนป่วย ต้องเดินทางจากชลบุรีไปรักษาที่โรงพยาบาลช้างสุรินทร์"
    },
  address: "ชลบุรี",
  bankAccounts: [{
    name: "สุชาติ บริสุทธิ์",
    number: "020328740251",
    bank: "ออมสิน"
  }],
  requirement: "ตามศรัทธา",
  contact: "0945055080",
  date: {
    day: "06",
    month: "May",
    year: "2022"
    },
  others: ""
  },
  {
    id: 2,
    category: 'animals',
    image: "/donors/image2.jpg",
    name: "เจ้าอาวาสวัดขอบิณฑบาตอาหารเม็ดช่วยสุนัขจรจัดกว่า 200 ตัว",
    problems: {
      persona: "สุนัขจรจัด",
      details: "หมาแก่ หมาป่วย หมาพิการ และหมากำลังจะโต ขาดแคลนอาหารในการเลี้ยงดูไม่เพียงพอ จากสถานการณ์โควิคยาวต่อเนื่อง ทำให้มีคนมาทำบุญน้อยลง จนส่งผลกระทบกับสุนัขจรจัด ที่ชาวบ้านแอบนำมาปล่อย"
    },
    address: "เชียงใหม่",
    bankAccounts: [{
      name: "พระครูอภิสิทธิ์ ชัยวิชิต",
      number: "7142259517",
      bank: "ไทยพาณิชย์"
    }],
    requirement: "ตามศรัทธา",
    contact: "",
    date: {
      day: "06",
      month: "May",
      year: "2022"
    },
    others: ""
  },
  {
    id: 3,
    category: 'patients-and-disabilities',
    image: "/donors/image3.jpg",
    name: "ร่วมกันทำทุนขายขนมเต้ยออทิสติกสู้ชีวิต",
    problems: {
      persona: "ผู้ป่วยออทิสติก",
      details: "อยากได้ต้นทุนในการทำขนมขาย"
    },
    address: "",
    bankAccounts: [{
      name: "นายจิรภาส ราชบุตร",
      number: "7142259517",
      bank: "ไทยพาณิชย์"
    }],
    requirement: "ตามศรัทธา",
    contact: "",
    date: {
      day: "29",
      month: "Apr",
      year: "2022"
    },
    others: ""
  },
  {
    id: 4,
    category: 'animals',
    image: "/donors/image4.jpg",
    name: "ขอให้สุนัขได้มีหลังคาหลบแดดหลบฝน",
    problems: {
      persona: "สุนัข",
      details: "เปิดระดมทุน 77,000 บาทเพื่อสร้างหลังคาที่หลบฝนเพิ่ม ขนาด 10เมตร*10เมตร"
    },
    address: "ลพบุรี",
    bankAccounts: [{
      name: "ประทุมศรี ธรรมรัตน์",
      number: "2414227799",
      bank: "กรุงเทพ"
    }],
    requirement: "50000",
    contact: "0634985593",
    date: {
      day: "07",
      month: "May",
      year: "2022"
    },
    others: ""
  },
  {
    id: 5,
    category: 'animals',
    image: "/donors/image5.jpg",
    name: "ช่วยช้างตกงาน",
    problems: {
      persona: "ช้าง",
      details: "เปิดจองผลไม้ป้อนช้างออนไลน์ ช่วยช้างตกงานที่ไม่มีรายได้ ไม่มีเงินเดือน เพื่อจะได้นำเงินไปซื้อไร่อ้อยและต้นสับปะรดให้กับน้องช้าง"
    },
    address: "",
    bankAccounts: [{
      name: "มนต์ ยูงรัมย์",
      number: "1280511915",
      bank: "กรุงไทย"
    }],
    requirement: "ตามศรัทธา",
    contact: "0625376824",
    date: {
      day: "07",
      month: "May",
      year: "2022"
    },
    others: ""
  },
  {
    id: 6,
    category: 'children',
    image: "/donors/image6.jpg",
    name: "ช่วยเหลือให้เด็กกำพร้า เด็กด้อยโอกาส",
    problems: {
      persona: "เด็กกำพร้า เด็กด้อยโอกาส",
      details: "กว่า 500 ชีวิต ไร้หนทาง พึ่งพาวัดเพื่อเรียนต่อ ค่าอาหาร 1 วัน 3 มื้อ ต่อ 1 คน ค่าใช้จ่ายมหาศาล"
    },
    address: "เชียงใหม่",
    bankAccounts: [{
      name: "วัดดอนจั่น โครงการเด็กด้อยโอกาส",
      number: "4060141565",
      bank: "ไทยพาณิชย์"
    }],
    requirement: "ตามศรัทธา",
    contact: "053240184",
    date: {
      day: "05",
      month: "May",
      year: "2022"
    },
    others: "สามารถบริจาค ข้าวสารอาหารแห้ง มาม่า ปลากระป๋อง ของใช้จำเป็นเพิ่มเติมได้ที่ วัดดอนจั่น"
  },
  {
    id: 7,
    category: 'other',
    image: "/donors/image7.jpg",
    name: "ขอเชิญร่วมทำบุญ สร้างศาลาฯหน้าเมรุ วัดโพธิ์ศรีบ่อใหญ่",
    problems: {
      persona: "วัด",
      details: "ทางวัดร่วมกับชาวบ้านได้ขอเปิดรับบริจาค สร้างศาลาฯหน้าเมรุ แทนหลังเก่าที่ชำรุด ที่ใช้มาตั้งแต่ปี 2549  เพื่อใช้ทำพิธี หรือกิจกรรมต่างๆ ซึ่งยังขาดงบประมาณอีกจำนวนมาก"
    },
    address: "มหาสารคาม",
    bankAccounts: [{
      name: "วัดโพธิ์ศรีบ่อใหญ่",
      number: "4170641981",
      bank: "กรุงไทย"
    }],
    requirement: "ตามศรัทธา",
    contact: [
      "0859253305",
      "0894188480"
    ],
    date: {
      day: "07",
      month: "May",
      year: "2022"
    },
    others: ""
  },
  {
    id: 8,
    category: 'patients-and-disabilities',
    image: "/donors/image8.jpg",
    name: "ลุงสมัย ลาภยิ่ง ป่วยติดเตียงนานถึง 13 ปี",
    problems: {
      persona: "ผู้ป่วยติดเตียง",
      details: "อดีตผู้ช่วยงานสาธารณสุข ผู้ป่วยติดเตียงมานานถึง 13 ปี ไม่สามารถป่วยเหลือตนเองได้ มีแผลกดทับ เนื่องจากไปเป็นยามถางต้นไม้แล้ววูป หมอบอกสมองเส้นเลือดในสมองแตก ทำให้แขนขาซีกซ้ายอ่อน ตอนนี้นอนติดเตียงไม่สามารถช่วยเหลือตนเองได้ มีลูก2 คน ลูกสาวป่วยโรคซึมเศร้าต้องกินยาตลอดต่อเนื่อง ลูกชายเป็นเสาหลักครอบครัวรับจ้างรายวัน บางวันไม่มีงานก็ไม่มีได้รายได้ ฐานะยากจน"
    },
    address: "อุบลราชธานี",
    bankAccounts: [{
      name: "นายพงศ์ธัช ลาภยิ่ง",
      number: "5304036664​",
      bank: "ไทยพาณิชย์​"
    }],
    requirement: "ตามศรัทธา",
    contact: "0658428769",
    date: {
      day: "07",
      month: "May",
      year: "2022"
    },
    others: "สามารถบริจาคสิ่งที่จำเป็นเพิ่มเติม เช่น ข้าวเบอรี่สำหรับคนป่วย , นม, แพมเพิสผู้ใหญ่ ไซซ์ L, ผ้ารองแพมเพิส มาให้ที่บ้านได้ (ที่อยู่ บ้านเลขที่ 28 ซ.พนม 5 ถ.พนม ต.ในเมือง อ.เมือง จ.อุบลราชธานี 34000)"
  },
  {
    id: 9,
    category: 'accident',
    image: "/donors/image9.jpg",
    name: "ช่วยเหลือคนที่เราขับรถชน",
    problems: {
      persona: "ผู้ป่วย",
      details: "ที่เราขับชน ซื้อของเข้าไปให้ เดินเข้าไปลึกริมคลอง น้องปวดหัว น้องเก็บของเก่าขาย ต้องเย็บที่แขน 41 เข็ม กระจกหน้ารถบาด สงสารมากคงปวดมาก เข่าขวายังเดินไม่ค่อยได้ และเวียนหัว ปวดหัว เราโคตรเสียใจที่ทำน้องเค้าเจ็บ และออกไปทำมาหากินไม่ได้  ในบ้าน หมอน ผ้าห่ม คนแถวนั้นเค้าบริจาคให้"
    },
    address: "",
    bankAccounts: [{
      name: "กองเก้า",
      number: "2172007134",
      bank: "ไทยพาณิชย์"
    }],
    requirement: "ตามศรัทธา",
    contact: "https://www.facebook.com/gloreya.reya.7",
    date: {
      day: "07",
      month: "May",
      year: "2022"
    },
    others: ""
  },
  {
    id: 10,
    category: 'other',
    image: "/donors/image10.jpg",
    name: "ขอรับบริจาคสิ่งของ,เงิน ให้ผู้อพยพเข้าแม่สอด",
    problems: {
      persona: "ผู้อพยพ",
      details: "สิ่งของไม่พอ แต่ผู้อพยพยังเข้ามาเรื่อยๆ"
    },
    address: "ตาก",
    bankAccounts: [{
      name: "มูลนิธิช่วยไร้พรมแดน",
      number: "2122671332",
      bank: "กสิกรไทย"
    },
    {
      name: "กาชาด อ.แม่สอด",
      number: "020370315309",
      bank: "ออมสิน"
    }
    ],
    requirement: "ตามศรัทธา",
    contact: [
      "0862020042",
      "0857358733",
      "0616152596",
      "0829797936"
    ],
    date: {
      day: "28",
      month: "Dec",
      year: "2021"
    },
    others: ""
  },
  {
    id: 11,
    category: 'patients-and-disabilities',
    image: "/donors/image11.jpg",
    name: "บริจาคเงิน เพื่อมูลนิธิบริจาคผู้ยากไร้",
    problems: {
      persona: "คนเร่ร่อน, คนยากไร้",
      details: "สมทบทุนช่วยเหลือผู้ใช้ชีวิตมนที่สาธารณะ"
    },
    address: "",
    bankAccounts: [{
      name: "มูลนิธิอิสระชน",
      number: "0943869995",
      bank: "กสิกรไทย"
    }],
    requirement: "22",
    contact: "",
    date: {
      day: "13",
      month: "Apr",
      year: "2022"
    },
    others: ""
  },
  {
    id: 12,
    category: 'patients-and-disabilities',
    image: "/donors/image12.jpg",
    name: "ขอรับบริจาคให้คนไทยในเกาหลี เป็นค่ารักษาพยาบาล",
    problems: {
      persona: "คนไทยในเกาหลี",
      details: "ค่ารักษาสูง"
    },
    address: "",
    bankAccounts: [{
      name: "Sontisampan Panjaree",
      number: "27591011603607",
      bank: "Hana Bank"
    }],
    requirement: "ตามศรัทธา",
    contact: "",
    date: {
      day: "03",
      month: "May",
      year: "2022"
    },
    others: ""
  },
  {
    id: 13,
    category: 'animals',
    image: "/donors/image13.jpg",
    name: "ขอรับเงินบริจาครักษาหมาจรจัด",
    problems: {
      persona: "หมาจรจัด",
      details: "หมาจรจัดเป็นแผลไม่ทราบสาเหตุ มีแผลหนัก จึงตัดสินใจพาไปรักษา และค่ารักษาแพง"
    },
    address: "",
    bankAccounts: [{
      name: "ปัญจรัตน์ มะลิทอง",
      number: "7030601904",
      bank: "กรุงไทย"
    }],
    requirement: "ตามศรัทธา",
    contact: "",
    date: {
      day: "04",
      month: "May",
      year: "2022"
    },
    others: ""
  },
  {
    id: 14,
    category: 'patients-and-disabilities',
    image: "/donors/image14.jpg",
    name: "ขอรับเงินบริจาคค่ารักษาผ่าตัด",
    problems: {
      persona: "ผู้ป่วย",
      details: "ค่าผ่าตัดรักษาดวงตา"
    },
    address: "",
    bankAccounts: [{
      name: "จตุพร ศรีเมือง",
      number: "0311517560",
      bank: "กรุงไทย"
    }],
    requirement: "ตามศรัทธา",
    contact: "",
    date: {
      day: "29",
      month: "Apr",
      year: "2022"
    },
    others: ""
  },
  {
    id: 15,
    category: 'animals',
    image: "/donors/image15.jpg",
    name: "ขอรับบริจาคอาหารเม็ด หรือเงินทุน",
    problems: {
      persona: "แมว",
      details: "แมวกว่า 3300 ตัวอาหารไม่เพียงพอ"
    },
    address: "ปทุมธานี",
    bankAccounts: [{
      name: "จุติภรณ์​ ปรีชาสุชาติ",
      number: "5232240743",
      bank: "กสิกรไทย"
    }],
    requirement: "ตามศรัทธา",
    contact: "0867751151",
    date: {
      day: "07",
      month: "May",
      year: "2022"
    },
    others: ""
  },
  {
    id: 16,
    category: 'other',
    image: "/donors/image16.jpg",
    name: "เปิดให้สนับสนุน สื่อประชาธิปไตย",
    problems: {
      persona: "สื่อประชาธิปไตย",
      details: ""
    },
    address: "",
    bankAccounts: [{
      name: "กนกพร, ปรัชญา และ วัชรพล",
      number: "1268286655",
      bank: "กสิกรไทย"
    }],
    requirement: "ตามศรัทธา",
    contact: "https://www.facebook.com/lanner2022/?ref=page_internal",
    date: {
      day: "07",
      month: "May",
      year: "2022"
    },
    others: ""
  },
  {
    id: 17,
    category: 'accident',
    image: "/donors/image17.jpg",
    name: "ศาลาไฟไหม้ ขอรับบริจาคเพื่อสร้างหลังใหม่",
    problems: {
      persona: "วัด",
      details: "ขอเชิญพ่อแม่พี่น้อง พุทธศาสนิกชนและผู้มีจิตศรัทธา ร่วมบริจาคสมทบทุน เพื่อสร้างศาลาการเปรียญหลังใหม่ แทนหลังเก่าที่ถูกไฟไหม้ทั้งหลัง"
    },
    address: "สกลนคร",
    bankAccounts: [{
      name: "วัดศรีบุญเรือง",
      number: "4400005623",
      bank: "กรุงไทย"
    }],
    requirement: "ตามศรัทธา",
    contact: "",
    date: {
      day: "07",
      month: "May",
      year: "2022"
    },
    others: ""
  },
  {
    id: 18,
    category: 'patients-and-disabilities',
    image: "/donors/image18.jpg",
    name: "ขอรับบริจาคเพื่อยังชีพ",
    problems: {
      persona: "ผู้พิการ",
      details: "ไม่มีงาน แต่มีภาระที่ต้องเลี้ยงดูหลานชายที่เป็นผู้พิการทางสมอง เดินไม่ได้ แต่สื่อสารกันรู้เรื่อง"
    },
    address: "",
    bankAccounts: [{
      name: "นายปรารมย์  วิเวก",
      number: "020056253911",
      bank: "ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร"
    }],
    requirement: "ตามศรัทธา",
    contact: "",
    date: {
      day: "07",
      month: "May",
      year: "2022"
    },
    others: ""
  },
  {
    id: 19,
    category: 'accident',
    image: "/donors/image19.jpg",
    name: "บ้านไฟไหม้ ขอรับบริจาค",
    problems: {
      persona: "ผู้ประสบเหตุไฟไหม้",
      details: "เกิดเหตุไฟไหม้บ้านของนางสาว ฐิติชญา จิ๋วอยู่ บ้านเลขที่ 103/1 หมู่4 ต.วังแดง อ.ตรอน จ.อุตรดิตถ์ ทุกอย่างไหม้หมดไม่เหลืออะไรเลย"
    },
    address: "อุตรดิตถ์",
    bankAccounts: [{
      name: "นางสาวฐิติชญา จิ๋วอยู่",
      number: "020299171064",
      bank: "ออมสิน"
    }],
    requirement: "ตามศรัทธา",
    contact: "",
    date: {
      day: "05",
      month: "May",
      year: "2022"
    },
    others: ""
  },
  {
    id: 20,
    category: 'accident',
    image: "/donors/image20.jpg",
    name: "บ้านไฟไหม้ ขอรับบริจาค",
    problems: {
      persona: "ผู้ประสบเหตุไฟไหม้",
      details: "เกิดเหตุไฟไหม้ ที่บ้านดอนงิ้ว เป็นบ้านของ นายพิด นั่งสันเทียะ (ลุงเขียว) อยู่ บ้านเลขที่ 16 หมู่4 ต.สำโรง อ.โนนไทย จ.นครราชสีมา ทุกอย่างไหม้หมดไม่เหลืออะไรเลย"
    },
    address: "นครราชสีมา",
    bankAccounts: [{
      name: "นายพิด นั่งสันเทียะ และ นายอดิศร ประยูรศักดิ์",
      number: "4830811248",
      bank: "กรุงเทพ"
    }],
    requirement: "ตามศรัทธา",
    contact: "",
    date: {
      day: "06",
      month: "May",
      year: "2022"
    },
    others: ""
  }
]

export const donorsList = readable(_donorsList)