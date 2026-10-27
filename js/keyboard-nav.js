// Навигация по меню стрелками

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link, index) {
    link.addEventListener("keydown", function (event) {
        const lastIndex = navLinks.length - 1;
        let nextIndex;

        switch (event.key) {
            case "ArrowRight":
            case "ArrowDown":
                nextIndex = index === lastIndex ? 0 : index + 1; // с последнего на первый
                break;
            case "ArrowLeft":
            case "ArrowUp":
                nextIndex = index === 0 ? lastIndex : index - 1;
                break;
            default:
                return; // Tab, Enter и остальные не трогаем
        }

        event.preventDefault(); // иначе стрелка скроллит страницу
        navLinks[nextIndex].focus();
    });
});
