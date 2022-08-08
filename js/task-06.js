const validationInputRef = document.querySelector("#validation-input");
validationInputRef.addEventListener("blur", () => {
    if (parseInt(validationInputRef.getAttribute("data-length")) > validationInputRef.value.length) {

        validationInputRef.classList.add("invalid");
        validationInputRef.classList.remove("valid") 
    } else {
        validationInputRef.classList.add("valid");
        validationInputRef.classList.remove("invalid");
    }
})