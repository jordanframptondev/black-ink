"use client";
import { useState, forwardRef } from "react";
import { Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import "@/styles/contact.css";

const contactFormData = [
    {
        question: "We need",
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

    const submitContact = () => {
        /**
         * Add logic here once we get mailchimp or other service
         */
    };

    const resetForm = () => {
        setOpenSection(0);
        setFormData(initialFormData);
    };

    return (
        <div className="w-full">
            <h2 className="text-xl lg:text-4xl font-extralight mb-8">
                <span className="font-signifierItalic">You made it!</span>
                <span className="font-signifier">
                    &mdash; answer some simple questions to get in touch
                </span>
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
                            isLast={index === contactFormData.length - 1}
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
                <ContactInfoSubmit
                    onSubmit={submitContact}
                    resetForm={resetForm}
                />
            </Transition>
        </div>
    );
}

function ContactFormSection({
    question,
    answers,
    isOpen,
    isLast,
    selectOption,
}) {
    return (
        <div>
            <div
                className={`hidden lg:block border-t border-black lg:border-white transition-all delay-300 duration-500 ${
                    isOpen ? "w-full" : "w-1/3"
                }`}
            ></div>
            <div
                className={`grid grid-cols-3 w-full py-6 ${
                    isLast ? "border-y" : "border-t"
                } border-black lg:border-0`}
            >
                <div className="flex justify-between col-span-3 lg:col-span-1">
                    <h3
                        className={`${
                            isOpen
                                ? "font-signifier lg:font-signifierItalic"
                                : "font-signifier"
                        } text-xl mb-8 lg:mb-2 `}
                    >
                        {question}
                    </h3>
                    <span className="block lg:hidden">
                        <PlusIcon
                            aria-hidden="true"
                            className={`h-4 w-4 transition-transform duration-200 ${
                                isOpen ? "transform rotate-45" : ""
                            }`}
                        />
                    </span>
                </div>
                <div className="col-span-3 lg:col-span-2">
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
                                    className="relative cursor-pointer py-2 lg:py-0 contact-option transition-all duration-500"
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
            <div
                className={`hidden lg:block border-t border-black lg:border-white transition-all duration-500 delay-300 -mb-[1px] ${
                    isOpen ? "w-full" : "w-1/3"
                }`}
            ></div>
        </div>
    );
}

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
                    : "border-black lg:border-[#EFEEE8]"
            } font-signifier flex items-center lg:flex-col lg:items-start`}
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
                className={`p-2 bg-transparent text-black lg:text-[#EFEEE8] focus:outline-none flex-grow lg:w-full ${
                    showError ? "border-red-500" : ""
                }`}
                required={required}
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}

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
            <div className="border-t border-black lg:border-white w-full mt-8"></div>
            <form
                className="grid grid-cols-1 lg:grid-cols-2 gap-4"
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
                    className="hidden lg:block font-ritma uppercase cursor-pointer"
                    onClick={back}
                >
                    &#8592; Go Back
                </div>
                <div
                    className="mt-8 lg:mt-0 lg:text-right font-ritma uppercase cursor-pointer"
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
