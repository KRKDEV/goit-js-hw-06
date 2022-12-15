const form = document.querySelector("form");
const handleSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return window.alert("Please fill in all the fields!");
        // return console.log("Please fill in all the fields!");
    }
    console.log({ Email: email.value, Password: password.value });
    event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
