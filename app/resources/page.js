import { blogArticles } from "@/app/resources/[slug]/page";
import { redirect } from 'next/navigation';

export default function Resources() {

    const mostRecentBlog = blogArticles[0];

    redirect('/resources/' + mostRecentBlog.slug);
    return null;
}
