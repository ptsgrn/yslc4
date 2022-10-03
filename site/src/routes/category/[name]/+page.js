// http://localhost:1337/api/categories?filters[referId][$eq]=animals&populate=*

import { error } from '@sveltejs/kit';
const data = {
  "data": [
    {
      "id": 2,
      "displayTitle": "สัตว์",
      "referId": "animals",
      "description": "สัตว์โลกหน้ารักที่(เกือบ)ไร้การดูแล",
      "icon": "Paw",
      "heroBannerCreadits": "Photo by [Evan Clark](https://unsplash.com/@iamevanclark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/stray?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)",
      "createdAt": "2022-08-16T15:03:18.420Z",
      "updatedAt": "2022-09-18T07:04:33.870Z",
      "publishedAt": "2022-08-16T15:04:43.480Z",
      "locale": "th",
      "heroBanner": {
        "id": 70,
        "name": "evan-clark-dpn6K9e1vzY-unsplash.jpg",
        "alternativeText": "evan-clark-dpn6K9e1vzY-unsplash.jpg",
        "caption": "evan-clark-dpn6K9e1vzY-unsplash.jpg",
        "width": 3632,
        "height": 1816,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_evan-clark-dpn6K9e1vzY-unsplash.jpg",
            "hash": "thumbnail_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 245,
            "height": 123,
            "size": 11.51,
            "url": "http://storage.googleapis.com/termtem-site-assets/public/thumbnail_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5/thumbnail_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5.jpg"
          },
          "medium": {
            "name": "medium_evan-clark-dpn6K9e1vzY-unsplash.jpg",
            "hash": "medium_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 750,
            "height": 375,
            "size": 79.46,
            "url": "http://storage.googleapis.com/termtem-site-assets/public/medium_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5/medium_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5.jpg"
          },
          "small": {
            "name": "small_evan-clark-dpn6K9e1vzY-unsplash.jpg",
            "hash": "small_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 250,
            "size": 39.13,
            "url": "http://storage.googleapis.com/termtem-site-assets/public/small_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5/small_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5.jpg"
          },
          "large": {
            "name": "large_evan-clark-dpn6K9e1vzY-unsplash.jpg",
            "hash": "large_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 1000,
            "height": 500,
            "size": 129.45,
            "url": "http://storage.googleapis.com/termtem-site-assets/public/large_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5/large_evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5.jpg"
          }
        },
        "hash": "evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "size": 1144.7,
        "url": "http://storage.googleapis.com/termtem-site-assets/public/evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5/evan_clark_dpn6_K9e1vz_Y_unsplash_2e3297d5f5.jpg",
        "previewUrl": null,
        "provider": "@strapi-community/strapi-provider-upload-google-cloud-storage",
        "provider_metadata": null,
        "createdAt": "2022-09-18T06:59:45.476Z",
        "updatedAt": "2022-09-18T06:59:45.476Z",
        "placeholder": null
      },
      "campaigns": [
        // http://localhost:1337/api/campaigns/1?populate=*
        {
          "id": 1,
          "title": "ทดสอบอันที่ 1",
          "recipient": "สุนัข",
          "requester": "พระสงฆ์",
          "end": "2022-08-30T17:00:00.000Z",
          "goal": 12000,
          "datails": "นี่คือ**ตัวอย่าง**การเขียนรายละเอียด __ใช้ได้ป่าว__ ~~นะเอ๋~~",
          "campaignID": "poor-dog-with-pra-test-test",
          "createdAt": "2022-08-16T14:56:18.554Z",
          "updatedAt": "2022-09-28T19:21:24.495Z",
          "publishedAt": "2022-08-16T15:05:03.253Z",
          "source": null,
          "url_path": "-0"
        }
      ],
      "localizations": [
      ],
      "url_path": "-8"
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}

/** @type {import('./$types').PageLoad} */
export async function load() {
  if (data.data.length === 0) return error(404, 'not found')
  return {
    categoryData: data
  }
}