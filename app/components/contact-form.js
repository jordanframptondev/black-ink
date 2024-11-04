"use client";
import { useState, forwardRef } from "react";
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
            <h2 className="font-signifierItalic text-4xl font-extralight mb-8">
                You made it! &mdash; answer some simple questions to get in
                touch
            </h2>
            <Transition
                show={openSection < contactFormData.length}
                enter="transition-all duration-500 ease-in"
                enterFrom="opacity-0 "
                enterTo="opacity-100 "
                leave="transition-all duration-500 ease-out"
                leaveFrom="opacity-100 "
                leaveTo="opacity-0"
            >
                <div>
                    {contactFormData.map((section, index) => (
                        <ContactFormSection
                            key={index}
                            question={section.question}
                            answers={section.answers}
                            isOpen={index === openSection}
                            selectOption={(answer) =>
                                setSelection(index, answer)
                            }
                        />
                    ))}
                </div>
            </Transition>

            <Transition
                show={openSection >= contactFormData.length}
                enter="transition-all duration-500 ease-in"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            >
                <ContactInfoSubmit onSubmit={submitContact} />
            </Transition>
        </div>
    );
}

function ContactFormSection({ question, answers, isOpen, selectOption }) {
    return (
        <div>
            <div
                className={`border-t border-white transition-all delay-300 duration-500 ${
                    isOpen ? "w-full" : "w-1/3"
                }`}
            ></div>
            <div className="grid grid-cols-3 w-full py-6">
                <div>
                    <h3
                        className={`${
                            isOpen ? "font-signifierItalic" : "font-signifier"
                        }`}
                    >
                        {question}
                    </h3>
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
                                    className="relative cursor-pointer  transition-colors duration-300"
                                >
                                    <span className="hover:before:content-['\2192']  hover:before:mr-2 font-signifier hover:font-signifierItalic">
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
        </div>
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

const ContactInfoSubmit = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <div className="border-t border-white w-full"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>Name</div>
                <div>Title</div>
                <div>Email</div>
                <div>Phone</div>
            </div>
        </div>
    );
});
ContactInfoSubmit.displayName = "ContactInfoSubmit";
// Display name needed for component in same file
