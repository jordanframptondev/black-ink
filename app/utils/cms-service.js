// sanity.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
    projectId: "",
    dataset: "production",
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export function urlFor(source) {
  const builder = imageUrlBuilder(client);
  return builder.image(source);
}

export function getHomeContent() {
  // return client.fetch(`*[_type == 'homepage']{title, "backgroundImage" -> asset->url, "title", description}`);
}