/**
 * @typedef {'th'|'en'} LocaleLanguage Available languages
 */
/**
 * @typedef {string} richText Markdown string
 */
/**
 * @typedef {string} DateFromISOString date in format 2022-08-09T13:51:37.644Z or ISO 8601,
 *    can be parsed to date by new Date(date)
 */
/**
 * @typedef {Object} StrapiMetadata
 * @property {StrapiPagination} pagination pagination data
 */
/**
 * @typedef {Object} StrapiPagination
 * @property {number} page current page
 * @property {number} pageSize number of items per page
 * @property {number} pageCount total page count
 * @property {number} total total number of items
 */
/**
 * @typedef {Object} ApiErrorResponse
 * @property {number} status HTTP status code
 * @property {string} name error code
 * @property {string} message error message
 * @property {ApiErrorDetail} details error details
 */
/**
 * @typedef {Object<string, string>} ApiErrorDetail
 */
