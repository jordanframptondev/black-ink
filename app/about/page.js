import Careers from "@/app/components/Careers";
import { FadeIn } from "@/app/components/FadeIn";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Info } from "@/app/components/Info";
import { FullCta } from "@/app/components/server-components/FullCta";
import { Team } from "@/app/components/Team";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import AboutPageCTA from '../../public/images/home-cta.png';
import { getAboutQuote, getCareersQuote, getEthosData, getTeam } from "../utils/cms-service";

export default async function About() {
    const ethosData = (await getEthosData())?.[0]?.contentList;
    const teamResponse = await getTeam();
    const team = teamResponse.map(employee => ({
        _key: employee?._key,
        displayText: employee?.displayText,
        image: employee?.image?.asset?.url,
        lqip: employee?.image?.asset?.metadata?.lqip
    }));
    const introQuote = (await getAboutQuote())?.[0]?.quote;
    const careersQuote = (await getCareersQuote())?.[0]?.quote;
    const introQuoteComponents = {
        block: {
            h1: ({children}) => <h1 className="text-xl md:text-4xl font-signifier mb-10">{children}</h1>,
            h2: ({children}) => <h2 className="text-xl md:text-4xl font-signifier mb-10">{children}</h2>,
            h3: ({children}) => <h3 className="text-base md:text-2xl font-signifier">{children}</h3>,
            h4: ({children}) => <h4 className="text-base md:text-2xl font-signifier">{children}</h4>,
            normal: ({children}) => <p className="text-base md:text-2xl font-signifier">{children}</p>,
        }
    }

    return (
        <div className={"text-[#EFEEE8] bg-[#3A332E]"}>
            <Header color="cream"/>
            <div className={"fixed flex w-full min-h-dvh"}>
                <Image
                    src="/images/about-bg-dark.png"
                    alt="Background Image"
                    width={1920}
                    height={1080}
                    className={"mt-auto w-full min-h-[550px] object-cover object-[35%] mb-[25px] md:mb-[150px]"}
                    priority={true}
                />
            </div>
            <div className={"relative pt-[100dvh]"}>
                <div className={"flex justify-center min-w-screen min-h-[100dvh] bg-[#3A332E]"}>
                    <div className={"flex border-t border-[#EFEEE8] mx-10"}>
                        <div className={"flex flex-col md:flex-row my-10"}>
                            <div
                                className={"flex w-full mb-[80px] md:mb-0 md:w-1/3 text-xl md:text-2xl font-ritma"}>
                                <h1>ABOUT</h1>
                            </div>
                            <div className={"flex flex-col w-full md:w-2/3"}>
                                <FadeIn>
                                    <PortableText value={introQuote} components={introQuoteComponents}/>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"relative"}>
                <Info backgroundColor="#000000" textLight={true} title="ETHOS" sections={ethosData}/>
            </div>
            <div className={"relative"}>
                <Team team={team}/>
            </div>
            <div className={"relative bg-[#EFEEE8]"}>
                <Careers quote={careersQuote}/>
            </div>
            <div className={"relative"}>
                <FullCta backgroundImageSrc={AboutPageCTA} link="/contact" displayText="FIND THE PATH TO FUTURE PROOF"
                         overlay="#534f3c"/>
            </div>
            <div className={"relative"}>
                <Footer/>
            </div>
        </div>
    );
}
