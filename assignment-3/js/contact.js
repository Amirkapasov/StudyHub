// The browser checks required fields and email before this event runs.
const form = document.getElementById('contact-form');
const result = document.getElementById('form-result');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Keep this demo on the page; do not send any data.
    result.hidden = false;
});

form.addEventListener('input', function () {
    result.hidden = true; // Hide the old result when the user edits a field.
});
