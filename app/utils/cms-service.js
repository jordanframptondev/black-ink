// sanity.js
import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
    projectId: "yl9xajmz",
    dataset: "production",
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export function getInfoData(title) {
  let titleParam = '';
  if (title) {
    titleParam = ` && title=='${title}'`;
  }

  return client.fetch(`*[_type == 'expandContentList'${titleParam}]{title, contentList[]{title, content, image{asset->}}}`);
}

export function getLastThreePosts() {
  return client.fetch(`*[_type == "post"][0..3] | order(_createdAt asc)`);
}

export function getCtaList(title) {
  let titleParam = '';
  if (title) {
    titleParam = ` && title=='${title}'`;
  }
  return client.fetch(`*[_type == 'logoList'${titleParam}]{ title, logos[]{asset->}}`);
}