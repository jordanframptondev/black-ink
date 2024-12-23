// sanity.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
    projectId: "yl9xajmz",
    dataset: "production",
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export function urlFor(source) {
    const builder = imageUrlBuilder(client);
    return builder.image(source);
}

export async function getInfoData(title) {
    let titleParam = "";
    if (title) {
        titleParam = ` && title=='${title}'`;
    }

    const data = await client.fetch(
        `*[_type == 'expandContentList'${titleParam}]{title, contentList[]{title, content, image{asset->}}}`
    );

    return data[0].contentList;
}

export function getEthosData() {
    return client.fetch(`*[_type == 'ethos']{contentList[]{title, content, image{asset->}}}`);
}

export function getServicesData() {
    return client.fetch(`*[_type == 'services']{contentList[]{title, content, image{asset->}}}`);
}

export function getPartnersData() {
    return client.fetch(`*[_type == 'partners']{contentList[]{title, content, image{asset->}}}`);
}

export function getLastThreePosts() {
    return client.fetch(`*[_type == "post"][0..3] | order(_createdAt asc)`);
}

export function getTestimonials() {
    return client.fetch(`*[_type == 'testimonials']`);
}

export function getContactQuestions() {
    return client.fetch(`*[_type == 'contactQuestion']`);
}

export function getLogos() {
    return client.fetch(`*[_type == 'clientLogoCarousel']{logos[]{asset->}}`);
}

export function getTeam() {
    return client.fetch(
        `*[_type == 'employeeList'].employees[]{_key, displayText, image{asset->}}`
    );
}

export function getAboutQuote() {
    return client.fetch(`*[_type == 'aboutQuote']`);
}

export function getCareersQuote() {
    return client.fetch(`*[_type == 'careersQuote']`);
}

export function getPostBySlug(slug) {
    return client.fetch(`*[_type == "post" && slug.current == $slug][0]`, {
        slug,
    });
}

export function getPostList() {
    return client.fetch(
        `*[_type == "post"]{title, slug, thumbnailImage{asset->}}`
    );
}
