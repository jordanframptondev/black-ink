"use client";

import { Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function ContactFormSection({
    question,
    answers,
    openSection,
    isOpen,
    isLast,
    selectedAnswer,
    selectOption,
}) {
    return (
        <div>
            <div
                className={`hidden md:block border-t border-black md:border-white transition-all delay-300 duration-500 ${
                    isOpen ? "w-full" : "w-1/3"
                }`}
            ></div>
            <div
                className={`grid grid-cols-3 w-full py-6 ${
                    isLast ? "border-y" : "border-t"
                } border-black md:border-0`}
            >
                <div
                    onClick={openSection}
                    className="flex justify-between col-span-3 md:col-span-1 cursor-pointer"
                >
                    <h3
                        className={`${
                            isOpen
                                ? "font-signifier md:font-signifierItalic mb-8"
                                : "font-signifier"
                        } text-xl `}
                    >
                        {question}
                    </h3>
                    <span
                        className={`flex items-center align-middle transition-all h-full ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                    >
                        <PlusIcon
                            aria-hidden="true"
                            className={`h-4 w-4 transition-transform duration-200 ${
                                isOpen ? "transform rotate-45" : ""
                            }`}
                        />
                    </span>
                </div>
                <div className="col-span-3 md:col-span-2">
                    <div
                        className={`transition-all duration-500 overflow-hidden ${
                            isOpen ? "max-h-[500px]" : "max-h-[2rem]"
                        }`}
                    >
                        <div className="relative h-full">
                            <Transition
                                show={!isOpen && selectedAnswer}
                                enter="transition-all duration-500 ease-in delay-300"
                                enterFrom="opacity-0 translate-y-4"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition-all duration-500 ease-out"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-4"
                            >
                                <div className="font-signifier text-right">
                                    {selectedAnswer}
                                </div>
                            </Transition>

                            <Transition
                                show={isOpen}
                                enter="transition-all duration-500 ease-in"
                                enterFrom="opacity-0 translate-y-4"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition-all duration-500 ease-out"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-4"
                            >
                                <div>
                                    {answers.map((answer, index) => (
                                        <div
                                            onClick={() => selectOption(answer)}
                                            key={index}
                                            className="relative cursor-pointer py-2 md:py-0 contact-option transition-all duration-500"
                                        >
                                            <span className="arrow">→</span>
                                            <span className="font-signifier option-text">
                                                {answer}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`hidden md:block border-t border-black md:border-white transition-all duration-500 delay-300 -mb-[1px] ${
                    isOpen ? "w-full" : "w-1/3"
                }`}
            ></div>
        </div>
    );
}
