import HomeCta from "@/public/images/home-cta.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
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
import IntroVideo from "@/app/components/IntroVideo";

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
            <div className="fixed top-0 flex w-full min-h-screen flex-col bg-black">
                <h1 className="text-white text-lg lg:text-2xl white font-ritma uppercase pb-11 mt-auto mx-auto">
                    into the black
                </h1>
                <ChevronDownIcon className="w-6 h-6 text-white mx-auto mb-8 animate-bounce-slow"/>
            </div>
            <SubHero/>
            <div className="relative z-50">
                {ethosData ? (<div className={"relative mt-[200vh]"}>
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
