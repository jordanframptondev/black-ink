import Careers from "@/app/components/Careers";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Info } from "@/app/components/Info";
import { FullCta } from "@/app/components/server-components/FullCta";
import { Team } from "@/app/components/Team";
import AboutPageCTA from '../../public/images/home-cta.png';
import { AboutHero } from "../components/AboutHero";
import { AboutSubHero } from "../components/AboutSubHero";
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
            <AboutHero />
            <AboutSubHero introQuote={introQuote} introQuoteComponents={introQuoteComponents} />
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
                <FullCta backgroundImageSrc={AboutPageCTA} link="/contact"
                            displayText="FIND THE PATH TO FUTURE PROOF"
                            overlay="#534f3c"/>
            </div>
            <div id="footer" className={"relative text-white bg-black h-screen"}>
                <Footer/>
            </div>
        </div>
    );
}
