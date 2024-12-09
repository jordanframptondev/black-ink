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
            <div className="relative z-50">
                <Header color="cream" />
                <ResourceArticle article={blogArticle} allArticles={allArticles} />
                <ResourcesPreviewList
                    background="#39332e"
                    onArticle={true}
                    posts={allArticles}
                />
            </div>
            <div className={"text-[#EFEEE8] select-none"}>
                <div id="footer" className={"relative text-white bg-black h-screen"}>
                    <Footer multiFixedElements={false} />
                </div>
            </div>
        </div>
    );
}
