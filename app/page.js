import IntroVideo from "@/app/components/IntroVideo";
import HomeCta from "@/public/images/home-cta.png";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { Logos } from "./components/Logos";
import { ResourcesPreviewList } from "./components/ResourcesPreviewList";
import { FullCta } from "./components/server-components/FullCta";
import { SubHero } from "./components/SubHero";
import { Testimonials } from "./components/Testimonials";
import {
    getEthosData,
    getLogos,
    getPartnersData,
    getPostList,
    getServicesData,
    getTestimonials
} from "./utils/cms-service";
import { FadeIn } from "@/app/components/FadeIn";

export const metadata = {
    title: 'Home'
};

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
        <div className="">
            <IntroVideo/>
            <Header color="cream"/>
            <Hero/>
            <SubHero/>
            <div className="relative z-50">
                <div className="sticky top-[250px] bg-black">
                    <FadeIn viewportMargin="100px 100px 100px">
                        <h2 className="mt-auto text-center text-[#EFEEE8] text-xl md:text-4xl pb-10 font-signifier">
                            We facilitate the{" "}
                            <span className="font-signifierItalic">selection, design, and implementation</span>{" "}of
                            strategic projects.
                        </h2>
                    </FadeIn>
                </div>
                {ethosData ? (<div className="relative">
                    <Info
                        backgroundColor="#544F3D"
                        title="ETHOS"
                        sections={ethosData}
                    />
                </div>) : null}
                {(testimonials?.length > 0 || logos?.length > 0) ? (
                    <div className={"relative bg-[#EFEEE8] pt-10 px-10"}>
                        {testimonials?.length > 0 && <Testimonials testimonials={testimonials}/>}
                        {logos?.length > 0 && <Logos logos={logos}/>}
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
                        backgroundAnimation={"/services_bg.mp4"}
                        title="SERVICES"
                        sections={servicesData}
                        textLight={false}
                        minHeight={"100vh"}
                    />) : null}
                {blogPosts?.length > 0 ? (
                    <div className={"relative bg-black"}>
                        <ResourcesPreviewList background={"black"} posts={blogPosts}/>
                    </div>
                ) : null}
                {partnersData ? (
                    <Info
                        backgroundColor="#efeee8"
                        title="PARTNERS"
                        sections={partnersData}
                        textLight={false}
                    />
                ) : null}
            </div>
            <div id="footer" className="relative bg-black h-screen">
                <Footer/>
            </div>
        </div>
    );
}
