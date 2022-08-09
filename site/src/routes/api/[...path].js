/**
 * @author Patsagorn Y. <me@patsag.one>
 * @license MIT
 */

import { PUBLIC_API_ENDPOINT } from '$env/static/public';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ request }) {
  let path = new URL(request.url).pathname.slice('/api/'.length);
  const rawContent = await fetch(`${PUBLIC_API_ENDPOINT}/${path}`, {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'max-age=300'
    }
  })
  let contents = await rawContent.json();
  console.log(contents)
  return {
    body: {
      status: rawContent.ok ? 'ok' : 'error',
      ...contents
    }
  };
}
