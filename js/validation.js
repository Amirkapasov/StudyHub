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

        if (!isValid) {
            success.hidden = true;
            return;
        }

        // contact форму отправляем на сервер (send-form.js)
        if (form.id === "contact-form") {
            submitContactForm(form, success);
            return;
        }

        success.hidden = false;
        form.reset();
    });
});

function submitContactForm(form, message) {
    const submitButton = form.querySelector("button[type='submit']");
    const name = form.elements["name"].value.trim();

    submitButton.disabled = true; // чтобы не отправили два раза
    submitButton.textContent = "Sending...";
    message.hidden = true;
    playSound("click"); // звук на клике, иначе браузер может заглушить звук после ответа

    // callback для sendForm
    function showResult(isSent, result) {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";

        if (isSent) {
            message.classList.remove("alert-danger");
            message.classList.add("alert-success");
            message.textContent = "Thank you, " + name + "! Your message #" + result.id + " has been sent.";
            form.reset();
            playSound("success");
        } else {
            message.classList.remove("alert-success");
            message.classList.add("alert-danger");
            message.textContent = "Sorry, the message was not sent. Check your internet and try again.";
            playSound("error");
        }
        message.hidden = false;
    }

    sendForm(form, showResult);
}
