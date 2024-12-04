"use client";

import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import ContactForm from "../components/contact/ContactForm";
import ContactBackground from "../../public/images/group-4530.png";
import ContactBackgroundLight from "../../public/images/Group-4530-Light.png";
import { useEffect, useState } from "react";
import { getContactQuestions } from "../utils/cms-service";

export default function Contact() {
    const [headerColor, setHeaderColor] = useState("cream");
    const [contactQuestions, setContactQuestions] = useState([]);
    useEffect(() => {
        const handleResize = () => {
            setHeaderColor(window.innerWidth >= 768 ? "cream" : "black");
        };

        getContactQuestions().then((questions) => {
            const orderedQuestions = questions
                .map((q) => {
                    return {
                        question: q.question,
                        answers: q.answerOptions,
                        order: q.order,
                    };
                })
                .sort((a, b) => a.order - b.order);
            setContactQuestions(orderedQuestions);
        });

        handleResize(); // Set initial color
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <Header color={headerColor}/>

            <div className="absolute h-dvh w-dvw top-0 left-0 bg-[#EFEEE8] md:bg-[#544F3D] -z-50">
                <Image
                    src={ContactBackground}
                    quality={100}
                    placeholder="blur"
                    sizes="100vw"
                    alt="Black Ink"
                    className="block md:hidden w-full h-full object-cover opacity-30 md:opacity-100"
                    priority={true}
                />
                <Image
                    src={ContactBackgroundLight}
                    quality={100}
                    placeholder="blur"
                    sizes="100vw"
                    alt="Black Ink"
                    className="hidden md:block h-full object-cover opacity-30 md:opacity-100"
                    priority={true}
                />
            </div>

            <div className="h-dvh px-10 pb-10 text-black md:text-[#EFEEE8]">
                <div className="flex flex-col md:flex-row pt-[140px]">
                    <div className="hidden md:block md:w-1/3 md:max-w-[400px]">
                        <h2 className="text-white font-ritma text-2xl">
                            CONTACT
                        </h2>
                    </div>
                    <div className="w-full md:w-2/3">
                        <div
                            className={`transition-all duration-500 ease-in ${
                                contactQuestions.length > 0
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                            }`}
                        >
                            {contactQuestions.length > 0 && (
                                <ContactForm questions={contactQuestions}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative text-white">
                <Footer/>
            </div>
        </div>
    );
}
