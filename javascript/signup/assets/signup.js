const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const degree = document.querySelector("#degree");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");

form.addEventListener("submit", (e) => {
    if (!validateInputs()) {
        e.preventDefault(); // Block form submission if validation fails
    } else {
        alert("Registration successful!"); 
    }
});

function validateInputs() {
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const degreeval = degree.value.trim();
    const passwordval = password.value.trim();
    const confirmpasswordval = confirmpassword.value.trim();
    let success = true;

    // Username validation
    if (usernameval === "") {
        success = false;
        setError(username, "Enter a valid username");
    } else {
        setSuccess(username);
    }

    // Email validation
    if (emailval === "") {
        success = false;
        setError(email, "Email is required");
    } else if (!validateEmail(emailval)) {
        success = false;
        setError(email, "Enter a valid email address");
    } else {
        setSuccess(email);
    }

    // Degree validation (dropdown or selector)
    if (degreeval === "") {
        success = false;
        setError(degree, "Select a degree");
    } else {
        setSuccess(degree);
    }

    // Password validation
    if (passwordval === "") {
        success = false;
        setError(password, "Password is required");
    } else if (passwordval.length < 8) {
        success = false;
        setError(password, "Password must be at least 8 characters long");
    } else {
        setSuccess(password);
    }

    // Confirm password validation
    if (confirmpasswordval === "") {
        success = false;
        setError(confirmpassword, "Confirm password is required");
    } else if (confirmpasswordval !== passwordval) {
        success = false;
        setError(confirmpassword, "Passwords do not match");
    } else {
        setSuccess(confirmpassword);
    }

    return success; // Return the success flag to indicate if the form is valid
}

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorElement = inputControl.querySelector(".error");

    errorElement.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");

    // Optionally, set border color to red
    element.style.borderColor = "red";
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorElement = inputControl.querySelector(".error");

    errorElement.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");

    // Set border color to green
    element.style.borderColor = "green";
}

// Email validation using regex
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
