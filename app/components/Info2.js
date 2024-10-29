"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import { useState } from "react";

export default function Info2({ background, title, sections }) {
    return (
        <div className="h-screen w-screen px-6 py-12" style={{ background }}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-white text-3xl mb-12">{title}</h2>
                <div className="">
                    {sections.map((section, index) => (
                        <Section
                            key={index}
                            title={section.title}
                            description={section.description}
                            last={index + 1 === sections.length}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Section({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={`border-t border-whitetransition-all delay-300 duration-500 ${
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
                        <span className="text-base leading-7 font-serif text-white">
                            {title}
                        </span>
                        <PlusIcon
                            aria-hidden="true"
                            className={`h-4 w-4 text-white transition-transform duration-200 ${
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
                            <p className="text-base leading-7 text-white font-serif">
                                {description}
                            </p>
                        </div>
                    </Transition>
                </div>
            </div>
            <div
                className={`border-t border-white transition-all duration-500 delay-300 -mb-[1px] ${
                    isOpen ? "w-full" : "w-1/3"
                }`}
            ></div>
        </>
    );
}
