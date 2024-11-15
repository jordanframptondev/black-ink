"use client";
import { useState, forwardRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import "@/styles/contact.css";

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

/**
 * The Question/Answer section,
 */
function ContactFormSection({
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

/**
 * Text input for final step of contact form
 */
function StyledTextInput({
    label,
    onChange,
    showError = false,
    required = false,
    value,
}) {
    const handleInputChange = (e) => {
        let inputValue = e.target.value;

        if (label === "Phone") {
            // Remove all non-numeric characters
            inputValue = inputValue.replace(/\D/g, "");

            // Format the input as a phone number
            if (inputValue.length > 3 && inputValue.length <= 6) {
                inputValue = `(${inputValue.slice(0, 3)}) ${inputValue.slice(
                    3
                )}`;
            } else if (inputValue.length > 6) {
                inputValue = `(${inputValue.slice(0, 3)}) ${inputValue.slice(
                    3,
                    6
                )}-${inputValue.slice(6, 10)}`;
            }
        }

        onChange(inputValue);
    };

    return (
        <div
            className={`w-full mt-8 border-b ${
                showError
                    ? "border-red-500"
                    : "border-black md:border-[#EFEEE8]"
            } font-signifier flex items-center md:flex-col md:items-start`}
        >
            <label
                htmlFor={label}
                className={`mr-2 w-24 ${showError ? "text-red-500" : ""}`}
            >
                {label}
                {required ? "*" : ""}
            </label>
            <input
                type="text"
                id={label}
                name={label}
                className={`p-2 bg-transparent text-black md:text-[#EFEEE8] focus:outline-none flex-grow md:w-full ${
                    showError ? "border-red-500" : ""
                }`}
                required={required}
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}

/**
 * Entire component for the user input of contact information
 */
const ContactInfoSubmit = forwardRef((props, ref) => {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [titleError, setTitleError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const [sent, setSent] = useState(false);

    const resetInputs = () => {
        setName("");
        setTitle("");
        setEmail("");
        setPhone("");
        setNameError(false);
        setEmailError(false);
        setTitleError(false);
        setPhoneError(false);
    };

    const validateInputs = () => {
        let isValid = true;
        if (name === "" || !name) {
            setNameError(true);
            isValid = false;
        } else {
            setNameError(false);
        }
        if (email === "" || !/\S+@\S+\.\S+/.test(email) || !name) {
            setEmailError(true);
            isValid = false;
        } else {
            setEmailError(false);
        }
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const canSubmit = validateInputs();

        if (canSubmit) {
            props.onSubmit({ name, title, email, phone });
            setSent(true);
            resetInputs();
        }
    };

    const back = (e) => {
        resetInputs();
        setSent(false);
        props.resetForm();
    };

    return (
        <div ref={ref}>
            <div className="border-t border-black md:border-white w-full mt-8"></div>
            <form
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                onSubmit={handleSubmit}
            >
                <StyledTextInput
                    label="Name"
                    required={true}
                    value={name}
                    showError={nameError}
                    onChange={setName}
                />
                <StyledTextInput
                    label="Title"
                    value={title}
                    onChange={setTitle}
                />
                <StyledTextInput
                    label="Email"
                    required={true}
                    value={email}
                    showError={emailError}
                    onChange={setEmail}
                />
                <StyledTextInput
                    label="Phone"
                    value={phone}
                    onChange={setPhone}
                />
                <div
                    className="hidden md:block font-ritma uppercase cursor-pointer"
                    onClick={back}
                >
                    &#8592; Go Back
                </div>
                <div
                    className="mt-8 md:mt-0 md:text-right font-ritma uppercase cursor-pointer"
                    onClick={handleSubmit}
                    disabled={sent}
                >
                    {sent ? "Sent!" : <>&#8594; &nbsp; Send</>}
                </div>
            </form>
        </div>
    );
});
ContactInfoSubmit.displayName = "ContactInfoSubmit";
