// Task 3. Popup с формой регистрации

const popup = document.getElementById("signup-popup");
const openButton = document.getElementById("open-signup");
const closeButton = popup.querySelector(".popup-close");

openButton.addEventListener("click", function () {
    popup.classList.add("open");
});

closeButton.addEventListener("click", function () {
    popup.classList.remove("open");
});

// клик по тёмному фону закрывает, клик внутри окна — нет
popup.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.classList.remove("open");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        popup.classList.remove("open");
    }
});
