// Task 4. Кнопка меняет фон страницы по кругу

const bgColors = ["#FFFFFF", "#EFF6FF", "#ECFDF5", "#FEFCE8", "#FDF2F8", "#F5F3FF"];
const bgNames = ["White", "Light blue", "Mint", "Cream", "Pink", "Lavender"];

const bgButton = document.getElementById("bg-button");
const bgName = document.getElementById("bg-name");
let bgIndex = 0;

bgButton.addEventListener("click", function () {
    // после последнего цвета % возвращает нас к первому
    bgIndex = (bgIndex + 1) % bgColors.length;

    document.body.style.backgroundColor = bgColors[bgIndex];
    bgName.textContent = bgNames[bgIndex];
});
