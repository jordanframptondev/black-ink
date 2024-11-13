import Link from "next/link";
import "@/styles/careers.css"
import {FadeIn} from "@/app/components/FadeIn";

export default function Careers() {
    return (
        <div className={"flex flex-col bg-[#EFEEE8] text-black w-full transition-all duration-1000 ease-in"}>
            <div className={"py-10 mx-10 mb-[75px] border-y border-y-black"}>
                <div className={"flex flex-col md:flex-row"}>
                    <div className={"mb-[80px] md:mb-0 w-full md:w-1/3 transition-all duration-1000 ease-in"}>
                        <h1 className={"text-[18px] md:text-[24px] font-ritma"}>CAREERS</h1>
                    </div>
                    <div className={"w-full md:w-2/3"}>
                        <FadeIn>
                            <p className={"text-[20px] md:text-[32px] font-signifier"}>“At Black Ink, we’re building a
                                community of
                                seasoned experts and
                                passionate innovators who are
                                redefining the art of transformation, and we’re looking for talented individuals who
                                share
                                our
                                passion for empowering organizations to thrive in a rapidly changing world.”</p>
                        </FadeIn>
                    </div>
                </div>
                <div
                    className={"w-full text-end mt-[100px] md:mt-[150px] text-[18px] md:text-[24px] font-ritma transition-all duration-1000 ease-in"}>
                    <Link href={"/"} className={"careers-link cursor-pointer w-fit pr-[30px]"}>
                        <FadeIn>
                            <span className="arrow">→</span>
                            <span className="careers-link-text">SEE OPEN POSITIONS</span>
                        </FadeIn>
                    </Link>
                </div>
            </div>
        </div>
    );
}
