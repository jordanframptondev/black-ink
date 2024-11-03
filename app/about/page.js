import Image from "next/image";
import {Info} from "@/app/components/Info";
import {FullCta} from "@/app/components/server-components/FullCta";
import {Footer} from "@/app/components/Footer";
import {Header} from "@/app/components/Header";
import {Team} from "@/app/components/Team";

export default async function About() {

    const sampleSections = [
        {
            title: "People First- Always",
            description: `At Black Ink, we recognize that every organization is comprised of individuals with unique perspectives, experiences, and motivations. By prioritizing people over process, we foster a collaborative environment that honors the dedication and expertise of our clients' teams and empowers them to unlock their own potential. Through this approach, we uncover solutions that are tailored to the specific needs and aspirations of each organization, rather than imposing generic fixes that neglect the human element.`,
        },
        {
            title: "In | On - The Business",
            description: `We believe that the most effective solutions are those that are deeply ingrained in the fabric of an organization, rather than superficially imposed from the outside. By immersing ourselves in the inner workings of our clients' businesses, we develop a nuanced understanding of their unique challenges and opportunities, and co-create solutions that are tailored to their specific needs. This inside-out approach enables us to drive meaningful, lasting impact that are intuitive, sustainable, and aligned with the organization's long-term vision.`,
        },
        {
            title: "Short-Term Win / Long-Term Results",
            description: `Our approach is designed to deliver tangible, near-term benefits that demonstrate the value of our partnership, while simultaneously laying the groundwork for long-term success. By focusing on incremental wins that align with our clients' strategic objectives, we build momentum, establish trust, and create a foundation for sustained growth and transformation. This balanced approach enables our clients to realize immediate returns on their investment, while also positioning themselves for enduring success in an ever-evolving business landscape.`,
        },
        {
            title: "Future Proof",
            description: `The future of business is being rewritten before our eyes. At Black Ink, we recognize that future-proofing is no longer a nicety, but a necessity. We've made it our mission to help our clients prepare for the unknown, to anticipate the trends that will shape their industries, and to build the resilience and agility needed to thrive in a world that's increasingly complex and uncertain. We're committed to helping our clients stay ahead of the curve, and to emerge stronger, more adaptable, and more resilient in the face of an uncertain future.`,
        },
    ];

    return (
        <div className={"relative"}>
            <Header color="cream"/>
            <div className={"text-[#EFEEE8] select-none"}>
                <div className={"flex sticky top-0 justify-center w-screen h-screen bg-[#3A332E]"}>
                    <Image
                        src="/images/about-bg.png"
                        alt="Background Image"
                        width={1920}
                        height={1080}
                        className={"mt-auto w-full min-h-[550px] object-cover object-[35%] mb-[25px] sm:mb-[150px]"}
                        priority={true}
                    />
                </div>
                <div className={"flex relative justify-center min-w-screen min-h-screen bg-[#3A332E]"}>
                    <div className={"flex border-t border-[#EFEEE8] mx-7"}>
                        <div className={"flex my-10"}>
                            <div className={"flex w-1/3 text-[18px] sm:text-[24px] font-ritma"}>
                                <h1>ABOUT</h1>
                            </div>
                            <div className={"flex flex-col w-2/3"}>
                                <p className={"text-[20px] sm:text-[36px] font-signifier mb-10"}>In the pursuit of
                                    growth
                                    and innovation,
                                    organizations often find themselves navigating
                                    complex
                                    challenges that demand precision, expertise, and foresight.</p>
                                <p className={"text-[16px] sm:text-[24px] font-signifierItalic"}>At Black Ink, we’ve
                                    assembled a team of
                                    seasoned
                                    professionals who have spent decades honing
                                    their craft in the upper echelons of global industry. Our collective experience is a
                                    testament
                                    to the power of collaboration and the impact that can be achieved when talented
                                    individuals
                                    come
                                    together with a shared vision. What drives us is a passion for empowering
                                    organizations
                                    to
                                    reach
                                    their full potential. We believe that the most effective solutions are born from a
                                    deep
                                    understanding of the intricacies of business, combined with a relentless pursuit of
                                    excellence.
                                    Our approach is built on a foundation of pragmatism, creativity, and a commitment to
                                    delivering
                                    tangible results that stand the test of time. By combining expertise, instinct, and
                                    a
                                    keen
                                    eye
                                    for opportunity, we help organizations transform their aspirations into reality.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"relative"}>
                    <Info background="#000000" textLight={true} title="ETHOS" sections={sampleSections}/>
                </div>
                <div className={"relative"}>
                    <Team/>
                </div>
                <div className={"relative"}>
                    <FullCta/>
                </div>
                <div className={"relative"}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
