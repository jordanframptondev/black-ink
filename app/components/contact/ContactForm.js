"use client";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import "@/styles/contact.css";
import ContactFormSection from "./ContactFormSection";
import ContactInfoSubmit from "./ContactInfoSubmit";

export default function ContactForm({questions}) {
    const [openSection, setOpenSection] = useState(-1);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const initialFormData = Array.from(
        {length: questions.length},
        (_, index) => ({
            [index]: undefined,
        })
    ).reduce((acc, curr) => ({...acc, ...curr}), {});

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        const initialFormData = Array.from(
            {length: questions.length},
            (_, index) => ({
                [index]: undefined,
            })
        ).reduce((acc, curr) => ({...acc, ...curr}), {});
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

    const submitContact = ({name, title, email, phone}) => {
        const requestData = new FormData();
        requestData.append("u", "91495a056369a92889975eb2c");
        requestData.append("id", "b4d550dd12");
        requestData.append("QUESTIONS", `${questions.map((q, i) => `${q.question}: ${formData[i]}`).join(". ")}`);
        requestData.append("NAME", name);
        requestData.append("TITLE", title);
        requestData.append("EMAIL", email);
        requestData.append("PHONE", phone);
        setFormSubmitted(true);
        fetch("https://blackinkstrategy.us9.list-manage.com/subscribe/post", {
            method: "POST",
            body: requestData,
            mode: "no-cors"
        })
            .then(response => {
                // Since the response type is opaque, you won't be able to access the response data
                console.log("Request sent successfully");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const resetForm = () => {
        setOpenSection(-1);
        setFormData(initialFormData);
        setFormSubmitted(false);
    };

    return (
        <div className="w-full">
            <h2 className="text-xl md:text-4xl font-extralight mb-8">
                {
                    !formSubmitted &&
                    <>
                        <span className="font-signifierItalic">You made it!</span>
                        <span className="font-signifier">&mdash; answer some simple questions to get in touch</span>
                    </>
                }
                {
                    formSubmitted &&
                    <>
                        <span className="font-signifierItalic">Thanks for reaching out!</span>
                        <span
                            className="font-signifier">&nbsp;&nbsp;We&#39;ll review your message and be in touch soon.</span>
                    </>
                }
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
