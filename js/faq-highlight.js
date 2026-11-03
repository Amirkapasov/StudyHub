// Поиск по FAQ с подсветкой

const $faqSearch = $("#faq-search");
const $faqCount = $("#faq-search-count");
const $faqTexts = $(".faq-question-text, .faq-answer p");

// сохраняем исходный текст, чтобы потом убрать подсветку
$faqTexts.each(function () {
    $(this).data("original", $(this).text());
});

$faqSearch.on("input", function () {
    const query = $faqSearch.val().trim();

    // экранируем спецсимволы, иначе "(" или "?" сломают regex
    const safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp("(" + safe + ")", "gi");

    $faqTexts.each(function () {
        const original = $(this).data("original");
        if (query === "") {
            $(this).text(original);
        } else {
            $(this).html(original.replace(regex, "<mark>$1</mark>"));
        }
    });

    // открываем ответы, где что-то нашлось
    $(".faq-item").each(function () {
        const question = $(this).find(".faq-question");
        const answer = $(this).find(".faq-answer");
        const hasMatch = answer.find("mark").length > 0;

        question.toggleClass("active", hasMatch);
        answer.css("max-height", hasMatch ? answer.prop("scrollHeight") + "px" : "0px");
    });

    const count = $(".faq-item mark").length;
    if (query === "") {
        $faqCount.text("");
    } else if (count > 0) {
        $faqCount.text("Found matches: " + count);
    } else {
        $faqCount.text("No matches found");
    }
});
