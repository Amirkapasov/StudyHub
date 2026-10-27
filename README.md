# StudyHub

StudyHub is a website for university students. It helps to keep courses, weekly schedule, important dates and study resources in one place.

**Live website:** https://amirkapasov.github.io/StudyHub/

## Team

- Amir Kapassov
- Yeskendir Abraimov

## Pages

- `index.html` - Home page
- `courses.html` - list of courses with a sidebar
- `schedule.html` - weekly timetable and important dates
- `gallery.html` - photo gallery and carousel
- `contact.html` - about us and contact form
- `media-queries.html` - course cards made only with CSS media queries (no Bootstrap)

## Technologies

- HTML5
- CSS3 (Flexbox, Grid, media queries)
- Bootstrap 5.3 (grid, navbar, cards, carousel, buttons, forms)
- JavaScript (form validation, FAQ accordion, sign-up popup, background color, date and time)

## JavaScript (Assignment 4)

- `js/validation.js` - checks the Contact form and the Sign up form (required fields, email, password length, password confirmation)
- `js/accordion.js` - FAQ on the Contact page, answers open and close with a smooth transition
- `js/popup.js` - Sign up popup on the Home page, closes with ×, click outside or Esc
- `js/background.js` - button on the Home page that changes the page background color
- `js/datetime.js` - current date and time on the Home page, updated every second

## JavaScript (Assignment 5)

- `js/keyboard-nav.js` - all pages: move between menu links with arrow keys (`keydown` + `switch`)
- `js/rating.js` - Courses page: click the stars to rate a course; ratings are kept in an object with methods and the average is shown on the page
- `js/filter.js` - Courses page: filter courses by category or "Top rated" (`switch`, array of objects, `filter`, `for` loop, card animation)
- `js/send-form.js` - Contact page: the form is sent with `fetch` (POST) without page reload, the result is shown by a callback
- `js/sound.js` - short sounds made with the Web Audio API (no audio files), a new sound stops the previous one

## How to run

Download or clone the repository and open `index.html` in a browser.
