import Careers from "@/app/components/Careers";
import { FadeIn } from "@/app/components/FadeIn";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Info } from "@/app/components/Info";
import { FullCta } from "@/app/components/server-components/FullCta";
import { Team } from "@/app/components/Team";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import AboutPageCTA from '../../public/images/home-cta.png';
import { getAboutQuote, getCareersQuote, getEthosData, getTeam } from "../utils/cms-service";

export const metadata = {
  title: 'About'
};

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
            <div className="fixed flex w-full min-h-screen flex flex-col justify-end">
                <Image
                    src="/images/about-bg-dark.png"
                    alt="Background Image"
                    width={1920}
                    height={1080}
                    className={"mt-auto w-full min-h-[550px] object-cover object-[35%] mb-[25px] md:mb-[150px]"}
                    priority={true}
                />
                <ChevronDownIcon className="z-[99] w-6 h-6 text-white mx-auto mb-8 animate-bounce-slow" />
            </div>
            <div className={"relative pt-[100vh]"}>
                <div className={"flex justify-center min-w-screen min-h-screen bg-[#3A332E]"}>
                    <div className={"flex border-t border-[#EFEEE8] mx-10"}>
                        <div className={"flex flex-col md:flex-row my-10"}>
                            <div
                                className={"flex w-full mb-[80px] md:mb-0 md:w-1/3 text-xl md:text-2xl font-ritma"}>
                                <h1>ABOUT</h1>
                            </div>
                            {introQuote ? (
                                <div className={"flex flex-col w-full md:w-2/3"}>
                                    <FadeIn>
                                        <PortableText value={introQuote} components={introQuoteComponents}/>
                                    </FadeIn>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            {ethosData ? (
                <div className={"relative"}>
                    <Info backgroundColor="#000000" textLight={true} title="ETHOS" sections={ethosData}/>
                </div>
            ) : null}
            {team?.length > 0 ? (
                <div className={"relative"}>
                    <Team team={team}/>
                </div>
            ) : null}
            {careersQuote ? (
                <div className={"relative bg-[#EFEEE8]"}>
                    <Careers quote={careersQuote}/>
                </div>
            ) : null}
            <div className={"relative z-50"}>
                <FullCta backgroundImageSrc={AboutPageCTA} link="/contact" displayText="FIND THE PATH TO FUTURE PROOF"
                         overlay="#534f3c"/>
            </div>
            <div id="footer" className={"relative text-white bg-black h-screen"}>
                <Footer />
            </div>
        </div>
    );
}
