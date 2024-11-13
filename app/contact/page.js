"use client";

import Image from "next/image";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import ContactForm from "../components/contact-form";
import ContactBackground from "../../public/images/group-4530.png";
import ContactBackgroundLight from "../../public/images/Group-4530-Light.png";
import {useEffect, useState} from "react";

export default function Contact() {
    const [headerColor, setHeaderColor] = useState('cream');

    useEffect(() => {
        const handleResize = () => {
            setHeaderColor(window.innerWidth >= 768 ? 'cream' : 'black');
        };

        handleResize(); // Set initial color
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="h-dvh">
            <Header color={headerColor}/>

            <div className="absolute h-dvh w-dvw top-0 left-0 bg-[#EFEEE8] md:bg-[#544F3D] -z-50">
                <Image
                    src={ContactBackground}
                    quality={100}
                    placeholder="blur"
                    sizes="100vw"
                    alt="Black Ink"
                    className="block md:hidden w-full h-full object-cover opacity-30 md:opacity-100"
                />
                <Image
                    src={ContactBackgroundLight}
                    quality={100}
                    placeholder="blur"
                    sizes="100vw"
                    alt="Black Ink"
                    className="hidden md:block h-full object-cover opacity-30 md:opacity-100"
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
                        <ContactForm/>
                    </div>
                </div>
            </div>

            <div className="relative text-white">
                <Footer/>
            </div>
        </div>
    );
}
