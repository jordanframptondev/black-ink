import { redirect } from 'next/navigation';
import {blogArticles} from "@/app/resources/[slug]/page";

export default function Resources() {

    const mostRecentBlog = blogArticles[0];

    redirect('/resources/' + mostRecentBlog.slug);
    return null;
}
