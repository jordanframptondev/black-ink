import { redirect } from 'next/navigation';
import { getPostList } from "@/app/utils/cms-service";

export default async function Resources() {
    const allArticles = await getPostList();
    redirect('/resources/' + allArticles[0].slug.current);
    return null;
}
