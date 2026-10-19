// Task 5. Текущая дата и время, обновляются каждую секунду

const dateElement = document.getElementById("current-date");
const timeElement = document.getElementById("current-time");

function updateDateTime() {
    const now = new Date();

    // "Monday, October 19, 2026"
    dateElement.textContent = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    // "5:40:15 PM"
    timeElement.textContent = now.toLocaleTimeString("en-US");
}

updateDateTime(); // сразу, чтобы блок не был пустым первую секунду
setInterval(updateDateTime, 1000);
