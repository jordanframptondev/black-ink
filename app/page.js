import HomeCta from "../public/images/home-cta.png";
import { FadeIn } from "./components/FadeIn";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomeHeroAnimation } from "./components/HomeHeroAnimation";
import { Info } from "./components/Info";
import { ResourcesPreviewList } from "./components/ResourcesPreviewList";
import { FullCta } from "./components/server-components/FullCta";
import { Testimonials } from "./components/Testimonials";
import { getCtaList, getInfoData } from "./utils/cms-service";

export default async function Home() {
    const ethosData = await getInfoData("Ethos");
    const servicesData = await getInfoData("Services");
    const partnersData = await getInfoData("Partners");
    const cmsLogosResponse = await getCtaList('Home Page Logos');
    const logos = cmsLogosResponse[0]?.logos.map(logo => ({url: logo.asset.url, id: logo.asset.assetId, lqip: logo.asset.metadata.lqip}));

    return (
        <div className="relative">
            <Header color="cream" />
            <HomeHeroAnimation />
            <div className="mt-screen bg-black px-10 pb-10 h-dvh flex flex-col justify-between">
                <FadeIn viewportMargin="100px 100px 100px">
                    <h3 className="text-center text-[#EFEEE8] text-[20px] md:text-[36px] border-t border-[#EFEEE8] pt-10 font-signifier">
                        There are <i>many futures, </i>
                        <br className="block md:hidden" />
                        Black Ink points you to <i>the right one.</i>
                    </h3>
                </FadeIn>
                <FadeIn viewportMargin="100px 100px 100px">
                    <h2 className="text-center text-[#EFEEE8] text-[20px] md:text-[36px] font-signifier">
                        We facilitate the{" "}
                        <i>selection, design, and implementation</i> of
                        strategic projects.
                    </h2>
                </FadeIn>
            </div>
            <div className={"min-w-[100dvh]"}>
                <Info
                    backgroundColor="#544F3D"
                    title="ETHOS"
                    sections={ethosData}
                />
            </div>
            <Testimonials logos={logos} />
            <FullCta
                overlay="#3A332E"
                link="/contact"
                displayText="FIND THE PATH TO FUTURE PROOF"
                backgroundImageSrc={HomeCta}
            />
            <Info
                backgroundColor="#efeee8"
                backgroundImage="/images/services-background.png"
                title="SERVICES"
                sections={servicesData}
                textLight={false}
            />
            <ResourcesPreviewList />
            <Info
                backgroundColor="#efeee8"
                title="PARTNERS"
                sections={partnersData}
                textLight={false}
            />
            <div className="text-[#EFEEE8]">
                <Footer />
            </div>
        </div>
    );
}
