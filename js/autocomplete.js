// Подсказки для поиска курсов

const $suggestions = $("#search-suggestions");

$searchInput.on("input", function () {
    const query = $searchInput.val().trim().toLowerCase();
    $suggestions.empty();

    if (query === "") {
        $suggestions.hide();
        return;
    }

    $(".card-title").each(function () {
        const title = $(this).text();
        if (title.toLowerCase().includes(query)) {
            const item = $('<li class="suggestion-item"></li>').text(title);
            $suggestions.append(item);
        }
    });

    if ($suggestions.children().length > 0) {
        $suggestions.show();
    } else {
        $suggestions.hide();
    }
});

// пункты создаются потом, поэтому клик ловим на самом списке
$suggestions.on("click", ".suggestion-item", function () {
    $searchInput.val($(this).text());
    updateCourseSearch();
    $suggestions.hide();
});

// клик мимо поиска закрывает подсказки
$(document).on("click", function (event) {
    if ($(event.target).closest(".search-box").length === 0) {
        $suggestions.hide();
    }
});
