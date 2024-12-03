import { forwardRef, useState } from "react";
import StyledTextInput from "./StyledTextInput";

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
            props.onSubmit({name, title, email, phone});
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
                className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${sent ? "mt-10" : "mt-0"}`}
                onSubmit={handleSubmit}
            >
                {!sent && (
                    <>
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
                    </>
                )}
                <div className="flex justify-between md:hidden">
                    <div
                        className="font-ritma uppercase cursor-pointer"
                        onClick={back}
                    >
                        &#8592; Go Back
                    </div>
                    <div
                        className="text-right font-ritma uppercase cursor-pointer"
                        onClick={handleSubmit}
                        disabled={sent}
                    >
                        {sent ? "Sent!" : <>&#8594;&nbsp;Send</>}
                    </div>
                </div>
                <div
                    className="hidden md:block font-ritma uppercase cursor-pointer"
                    onClick={back}
                >
                    &#8592; Go Back
                </div>
                <div
                    className="hidden md:block text-right font-ritma uppercase cursor-pointer"
                    onClick={handleSubmit}
                    disabled={sent}
                >
                    {sent ? "Sent!" : <>&#8594;&nbsp;Send</>}
                </div>
            </form>
        </div>
    );
});
ContactInfoSubmit.displayName = "ContactInfoSubmit";

export default ContactInfoSubmit;
