export default function StyledTextInput({
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
