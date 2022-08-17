/**
 * @author Patsagorn Y. <me@patsag.one>
 * @license MIT
 */

import { PUBLIC_API_ENDPOINT } from '$env/static/public';
import { endpointFetch } from '@lib/helpers/api/fetch';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ request }) {
  let path = new URL(request.url).pathname.slice('/api/'.length);
  return await endpointFetch(path)
    .then(async (rawContent) => {
      let contents = await rawContent.json();
      // console.log(contents)
      return {
        body: {
          status: rawContent.ok ? 'ok' : 'error',
          ...contents
        }
      };
    }).catch((error) => {
      console.error(error);
      return {
        body: {
          status: 'error',
          error: error.message
        }
      }
    })
}
