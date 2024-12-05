import HomeCta from "../public/images/home-cta.png";
import { FadeIn } from "./components/FadeIn";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HeroAnimation } from "./components/HeroAnimation";
import { Info } from "./components/Info";
import { Logos } from "./components/Logos";
import { ResourcesPreviewList } from "./components/ResourcesPreviewList";
import { FullCta } from "./components/server-components/FullCta";
import { Testimonials } from "./components/Testimonials";
import { getEthosData, getLogos, getPartnersData, getPostList, getServicesData, getTestimonials } from "./utils/cms-service";

export default async function Home() {
    const ethosData = (await getEthosData())?.[0]?.contentList;
    const servicesData = (await getServicesData())?.[0]?.contentList;
    const partnersData = (await getPartnersData())?.[0]?.contentList;
    const cmsLogosResponse = await getLogos();
    const blogPosts = await getPostList();
    const testimonials = (await getTestimonials())?.[0]?.testimonialList;
    const logos = cmsLogosResponse[0]?.logos.map((logo) => ({
        url: logo.asset.url,
        id: logo.asset.assetId,
        lqip: logo.asset.metadata.lqip,
    }));

    return (
        <div className="relative">
            <Header color="cream"/>
            <HeroAnimation />
            <Hero />
            
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
            {ethosData ? (<div className={"relative"}>
                <Info
                    backgroundColor="#544F3D"
                    title="ETHOS"
                    sections={ethosData}
                />
            </div>) : null}
            {(testimonials?.length > 0 || logos?.length > 0) ? (
                <div className={"relative bg-[#EFEEE8] pt-10 px-10"}>
                    {testimonials?.length > 0 && <Testimonials testimonials={testimonials}/>}
                    {logos?.length > 0 && <Logos logos={logos} />}
                </div>
            ) : null}
            <FullCta
                overlay="#3A332E"
                link="/contact"
                displayText="FIND THE PATH TO FUTURE PROOF"
                backgroundImageSrc={HomeCta}
            />
            {servicesData ? (
                <Info
                    backgroundColor="#efeee8"
                    backgroundAnimation={"/services_bg.json"}
                    title="SERVICES"
                    sections={servicesData}
                    textLight={false}
                    minHeight={"100dvh"}
                />
                ) : null}
            {blogPosts?.length > 0 ? (
                <div className={"relative bg-black"}>
                    <ResourcesPreviewList background={"black"} posts={blogPosts}/>
                </div>
            ) : null}
            {partnersData ? (
                <div className={"relative bg-[#EFEEE8]"}>
                <Info
                    backgroundColor="#efeee8"
                    title="PARTNERS"
                    sections={partnersData}
                    textLight={false}
                    />
                </div>
            ) : null}
            <div className="relative bg-black">
                <Footer/>
            </div>
        </div>
    );
}
