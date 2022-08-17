/** @type {import('@sveltejs/kit').PageLoad} */
export async function load({ params, fetch }) {
	return {
		linkId: params.id ?? 19,
		data: {}
	};
}
/**
 * @typedef {Object} ImageDataFormats
 * @property {ImageSizeData} thumbnail
 * @property {ImageSizeData} small
 * @property {ImageSizeData} medium
 * @property {ImageSizeData} large
 */
/**
 * @typedef {Object} ImageSizeData
 * @property {string} name name of the image
 * @property {string} hash hash of the image
 * @property {string} ext extension of the image
 * @property {string} mime mime type of the image
 * @property {string?} path path to the image
 * @property {number} width width of the image
 * @property {number} height height of the image
 * @property {number} size size of the image in bytes
 * @property {string} url
 */
/**
 * @typedef {Object} ImageData
 * @property {number} id รหัสภาพ
 * @property {string} name ชื่อไฟล์
 * @property {string} alternativeText alt text
 * @property {string} caption คำอธิบายภาพ
 * @property {number} width ความกว้างภาพ
 * @property {number} height ความสูงภาพ
 * @property {ImageDataFormats} formats รูปแบบของภาพ
 * @property {string} hash Image hash
 * @property {string} ext นามสกุลของไฟล์
 * @property {string} mime ชนิดของไฟล์
 * @property {number} size ขนาดของไฟล์
 * @property {string} url ที่อยู่อ้างอิงถึงไฟล์
 * @property {string?} previewUrl วันที่สร้าง
 * @property {string} provider ที่เก็บภาพ
 * @property {string?} provider_metadata ข้อมูลของผู้ให้บริการภาพ
 * @property {string} createdAt วันที่สร้าง
 * @property {string} updatedAt วันที่แก้ไข
 * @property {string?} placeholder
 */
/**
 * @typedef {Object} CampaignData
 * @property {string} title campaign title
 * @property {string} recipient ผู้รับบริจาค
 * @property {string} requester ผู้เสนอขอรับบริจาค
 * @property {string} goal เป้าหมายการบริจาค
 * @property {string} end วันสิ้นสุดการบริจาค
 * @property {number} goal เงินเป้าหมายการบริจาค
 * @property {string} details รายละเอียดการรับบริจาค
 * @property {string} campaignID รหัสการรับบริจาค ใช้ใน url
 * @property {string} createdAt วันที่สร้าง
 * @property {string} updatedAt อัปเดตล่าสุด
 * @property {string} publishedAt วันที่เผยแพร่
 * @property {string} source แหล่งที่มาของข้อมูล
 * @property {import('../api/categories/[catId]').ApiCategoryAttributeData[]} category หมวดหมู่ของการรับบริจาค
 * @property {ImageData} heroImage ภาพหน้าปกการรับบริจาค
 * @property {ImageData[]} detailImages ภาพอื่น ๆ ที่เกี่ยวข้องกับการรับบริจาค
 * @property {DonateData} donateStaff ข้อมูล
 */
/**
 * @typedef {Object} DonateData
 * @property {id} id
 * @property {name}
 */
