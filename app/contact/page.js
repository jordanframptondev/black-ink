import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import ContactForm from "../components/contact-form";

export default function Contact() {
    return (
        <div className={"relative"}>
            <Header color="cream" />
            <div className={"text-[#EFEEE8]"}>
                <div
                    className={
                        "flex sticky top-0 justify-center w-screen h-screen bg-[#3A332E]"
                    }
                >
                    <Image
                        src="/images/about-bg.png"
                        alt="Background Image"
                        width={1920}
                        height={1080}
                        className={
                            "mt-auto w-full min-h-[550px] object-cover object-[35%] mb-[25px] sm:mb-[150px]"
                        }
                        priority={true}
                    />
                </div>

                <div
                    className={
                        "flex relative justify-center w-full min-h-screen bg-[#3A332E]"
                    }
                >
                    {/* I think for contact this div needs its own background */}
                    <div className={"flex border-t border-[#EFEEE8] mx-7"}>
                        <div className={"flex my-10"}>
                            <div
                                className={
                                    "flex flex-col-3 w-1/3 text-[18px] sm:text-[24px] font-ritma uppercase"
                                }
                            >
                                <h1>Contact</h1>
                            </div>
                            <div className={"flex flex-col w-2/3"}>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"relative"}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
