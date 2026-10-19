// Task 1. Проверка форм: Contact и Sign up (в popup)

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Возвращает текст ошибки, или "" если поле заполнено верно
function getError(field, form) {
    const value = field.value.trim();

    if (field.name === "name") {
        if (value === "") return "Please enter your name.";
        if (value.length < 2) return "Name must be at least 2 characters.";
    }

    if (field.name === "email") {
        if (value === "") return "Please enter your email.";
        if (!emailPattern.test(value)) return "Enter a valid email, for example name@astanait.edu.kz.";
    }

    if (field.name === "topic" && value === "") {
        return "Please choose a topic.";
    }

    if (field.name === "message") {
        if (value === "") return "Please write a message.";
        if (value.length < 10) return "Message must be at least 10 characters.";
    }

    if (field.name === "password") {
        if (value === "") return "Please enter a password.";
        if (value.length < 8) return "Password must be at least 8 characters.";
    }

    if (field.name === "confirm") {
        if (value === "") return "Please confirm your password.";
        if (value !== form.elements["password"].value.trim()) return "Passwords do not match.";
    }

    return "";
}

const forms = document.querySelectorAll(".validate-form");

forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // не перезагружаем страницу

        const fields = form.querySelectorAll(".form-control, .form-select");
        const success = form.querySelector(".form-success");
        let isValid = true;

        fields.forEach(function (field) {
            const error = getError(field, form);
            // текст ошибки пишем в div сразу под полем
            field.nextElementSibling.textContent = error;

            if (error) {
                field.classList.add("is-invalid");
                isValid = false;
            } else {
                field.classList.remove("is-invalid");
            }
        });

        success.hidden = !isValid;
        if (isValid) {
            form.reset();
        }
    });
});
