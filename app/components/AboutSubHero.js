import { FadeIn } from "@/app/components/FadeIn";
import { PortableText } from "@portabletext/react";

export function AboutSubHero({introQuote, introQuoteComponents}) {
  return (
    <div id="sub-hero" className={"pt-[100px] sticky top-0 h-screen relative mt-[100vh]"}>
        <div className={"flex justify-center min-w-screen h-screen bg-[#3A332E]"}>
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
  )
}
