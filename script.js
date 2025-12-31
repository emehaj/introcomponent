const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const form = document.querySelector("form");

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const inputs = [firstName, lastName, email, password];

let firstNameError = document.createElement("div");
let lastNameError = document.createElement("div");
let emailError = document.createElement("div");
let passwordError = document.createElement("div");

const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", () => {
    inputs.forEach((element) => {
        if (element.value === "") {
            element.classList.add("error");
            errorMsg(element);
        }
    });

    if (!emailRegex.test(email.value) && email.value !== "") {
        email.classList.add("error");
        emailError.classList.add("error-msg");
        emailError.textContent = "Enter a valid email";
        email.insertAdjacentElement("afterend", emailError);
    }

    if (
        firstName.value !== "" &&
        lastName.value !== "" &&
        email.value !== "" &&
        password.value !== "" &&
        emailRegex.test(email.value)
    ) {
        submitFunc();
    }
});

firstName.addEventListener("keyup", () => {
    if (firstName.value.length > 0) {
        firstName.classList.remove("error");
        firstNameError.remove();
    }
});

lastName.addEventListener("keyup", () => {
    if (lastName.value.length > 0) {
        lastName.classList.remove("error");
        lastNameError.remove();
    }
});

email.addEventListener("keyup", () => {
    if (emailRegex.test(email.value)) {
        email.classList.remove("error");
        emailError.remove();
    }

    if (email.value !== "") {
        emailError.textContent = "Enter a valid email";
    }
});

password.addEventListener("keyup", () => {
    if (password.value.length > 0) {
        password.classList.remove("error");
        passwordError.remove();
    }
});

function errorMsg(input) {
    if (input.name === "firstName") {
        firstNameError.classList.add("error-msg");
        firstNameError.textContent = "First Name cannot be empty";
        firstName.insertAdjacentElement("afterend", firstNameError);
    }

    if (input.name === "lastName") {
        lastNameError.classList.add("error-msg");
        lastNameError.textContent = "Last Name cannot be empty";
        lastName.insertAdjacentElement("afterend", lastNameError);
    }

    if (input.name === "email" && email.value === "") {
        emailError.classList.add("error-msg");
        emailError.textContent = "Email cannot be empty";
        email.insertAdjacentElement("afterend", emailError);
    }

    if (input.name === "password") {
        passwordError.classList.add("error-msg");
        passwordError.textContent = "Password cannot be empty";
        password.insertAdjacentElement("afterend", passwordError);
    }
}

function submitFunc() {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
}
