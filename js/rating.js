// Рейтинг курсов звёздами

const MAX_STARS = 5;

const courseRatings = {
    ratings: {}, // { "Programming": 4, "English": 5 }

    set: function (course, value) {
        this.ratings[course] = value;
    },

    get: function (course) {
        return this.ratings[course] || 0; // 0, если курс ещё не оценён
    },

    count: function () {
        return Object.keys(this.ratings).length;
    },

    average: function () {
        const values = Object.values(this.ratings);
        let sum = 0;
        for (let i = 0; i < values.length; i++) {
            sum += values[i];
        }
        return sum / values.length;
    }
};

const ratingSummary = document.getElementById("rating-summary");
const ratingBlocks = document.querySelectorAll(".rating");

function updateRatingSummary() {
    ratingSummary.textContent = "Rated " + courseRatings.count() + " of " + ratingBlocks.length +
        " courses · average " + courseRatings.average().toFixed(1) + " ★";
}

// закрашиваем звёзды до выбранной включительно
function paintStars(stars, value) {
    stars.forEach(function (star) {
        if (Number(star.dataset.value) <= value) {
            star.classList.add("selected");
            star.setAttribute("aria-pressed", "true");
        } else {
            star.classList.remove("selected");
            star.setAttribute("aria-pressed", "false");
        }
    });
}

// звезда увеличивается и возвращается, плавность даёт transition в css
function popStar(star) {
    star.style.transform = "scale(1.4)";
    setTimeout(function () {
        star.style.transform = "scale(1)";
    }, 150);
}

ratingBlocks.forEach(function (block) {
    const course = block.closest(".course-card").querySelector(".card-title").textContent;

    // звёзды создаём в js, чтобы не копировать 25 кнопок в html
    for (let i = 1; i <= MAX_STARS; i++) {
        const star = document.createElement("button");
        star.type = "button";
        star.className = "star";
        star.textContent = "★";
        star.dataset.value = i;
        star.setAttribute("aria-label", "Rate " + course + " " + i + " out of " + MAX_STARS);
        block.append(star);
    }

    const label = document.createElement("span");
    label.className = "rating-label ms-2";
    label.textContent = "Not rated";
    block.append(label);

    const stars = block.querySelectorAll(".star");

    stars.forEach(function (star) {
        star.addEventListener("click", function () {
            const value = Number(star.dataset.value); // из data-атрибута приходит строка

            courseRatings.set(course, value);
            paintStars(stars, value);
            popStar(star);
            label.textContent = value + " / " + MAX_STARS;
            updateRatingSummary();
            playSound("click");
        });
    });
});
