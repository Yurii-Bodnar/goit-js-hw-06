const loginForm = document.querySelector(".login-form")

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

        if ( email === "" || password === "") {
            alert("Всі поля повинні бути заповнені")
        } else {
            const valueFormElements = {
                email: email,
                password: password,
            };
            console.log(valueFormElements)
            reset(formElements); 
        }
}

function reset(formElements) {
    formElements.email.value = "";
    formElements.password.value = "";

}

