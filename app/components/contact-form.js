"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const contactFormData = [
    {
        question: "We need:",
        answers: [
            "Product Life Cycle Management (PLM)",
            "Planning",
            "Digital Product Creation",
            "Business Analytics",
            "Change Management & Organizational Readiness",
            "General Consultation",
            "Other",
        ],
    },
    {
        question: "Our timeline",
        answers: ["Immediate", "Next Quarter", "In the Future", "Other"],
    },
    {
        question: "Organization Size",
        answers: ["1-50", "51-100", "101-500", "501-1000", "1001+"],
    },
];
export default function ContactForm({}) {
    const [openSection, setOpenSection] = useState(0);

    const initialFormData = Array.from(
        { length: contactFormData.length },
        (_, index) => ({
            [index]: undefined,
        })
    ).reduce((acc, curr) => ({ ...acc, ...curr }), {});

    const [formData, setFormData] = useState(initialFormData);

    const setSelection = (index, answer) => {
        formData[index] = answer;

        setOpenSection(index + 1);
    };

    const submitContact = () => {};

    return (
        <div className="w-full">
            <h2>
                You made it! -- answer some simple questions to get in touch
            </h2>
            {openSection < contactFormData.length ? (
                contactFormData.map((section, index) => (
                    <ContactFormSection
                        key={index}
                        question={section.question}
                        answers={section.answers}
                        isOpen={index === openSection}
                        selectOption={(answer) => setSelection(index, answer)}
                    />
                ))
            ) : (
                <ContactInfoSubmit onSubmit={submitContact} />
            )}
        </div>
    );
}

function ContactFormSection({ question, answers, isOpen, selectOption }) {
    return (
        <>
            <div
                className={`border-t border-whitetransition-all delay-300 duration-500 ${
                    isOpen ? "w-full" : "w-1/3"
                }`}
            ></div>
            <div className="grid grid-cols-3 w-full py-6">
                <div>
                    <h3>{question}</h3>
                </div>
                <div className="col-span-2">
                    <Transition
                        show={isOpen}
                        enter="transition-all duration-500 ease-in"
                        enterFrom="opacity-0 max-h-0"
                        enterTo="opacity-100 max-h-[500px]"
                        leave="transition-all duration-500 ease-out"
                        leaveFrom="opacity-100 max-h-[500px]"
                        leaveTo="opacity-0 max-h-0"
                    >
                        <div>
                            {answers.map((answer, index) => (
                                <div
                                    onClick={() => selectOption(answer)}
                                    key={index}
                                    className="relative cursor-pointer hover:text-white transition-colors duration-300"
                                >
                                    <span className="hover:before:content-['\2192'] hover:before:text-white hover:before:mr-2">
                                        {answer}
                                    </span>
                                </div>
                            ))}
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

function ContactFormQuestion({ question, answer, selectionOption }) {
    <div>
        {answers.map((answer, index) => (
            <div
                onClick={() => selectOption(answer)}
                key={index}
                className="relative cursor-pointer hover:text-white transition-colors duration-300"
            >
                <span className="hover:before:content-['\2192'] hover:before:text-white hover:before:mr-2">
                    {answer}
                </span>
            </div>
        ))}
    </div>;
}

function ContactInfoSubmit({ onSubmit }) {
    return (
        <>
            <div className="border-t border-whitew-full"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>Name</div>
                <div>Title</div>
                <div>Email</div>
                <div>Phone</div>
            </div>
        </>
    );
}
