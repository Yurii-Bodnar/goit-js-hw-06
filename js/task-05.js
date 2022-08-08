const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener("input", () => {
    nameOutputRef.textContent = nameInputRef.value
    if (nameInputRef.value === "") {
        return nameOutputRef.textContent = "Anonymous";
    }
})