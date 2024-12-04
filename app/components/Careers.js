import { FadeIn } from "@/app/components/FadeIn";
import "@/styles/careers.css";
import { PortableText } from '@portabletext/react';

export default function Careers({quote}) {
    const quoteComponents = {
        block: {
            normal: ({children}) => <p className="min-h-10">{children}</p>,
        }
    };

    return (
        <div className={"flex flex-col bg-[#EFEEE8] text-black w-full transition-all duration-1000 ease-in"}>
            <div className={"py-10 mx-10 mb-[75px] border-y border-y-black"}>
                <div className={"flex flex-col md:flex-row"}>
                    <div className={"mb-[80px] md:mb-0 w-full md:w-1/3 transition-all duration-1000 ease-in"}>
                        <h1 className={"text-lg md:text-2xl font-ritma"}>CAREERS</h1>
                    </div>
                    <div className={"w-full md:w-2/3"}>
                        <FadeIn>
                            <div className={"text-xl md:text-4xl font-signifier"}>
                                <PortableText value={quote} components={quoteComponents} />
                            </div>
                        </FadeIn>
                    </div>
                </div>
                {/*NO EXTERNAL CAREERS LINK FOR NOW*/}
                {/*<div*/}
                {/*    className={"w-full text-end mt-[100px] md:mt-[150px] text-[18px] md:text-[24px] font-ritma transition-all duration-1000 ease-in"}>*/}
                {/*    <Link href={"/"} className={"careers-link cursor-pointer w-fit pr-[30px]"}>*/}
                {/*        <FadeIn>*/}
                {/*            <span className="arrow">→</span>*/}
                {/*            <span className="careers-link-text">SEE OPEN POSITIONS</span>*/}
                {/*        </FadeIn>*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}
