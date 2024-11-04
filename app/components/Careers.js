import Link from "next/link";
import "@/styles/careers.css"

export default function Careers() {
    return (
        <div className={"flex flex-col bg-[#EFEEE8] text-black w-full transition-all duration-1000 ease-in"}>
            <div className={"py-10 mx-10 mb-[75px] border-y border-y-black"}>
                <div className={"flex"}>
                    <div className={"w-1/3"}>
                        <h1 className={"text-[24px] font-ritma"}>CAREERS</h1>
                    </div>
                    <div className={"w-2/3"}>
                        <p className={"text-[32px] font-signifier"}>“At Black Ink, we’re building a community of
                            seasoned experts and
                            passionate innovators who are
                            redefining the art of transformation, and we’re looking for talented individuals who share
                            our
                            passion for empowering organizations to thrive in a rapidly changing world.”</p>
                    </div>
                </div>
                <div className={"w-full text-end mt-[150px] text-[24px] font-ritma"}>
                    <Link href={"/"} className={"careers-link cursor-pointer w-fit pr-[30px]"}>
                        <span className="arrow">→</span> <span className="careers-link-text">SEE OPEN POSITIONS</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
