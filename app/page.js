import HomeCta from "../public/images/home-cta.png";
import { FadeIn } from "./components/FadeIn";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { ResourcesPreviewList } from "./components/ResourcesPreviewList";
import { FullCta } from "./components/server-components/FullCta";
import { Testimonials } from "./components/Testimonials";
import { getEthosData, getLogos, getPartnersData, getPostList, getServicesData } from "./utils/cms-service";
import Image from "next/image";
import BlackInkLogo from "@/public/images/black-ink-logo-cream.png";
import React from "react";
import { IntroAnimation } from "@/app/components/IntroAnimation";

export default async function Home() {
    const ethosData = (await getEthosData())?.[0]?.contentList;
    const servicesData = (await getServicesData())?.[0]?.contentList;
    const partnersData = (await getPartnersData())?.[0]?.contentList;
    const cmsLogosResponse = await getLogos();
    const blogPosts = await getPostList();
    const logos = cmsLogosResponse[0]?.logos.map((logo) => ({
        url: logo.asset.url,
        id: logo.asset.assetId,
        lqip: logo.asset.metadata.lqip,
    }));

    return (
        <div className="relative">
            <IntroAnimation/>
            <div>
                <Header color="cream"/>
                <div className="fixed flex w-full min-h-dvh">
                    <Image
                        src={BlackInkLogo}
                        width={150}
                        height={150}
                        alt="Black Ink"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"
                    />
                    <h1 className="text-white text-lg lg:text-2xl white font-ritma uppercase pb-11 mt-auto mx-auto">
                        into the black
                    </h1>
                </div>
                <div className="relative pt-[100dvh]">
                    <div className="flex flex-col justify-between min-w-screen h-dvh bg-black px-10">
                        <FadeIn viewportMargin="100px 100px 100px">
                            <h3 className="text-center text-[#EFEEE8] text-xl md:text-4xl pt-10 border-t border-[#EFEEE8] font-signifier">
                                There are <i>many futures, </i>
                                <br className="block md:hidden"/>
                                Black Ink points you to <i>the right one.</i>
                            </h3>
                        </FadeIn>
                        <FadeIn viewportMargin="100px 100px 100px">
                            <h2 className="mt-auto text-center text-[#EFEEE8] text-xl md:text-4xl pb-10 font-signifier">
                                We facilitate the{" "}
                                <i>selection, design, and implementation</i> of
                                strategic projects.
                            </h2>
                        </FadeIn>
                    </div>
                </div>
                <div className={"relative"}>
                    <Info
                        backgroundColor="#544F3D"
                        title="ETHOS"
                        sections={ethosData}
                    />
                </div>
                <div className={"relative bg-[#EFEEE8]"}>
                    <Testimonials logos={logos}/>
                </div>
                <FullCta
                    overlay="#3A332E"
                    link="/contact"
                    displayText="FIND THE PATH TO FUTURE PROOF"
                    backgroundImageSrc={HomeCta}
                />
                <Info
                    backgroundColor="#efeee8"
                    // backgroundAnimation={"/services_bg.json"}
                    backgroundImage="/images/services-background.png"
                    title="SERVICES"
                    sections={servicesData}
                    textLight={false}
                    minHeight={"100dvh"}
                />
                <div className={"relative bg-black"}>
                    <ResourcesPreviewList background={"black"} posts={blogPosts}/>
                </div>
                <div className={"relative bg-[#EFEEE8]"}>
                    <Info
                        backgroundColor="#efeee8"
                        title="PARTNERS"
                        sections={partnersData}
                        textLight={false}
                    />
                </div>
                <div className="relative bg-black">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
