import { getPostBySlug, getPostList } from "@/app/utils/cms-service";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import ResourceArticle from "../../components/ResourceArticle";
import { ResourcesPreviewList } from "../../components/ResourcesPreviewList";

export default async function ResourcePage({ params: { slug } }) {
    const allArticles = await getPostList();
    const blogArticle = await getPostBySlug(slug);
    return (
        <div className="relative">
            <Header color="cream" />
            <ResourceArticle article={blogArticle} allArticles={allArticles} />
            <ResourcesPreviewList
                background="#39332e"
                onArticle={true}
                posts={allArticles}
            />
            <div className={"text-[#EFEEE8] select-none"}>
                <div className={"relative"}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
