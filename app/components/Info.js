"use client";
import { Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Info({ background, title, sections, textLight = true }) {
    return (
        <div className="h-screen w-screen px-6 py-12" style={{ background }}>
            <div>
                <h2 className={`text-3xl mb-12 ${textLight ? 'text-white' : 'text-black'}`}>{title}</h2>
                <div className="">
                    {sections.map((section, index) => (
                        <Section
                            key={index}
                            title={section.title}
                            description={section.description}
                            textLight={textLight}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Section({ title, description, textLight = true }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={`border-t ${textLight ? 'border-white' : 'border-black'} transition-all delay-300 duration-500 ${
                    isOpen ? "w-full" : "w-1/3"
                }`}
            ></div>
            <div className="grid grid-cols-3 w-full py-6">
                <div className="">
                    {/* Left Side: Title and Icon */}
                    <div
                        className={`flex items-center justify-between cursor-pointer w-full`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={`text-base leading-7 font-serif ${textLight ? 'text-white' : 'text-black'}`}>
                            {title}
                        </span>
                        <PlusIcon
                            aria-hidden="true"
                            className={`h-4 w-4 transition-transform duration-200 ${textLight ? 'text-white' : 'text-black'} ${
                                isOpen ? "transform rotate-45" : ""
                            }`}
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
                        <div className="pl-4">
                            <p className={`text-base leading-7 font-serif ${textLight ? 'text-white' : 'text-black'}`}>
                                {description}
                            </p>
                        </div>
                    </Transition>
                </div>
            </div>
            <div
                className={`border-t ${textLight ? 'border-white' : 'border-black'} transition-all duration-500 delay-300 -mb-[1px] ${
                    isOpen ? "w-full" : "w-1/3"
                }`}
            ></div>
        </>
    );
}
