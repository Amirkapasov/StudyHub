// Фильтр курсов в сайдбаре

const filterButtons = document.querySelectorAll(".filter-btn");
const courseCards = document.querySelectorAll(".course-card");
const courseCount = document.getElementById("course-count");
const noCourses = document.getElementById("no-courses");

// собираем данные карточек в массив объектов
const courses = Array.from(courseCards).map(function (card) {
    return {
        title: card.querySelector(".card-title").textContent,
        category: card.dataset.category,
        element: card
    };
});

let currentFilter = "all";

function isCourseVisible(course, filter) {
    switch (filter) {
        case "it":
            return course.category === "it";
        case "general":
            return course.category === "general";
        case "top":
            return courseRatings.get(course.title) >= 4;
        default: // all
            return true;
    }
}

function applyFilter() {
    const visibleCourses = courses.filter(function (course) {
        return isCourseVisible(course, currentFilter);
    });

    for (let i = 0; i < courses.length; i++) {
        const card = courses[i].element;
        const wasHidden = card.style.display === "none";
        const isVisible = visibleCourses.includes(courses[i]);

        if (isVisible) {
            card.style.display = "";
            // анимируем только те карточки, которые только что появились
            if (wasHidden) {
                card.classList.add("card-appear");
            }
        } else {
            card.style.display = "none";
            card.classList.remove("card-appear");
        }
    }

    courseCount.textContent = "Showing " + visibleCourses.length + " of " + courses.length + " courses";
    noCourses.hidden = visibleCourses.length > 0;
}

// без этого второй раз анимация не запустится
courseCards.forEach(function (card) {
    card.addEventListener("animationend", function () {
        card.classList.remove("card-appear");
    });
});

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(function (otherButton) {
            otherButton.classList.remove("active");
        });
        button.classList.add("active");

        applyFilter();
        playSound("click");
    });
});

// после новой оценки пересчитываем фильтр, нужно для Top rated
document.querySelectorAll(".star").forEach(function (star) {
    star.addEventListener("click", applyFilter);
});
