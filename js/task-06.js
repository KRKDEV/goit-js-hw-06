const inputValidation = document.querySelector("#validation-input");
const inputTextLength = inputValidation.getAttribute("data-length");

inputValidation.addEventListener("blur", () => {
    if (parseInt(inputTextLength) === inputValidation.value.trim().length) {
        inputValidation.classList.add("valid");
        inputValidation.classList.remove("invalid");
    } else {
        inputValidation.classList.add("invalid");
        inputValidation.classList.remove("valid");
    }
});
