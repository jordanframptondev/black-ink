"use client";

import { Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { urlFor } from "../utils/cms-service";
import Lottie from "react-lottie-player";

export function Info({
                         backgroundColor,
                         backgroundImage,
                         backgroundAnimation,
                         title,
                         sections,
                         textLight = true,
                         minHeight = "50vh",
                     }) {

    const [isClientLoaded, setIsClientLoaded] = useState(false);

    useEffect(() => {
        setIsClientLoaded(true);
    }, []);

    if (sections.length === 0) {
        return null;
    }

    return (
        <div
            className="relative w-screen pt-10 px-10 pb-20"
            style={{
                background: backgroundColor,
                backgroundImage: backgroundImage
                    ? `url(${backgroundImage})`
                    : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: minHeight
            }}
        >
            {isClientLoaded && backgroundAnimation && (
                <div className="absolute top-0 left-0 w-full h-full">
                    <Lottie loop play path={backgroundAnimation}
                            style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                </div>
            )}
            <div className="relative">
                <h2
                    className={`font-ritma text-2xl mb-20 lg:mb-12 ${
                        textLight ? "text-white" : "text-black"
                    }`}
                >
                    {title}
                </h2>
                <FadeInStagger faster>
                    {sections.map((section, index) => (
                        <FadeIn key={index}>
                            <Section
                                title={section.title}
                                description={
                                    section.description || section.content
                                }
                                textLight={textLight}
                                image={section.image}
                            />
                        </FadeIn>
                    ))}
                </FadeInStagger>
            </div>
        </div>
    );
}

function Section({title, description, image = null, textLight = true}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={`border-t ${
                    textLight ? "border-white" : "border-black"
                } transition-all delay-300 duration-500 ${
                    isOpen ? "w-full" : "lg:w-1/3"
                }`}
            ></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full py-10 lg:py-6">
                <div className="">
                    {/* Left Side: Title and Icon */}
                    <div
                        className={`flex items-center justify-between cursor-pointer w-full`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span
                            className={`text-xl lg:text-base leading-7 font-signifier ${
                                textLight ? "text-[#EFEEE8]" : "text-black"
                            }`}
                        >
                            {title}
                        </span>
                        <PlusIcon
                            aria-hidden="true"
                            className={`h-5 w-5 transition-transform duration-200 ${
                                textLight ? "text-[#EFEEE8]" : "text-black"
                            } ${isOpen ? "transform rotate-45" : ""}`}
                        />
                    </div>
                </div>

                <div className="col-span-2">
                    {/* Right Side: Description */}
                    <Transition
                        show={isOpen}
                        enter="transition-all duration-500 ease-in"
                        enterFrom="opacity-0 max-h-0"
                        enterTo="opacity-100 max-h-[500px]"
                        leave="transition-all duration-500 ease-out"
                        leaveFrom="opacity-100 max-h-[500px]"
                        leaveTo="opacity-0 max-h-0"
                    >
                        <div className="lg:flex justify-between pt-10 lg:pl-4">
                            <div className={`${image ? "lg:w-1/2" : "w-full"}`}>
                                <p
                                    className={`text-base leading-7 font-signifier ${
                                        textLight
                                            ? "text-[#EFEEE8]"
                                            : "text-black"
                                    }`}
                                >
                                    {description}
                                </p>
                            </div>
                            {image ? (
                                <div className="lg:w-1/2 pt-5">
                                    <Image
                                        src={urlFor(image).url()}
                                        alt={description}
                                        width={0}
                                        height={0}
                                        sizes="100%"
                                        className="lg:ml-4 w-full h-auto"
                                    />
                                </div>
                            ) : null}
                        </div>
                    </Transition>
                </div>
            </div>
            <div
                className={`border-t ${
                    textLight ? "border-[#EFEEE8]" : "border-black"
                } transition-all duration-500 delay-300 -mb-[1px] ${
                    isOpen ? "w-full" : "lg:w-1/3"
                }`}
            ></div>
        </>
    );
}
