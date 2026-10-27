// Отправка Contact формы через fetch

// тестовый api, возвращает отправленные данные с id
const FORM_URL = "https://jsonplaceholder.typicode.com/posts";

// onDone вызывается, когда сервер ответил или случилась ошибка
function sendForm(form, onDone) {
    const data = {
        name: form.elements["name"].value,
        email: form.elements["email"].value,
        topic: form.elements["topic"].value,
        message: form.elements["message"].value
    };

    fetch(FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            onDone(true, result);
        })
        .catch(function () {
            onDone(false, null); // нет интернета или сервер не ответил
        });
}
