/**
 * @author Patsagorn Y. <me@patsag.one>
 * @license MIT
 */

/**
 * @typedef {Object} ApiCategoryResponse
 * @property {'ok' | 'error'} status if the response is ok or error
 * @property {Categories[]?} data data to show
 * @property {StrapiMetadata?} meta meta data
 * @property {ApiErrorResponse?} error error response
 */
/**
 * @typedef {Object} Categories
 * @property {string} id category id
 * @property {ApiCategoryAttributeData} attributes category attributes data
 */
/**
 * @typedef {Object} ApiCategoryAttributeData
 * @property {string} displayTitle category display title
 * @property {string} referId category refer id for url
 * @property {string} description category description
 * @property {string} icon category icon per material design
 * @property {DateFromISOString} createdAt category created date
 * @property {DateFromISOString} updatedAt category updated date
 * @property {DateFromISOString} publishedAt category published date
 * @property {LocaleLanguage} locale category locale
 * @property {richText} heroBannerCreadits category hero banner creadits
 * @property {string} url_path category url path
 */

import { endpointFetch } from '@lib/helpers/api/fetch';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
  let catID = params.catId;
  let path = `url-alias/get?path=/categories/${catID}&populate[images][populate]=*`;
  try {
    const data = await (await endpointFetch(path)).json();
    return {
      body: {
        status: 'ok',
        ...data
      }
    };
  } catch (error) {
    return {
      body: {
        status: 'error',
        error: {
          message: error.message,
          code: error.code
        }
      }
    };
  }
}
