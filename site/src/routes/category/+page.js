import { env } from '$env/dynamic/public';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
	let categories = {
		data: [
			{
				id: 2,
				displayTitle: 'สัตว์',
				referId: 'animals',
				description: 'สัตว์โลกหน้ารักที่(เกือบ)ไร้การดูแล',
				icon: 'Paw',
				heroBannerCreadits:
					'Photo by <a href="https://unsplash.com/@iamevanclark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Evan Clark</a> on <a href="https://unsplash.com/s/photos/stray?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
				createdAt: '2022-08-16T15:03:18.420Z',
				updatedAt: '2022-09-18T07:04:33.870Z',
				publishedAt: '2022-08-16T15:04:43.480Z',
				locale: 'th',
				heroBanner: {
					id: 70,
					name: 'evan-clark-dpn6K9e1vzY-unsplash.jpg',
					alternativeText: 'evan-clark-dpn6K9e1vzY-unsplash.jpg',
					caption: 'evan-clark-dpn6K9e1vzY-unsplash.jpg',
					width: 3632,
					height: 1816,
					formats: {
						thumbnail: {
							name: 'thumbnail_evan-clark-dpn6K9e1vzY-unsplash.jpg',
							hash: 'thumbnail_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 245,
							height: 123,
							size: 11.51,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/thumbnail_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5/thumbnail_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5.jpg'
						},
						medium: {
							name: 'medium_evan-clark-dpn6K9e1vzY-unsplash.jpg',
							hash: 'medium_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 750,
							height: 375,
							size: 79.46,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/medium_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5/medium_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5.jpg'
						},
						small: {
							name: 'small_evan-clark-dpn6K9e1vzY-unsplash.jpg',
							hash: 'small_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 500,
							height: 250,
							size: 39.13,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/small_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5/small_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5.jpg'
						},
						large: {
							name: 'large_evan-clark-dpn6K9e1vzY-unsplash.jpg',
							hash: 'large_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 1000,
							height: 500,
							size: 129.45,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/large_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5/large_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5.jpg'
						}
					},
					hash: 'evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5',
					ext: '.jpg',
					mime: 'image/jpeg',
					size: 1144.7,
					url: 'http://storage.googleapis.com/termtem-site-assets/public/evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5/evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5.jpg',
					previewUrl: null,
					provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
					provider_metadata: null,
					createdAt: '2022-09-18T06:59:45.476Z',
					updatedAt: '2022-09-18T06:59:45.476Z',
					placeholder: null
				},
				campaigns: [
					{
						id: 1,
						title: 'ทดสอบอันที่ 1',
						recipient: 'สุนัข',
						requester: 'พระสงฆ์',
						end: '2022-08-30T17:00:00.000Z',
						goal: 12000,
						datails: 'นี่คือ**ตัวอย่าง**การเขียนรายละเอียด __ใช้ได้ป่าว__ ~~นะเอ๋~~',
						campaignID: 'poor-dog-with-pra-test-test',
						createdAt: '2022-08-16T14:56:18.554Z',
						updatedAt: '2022-08-16T15:05:03.260Z',
						publishedAt: '2022-08-16T15:05:03.253Z',
						source: null,
						url_path: '-0'
					}
				],
				localizations: [],
				url_path: '-8'
			},
			{
				id: 3,
				displayTitle: 'ผู้ป่วยและผู้พิการ',
				referId: 'patients-and-disabilities',
				description: 'ทดสอบ ทดสอบ',
				icon: 'Wheelchair',
				heroBannerCreadits:
					'Photo by <a href=\\"https://unsplash.com/@iamevanclark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\\">Evan Clark</a> on <a href=\\"https://unsplash.com/s/photos/stray?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\\">Unsplash</a>',
				createdAt: '2022-08-16T15:13:59.475Z',
				updatedAt: '2022-09-18T07:00:41.941Z',
				publishedAt: '2022-08-16T15:14:00.920Z',
				locale: 'th',
				heroBanner: {
					id: 71,
					name: 'nathan-anderson-FHiJWoBodrs-unsplash.jpg',
					alternativeText: 'nathan-anderson-FHiJWoBodrs-unsplash.jpg',
					caption: 'nathan-anderson-FHiJWoBodrs-unsplash.jpg',
					width: 6016,
					height: 3008,
					formats: {
						thumbnail: {
							name: 'thumbnail_nathan-anderson-FHiJWoBodrs-unsplash.jpg',
							hash: 'thumbnail_nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 245,
							height: 123,
							size: 7.59,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/thumbnail_nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f/thumbnail_nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f.jpg'
						},
						small: {
							name: 'small_nathan-anderson-FHiJWoBodrs-unsplash.jpg',
							hash: 'small_nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 500,
							height: 250,
							size: 22.9,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/small_nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f/small_nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f.jpg'
						},
						medium: {
							name: 'medium_nathan-anderson-FHiJWoBodrs-unsplash.jpg',
							hash: 'medium_nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 750,
							height: 375,
							size: 44.73,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/medium_nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f/medium_nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f.jpg'
						},
						large: {
							name: 'large_nathan-anderson-FHiJWoBodrs-unsplash.jpg',
							hash: 'large_nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 1000,
							height: 500,
							size: 72.5,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/large_nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f/large_nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f.jpg'
						}
					},
					hash: 'nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f',
					ext: '.jpg',
					mime: 'image/jpeg',
					size: 1336.44,
					url: 'http://storage.googleapis.com/termtem-site-assets/public/nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f/nathan_anderson_F_Hi_J_Wo_Bodrs_unsplash_54aad1473f.jpg',
					previewUrl: null,
					provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
					provider_metadata: null,
					createdAt: '2022-09-18T06:59:45.758Z',
					updatedAt: '2022-09-18T06:59:45.758Z',
					placeholder: null
				},
				campaigns: [
					{
						id: 1,
						title: 'ทดสอบอันที่ 1',
						recipient: 'สุนัข',
						requester: 'พระสงฆ์',
						end: '2022-08-30T17:00:00.000Z',
						goal: 12000,
						datails: 'นี่คือ**ตัวอย่าง**การเขียนรายละเอียด __ใช้ได้ป่าว__ ~~นะเอ๋~~',
						campaignID: 'poor-dog-with-pra-test-test',
						createdAt: '2022-08-16T14:56:18.554Z',
						updatedAt: '2022-08-16T15:05:03.260Z',
						publishedAt: '2022-08-16T15:05:03.253Z',
						source: null,
						url_path: '-0'
					}
				],
				localizations: [],
				url_path: '-15'
			},
			{
				id: 4,
				displayTitle: 'เด็กและเยาชน',
				referId: 'children-and-youths',
				description: 'ช่วยเหลือเด็กและเยาวชนขาดโอกาส',
				icon: 'Kid',
				heroBannerCreadits: null,
				createdAt: '2022-08-16T15:45:16.016Z',
				updatedAt: '2022-09-18T07:00:50.622Z',
				publishedAt: '2022-08-16T15:45:32.351Z',
				locale: 'th',
				heroBanner: {
					id: 67,
					name: 'bill-wegener-zXfuAIUDfao-unsplash.jpg',
					alternativeText: 'bill-wegener-zXfuAIUDfao-unsplash.jpg',
					caption: 'bill-wegener-zXfuAIUDfao-unsplash.jpg',
					width: 2592,
					height: 1296,
					formats: {
						thumbnail: {
							name: 'thumbnail_bill-wegener-zXfuAIUDfao-unsplash.jpg',
							hash: 'thumbnail_bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 245,
							height: 122,
							size: 9.4,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/thumbnail_bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317/thumbnail_bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317.jpg'
						},
						large: {
							name: 'large_bill-wegener-zXfuAIUDfao-unsplash.jpg',
							hash: 'large_bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 1000,
							height: 500,
							size: 85.3,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/large_bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317/large_bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317.jpg'
						},
						small: {
							name: 'small_bill-wegener-zXfuAIUDfao-unsplash.jpg',
							hash: 'small_bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 500,
							height: 250,
							size: 28.96,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/small_bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317/small_bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317.jpg'
						},
						medium: {
							name: 'medium_bill-wegener-zXfuAIUDfao-unsplash.jpg',
							hash: 'medium_bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 750,
							height: 375,
							size: 53.71,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/medium_bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317/medium_bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317.jpg'
						}
					},
					hash: 'bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317',
					ext: '.jpg',
					mime: 'image/jpeg',
					size: 356.16,
					url: 'http://storage.googleapis.com/termtem-site-assets/public/bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317/bill_wegener_z_Xfu_AIU_Dfao_unsplash_0d874c1317.jpg',
					previewUrl: null,
					provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
					provider_metadata: null,
					createdAt: '2022-09-18T06:59:44.389Z',
					updatedAt: '2022-09-18T06:59:44.389Z',
					placeholder:
						'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAhEAABBAEDBQAAAAAAAAAAAAABAAIDEQQFEkEGBzEyYf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAIf/aAAwDAQACEQMRAD8At2j0fEHRrNbY1zZy+fHjF+gikazdfJO6waBFc2pZBiE8gEEdBx8j6iKSok6GRt3/2Q=='
				},
				campaigns: [],
				localizations: [],
				url_path: '-22'
			},
			{
				id: 5,
				displayTitle: 'ผู้สูงอายุ',
				referId: 'old-people',
				description: 'ผู้สูงอายุที่ยังต้องการโอกาสเลี้ยงตนเอง',
				icon: 'HumanCane',
				heroBannerCreadits: null,
				createdAt: '2022-08-16T15:48:33.734Z',
				updatedAt: '2022-09-18T07:01:00.954Z',
				publishedAt: '2022-08-16T15:48:35.377Z',
				locale: 'th',
				heroBanner: {
					id: 69,
					name: 'evan-krause-InAu-8bM2ow-unsplash.jpg',
					alternativeText: 'evan-krause-InAu-8bM2ow-unsplash.jpg',
					caption: 'evan-krause-InAu-8bM2ow-unsplash.jpg',
					width: 2891,
					height: 1446,
					formats: {
						thumbnail: {
							name: 'thumbnail_evan-krause-InAu-8bM2ow-unsplash.jpg',
							hash: 'thumbnail_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 245,
							height: 122,
							size: 9.67,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/thumbnail_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0/thumbnail_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0.jpg'
						},
						medium: {
							name: 'medium_evan-krause-InAu-8bM2ow-unsplash.jpg',
							hash: 'medium_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 750,
							height: 375,
							size: 71.09,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/medium_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0/medium_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0.jpg'
						},
						large: {
							name: 'large_evan-krause-InAu-8bM2ow-unsplash.jpg',
							hash: 'large_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 1000,
							height: 500,
							size: 116.26,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/large_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0/large_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0.jpg'
						},
						small: {
							name: 'small_evan-krause-InAu-8bM2ow-unsplash.jpg',
							hash: 'small_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 500,
							height: 250,
							size: 34.62,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/small_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0/small_evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0.jpg'
						}
					},
					hash: 'evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0',
					ext: '.jpg',
					mime: 'image/jpeg',
					size: 610.63,
					url: 'http://storage.googleapis.com/termtem-site-assets/public/evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0/evan_krause_In_Au_8b_M2ow_unsplash_d41ba742a0.jpg',
					previewUrl: null,
					provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
					provider_metadata: null,
					createdAt: '2022-09-18T06:59:44.575Z',
					updatedAt: '2022-09-18T06:59:44.575Z',
					placeholder:
						'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIG/8QAHxAAAgEEAwEBAAAAAAAAAAAAAQIDAAQFEQYHE1HT/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAXEQEBAQEAAAAAAAAAAAAAAAABAgAx/9oADAMBAAIRAxEAPwDA4rteytbKRxxHHyyzzpITI6sqyJGyq6p56B1Id/ap+28WHYDgeDAB0B5xflSlGYNTQPTf/9k='
				},
				campaigns: [],
				localizations: [],
				url_path: '-25'
			},
			{
				id: 6,
				displayTitle: 'อุบัติภัย',
				referId: 'diasters',
				description:
					'ภัยต่าง ๆ มักมาในเวลาที่คาดไม่ถึงเสมอ ร่วมช่วยผู้ประสบภัย บริจากได้ทั้งสิ่งของและเงิน',
				icon: 'HomeFlood',
				heroBannerCreadits: null,
				createdAt: '2022-08-16T16:01:07.793Z',
				updatedAt: '2022-09-18T07:01:12.396Z',
				publishedAt: '2022-08-16T16:01:09.578Z',
				locale: 'th',
				heroBanner: {
					id: 68,
					name: 'saikiran-kesari-qVULJ6acwe8-unsplash.jpg',
					alternativeText: 'saikiran-kesari-qVULJ6acwe8-unsplash.jpg',
					caption: 'saikiran-kesari-qVULJ6acwe8-unsplash.jpg',
					width: 3024,
					height: 1512,
					formats: {
						thumbnail: {
							name: 'thumbnail_saikiran-kesari-qVULJ6acwe8-unsplash.jpg',
							hash: 'thumbnail_saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 245,
							height: 123,
							size: 10.22,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/thumbnail_saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b/thumbnail_saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b.jpg'
						},
						medium: {
							name: 'medium_saikiran-kesari-qVULJ6acwe8-unsplash.jpg',
							hash: 'medium_saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 750,
							height: 375,
							size: 76.79,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/medium_saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b/medium_saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b.jpg'
						},
						small: {
							name: 'small_saikiran-kesari-qVULJ6acwe8-unsplash.jpg',
							hash: 'small_saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 500,
							height: 250,
							size: 36.66,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/small_saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b/small_saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b.jpg'
						},
						large: {
							name: 'large_saikiran-kesari-qVULJ6acwe8-unsplash.jpg',
							hash: 'large_saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b',
							ext: '.jpg',
							mime: 'image/jpeg',
							path: null,
							width: 1000,
							height: 500,
							size: 127.12,
							url: 'http://storage.googleapis.com/termtem-site-assets/public/large_saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b/large_saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b.jpg'
						}
					},
					hash: 'saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b',
					ext: '.jpg',
					mime: 'image/jpeg',
					size: 944.83,
					url: 'http://storage.googleapis.com/termtem-site-assets/public/saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b/saikiran_kesari_q_VULJ_6acwe8_unsplash_fd8697678b.jpg',
					previewUrl: null,
					provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
					provider_metadata: null,
					createdAt: '2022-09-18T06:59:45.134Z',
					updatedAt: '2022-09-18T06:59:45.134Z',
					placeholder: null
				},
				campaigns: [
					{
						id: 2,
						title: 'บ้านไฟไหม้ ขอรับบริจาค',
						recipient: 'นางสาวฐิติชญา จิ๋วอยู่',
						requester: 'เจ้าหน้าที่ในท้องถิ่น',
						end: '2022-08-30T17:00:00.000Z',
						goal: 200000,
						datails:
							'ไฟไหม้ทุกอย่างหมด ไม่เหลืออะไรเลย ...\n.\nวันนี้ (5 พ.ค. 65) เวลาประมาณ 16.45 น. เกิดเหตุไฟไหม้บ้านของนางสาวฐิติชญา จิ๋วอยู่ บ้านเลขที่ 103/1 หมู่ 4 ต.วังแดง อ.ตรอน จ.อุตรดิตถ์ ทุกอย่างไหม้หมดไม่เหลืออะไรเลย\n.\nขอเชิญร่วมบริจาคเงิน ท่านใดอยากช่วยเหลือเหลือครอบครัวผู้ประสบอัคคีภัยเนื่องจากเหตุการณ์ไฟไหม้บ้านครอบครัว นางสาว ฐิติชญา จิ๋วอยู่  สามารถโอนเงินเข้าบัญชีเงินฝากได้ตามบัญชี',
						campaignID: 'campaign-1',
						createdAt: '2022-08-16T16:10:28.195Z',
						updatedAt: '2022-08-17T06:34:46.837Z',
						publishedAt: '2022-08-16T16:10:30.558Z',
						source:
							'- [เพจเฟซบุ๊ก อุตรดิตถ์ 24 ชั่วโมง](https://www.facebook.com/ut24hrs/posts/pfbid0ZmujUKsdor7NRQYSNpZBuhZC2bhRmtLSusVAGQLXLEYzmobpvo7qxwEYjAotjKbCl)',
						url_path: '-32'
					}
				],
				localizations: [],
				url_path: '-29'
			}
		],
		meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 5 } }
	};
	return {
		categories
	};
}
