// Поиск по курсам

const $searchInput = $("#course-search");

function updateCourseSearch() {
    const query = $searchInput.val().trim().toLowerCase();

    // оставляем карточки, где запрос есть в названии или описании
    searchMatches = $(".course-card").filter(function () {
        const title = $(this).find(".card-title").text().toLowerCase();
        const desc = $(this).find(".card-desc").text().toLowerCase();
        return title.includes(query) || desc.includes(query);
    });

    applyFilter(); // из filter.js
}

$searchInput.on("input", updateCourseSearch);
