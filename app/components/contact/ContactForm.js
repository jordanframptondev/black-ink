"use client";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import "@/styles/contact.css";
import ContactFormSection from "./ContactFormSection";
import ContactInfoSubmit from "./ContactInfoSubmit";

export default function ContactForm({ questions }) {
    const [openSection, setOpenSection] = useState(-1);

    const initialFormData = Array.from(
        { length: questions.length },
        (_, index) => ({
            [index]: undefined,
        })
    ).reduce((acc, curr) => ({ ...acc, ...curr }), {});

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        const initialFormData = Array.from(
            { length: questions.length },
            (_, index) => ({
                [index]: undefined,
            })
        ).reduce((acc, curr) => ({ ...acc, ...curr }), {});
        setFormData(initialFormData);
    }, [questions]);

    const setSelection = (index, answer) => {
        formData[index] = answer;

        setOpenSection(index + 1);
    };

    const shouldShowContactForm = () => {
        const allQuestionsHaveAnswers = Object.values(formData).every(
            (answer) => answer
        );
        return allQuestionsHaveAnswers;
    };

    const submitContact = () => {
        /**
         * Add logic here once we get mailchimp or other service
         */
    };

    const resetForm = () => {
        setOpenSection(-1);
        setFormData(initialFormData);
    };

    return (
        <div className="w-full">
            <h2 className="text-xl md:text-4xl font-extralight mb-8">
                <span className="font-signifierItalic">You made it!</span>
                <span className="font-signifier">
                    &mdash; answer some simple questions to get in touch
                </span>
            </h2>
            <Transition
                show={!shouldShowContactForm()}
                enter="transition-all duration-500 ease-in"
                enterFrom="opacity-0 "
                enterTo="opacity-100 "
                leave="transition-all duration-500 ease-out"
                leaveFrom="opacity-100 "
                leaveTo="opacity-0"
            >
                <div>
                    {questions.map((section, index) => (
                        <ContactFormSection
                            key={index}
                            question={section.question}
                            answers={section.answers}
                            selectedAnswer={formData[index]}
                            openSection={() => setOpenSection(index)}
                            isOpen={index === openSection}
                            isLast={index === questions.length - 1}
                            selectOption={(answer) =>
                                setSelection(index, answer)
                            }
                        />
                    ))}
                </div>
            </Transition>

            <Transition
                show={shouldShowContactForm()}
                enter="transition-all duration-500 ease-in"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            >
                <ContactInfoSubmit
                    onSubmit={submitContact}
                    resetForm={resetForm}
                />
            </Transition>
        </div>
    );
}
