"use client";

import "@/styles/resource.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FadeIn } from "../components/FadeIn";
import { urlFor } from "../utils/cms-service";
import PostBody from "./PostBody";

export default function ResourceArticle({article, allArticles}) {
    const router = useRouter();
    let backgroundColor = "#EFEEE8";
    let textColor = "#000000";
    if (article?.backgroundColor) {
        backgroundColor = article.backgroundColor.hex;
    }
    if (article?.textColor) {
        textColor = article.textColor.hex;
    }

    const handleNextArticle = async () => {
        const currentIndex = allArticles.findIndex(
            (blogArticle) => blogArticle.slug.current === article.slug.current
        );
        if (currentIndex === -1) {
            return null; // Return null if the current article is not found
        }

        const nextArticle =
            allArticles[(currentIndex + 1) % allArticles.length];
        await router.push(`/resources/${nextArticle.slug.current}`);
    };

    return (
        <>
            <div className={`h-screen bg-[#544F3D] px-10 pb-10`}>
                <div className="flex h-full md:pt-[140px]">
                    <div className="hidden md:block md:w-1/3"></div>
                    <div className="w-full md:w-2/3 transition-all duration-500 ease-in">
                        <div className="article-heading flex flex-col h-full text-[#EFEEE8]">
                            <FadeIn className={"mt-auto md:mt-0"}>
                                <h1
                                    className={
                                        "font-signifier text-xl md:text-4xl"
                                    }
                                >
                                    {article?.title}
                                </h1>
                            </FadeIn>
                            <div className="my-5 md:my-10">
                                <FadeIn>
                                    <div className="relative bg-[#EFEEE8]">
                                        <Image
                                            src={urlFor(
                                                article?.mainImage
                                            ).url()}
                                            alt={article?.title}
                                            width={1220}
                                            height={610}
                                            className="w-full h-full md:h-[55vh] object-cover"
                                        />
                                    </div>
                                </FadeIn>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                                <FadeIn viewportMargin="0px 0px 0px">
                                    <p className="font-signifier text-xl md:text-2xl">
                                        {article?.author}
                                    </p>
                                </FadeIn>
                                <FadeIn viewportMargin="0px 0px 0px">
                                    <div
                                        className="next-article-link"
                                        onClick={handleNextArticle}
                                    >
                                        <span className="arrow">→</span>
                                        <button className="link-text font-ritma tracking-widest text-xl">
                                            NEXT
                                        </button>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="flex flex-col md:flex-row p-10"
                style={{backgroundColor: backgroundColor, color: textColor}}
            >
                <div className="w-full md:w-1/3">
                    <h2 className="font-ritma text-lg md:text-2xl">
                        RESOURCES
                    </h2>
                </div>
                <div className="w-full md:w-2/3 min-h-screen">
                    <PostBody text={article?.body}/>
                </div>
            </div>
        </>
    );
}
