
// Task 2. FAQ: клик по вопросу открывает/закрывает ответ

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
    const answer = question.nextElementSibling;
    answer.style.maxHeight = "0px"; // по умолчанию скрыт

    question.addEventListener("click", function () {
        if (question.classList.contains("active")) {
            answer.style.maxHeight = "0px";
        } else {
            // scrollHeight — настоящая высота текста ответа
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
        question.classList.toggle("active");
    });
});
