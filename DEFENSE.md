# Assignment 4 — шпаргалка для защиты

Команда: Amir Kapassov, Yeskendir Abraimov

## Где что лежит

| Task | Файл | Страница |
|---|---|---|
| 1. Form validation | `js/validation.js` | `index.html` (форма в popup), `contact.html` |
| 2. Accordion (FAQ) | `js/accordion.js` | `contact.html` |
| 3. Popup form | `js/popup.js` | `index.html` |
| 4. Background color | `js/background.js` | `index.html` |
| 5. Date and time | `js/datetime.js` | `index.html` |

Стили лежат в конце `css/style.css`, в блоке `Assignment 4`.

Скрипты подключены внизу `<body>` с `defer`: файл выполнится, когда весь HTML уже загружен, поэтому `getElementById` находит элементы.

---

## Task 1. Validation — `validation.js`

1. Находим все формы с классом `validate-form` (Contact и Sign up).
2. На `submit` вызываем `event.preventDefault()`, чтобы страница не перезагрузилась.
3. Каждое поле проверяет `getError()`. Она смотрит на `field.name` и возвращает текст ошибки или `""`.
4. Текст ошибки пишем в `nextElementSibling`, то есть в `<div class="invalid-feedback">` под полем. Класс `is-invalid` делает рамку красной и показывает этот div.
5. Если ошибок нет, показываем зелёное сообщение и очищаем форму (`form.reset()`).

| Поле | Правило |
|---|---|
| name | не пустое, ≥ 2 символа |
| email | регулярка `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` |
| topic | что-то выбрано |
| message | ≥ 10 символов |
| password | ≥ 8 символов |
| confirm | совпадает с password |

**Могут спросить:**
- *`novalidate`?* Отключает встроенные подсказки браузера, иначе наш JS не запустится.
- *Регулярка?* `[^\s@]+` — «любые символы, кроме пробела и @». Шаблон получается «текст@текст.текст».
- *`trim()`?* Убирает пробелы по краям, поэтому строка из одних пробелов считается пустой.

## Task 2. Accordion — `accordion.js`

1. При загрузке каждому ответу ставим `maxHeight = "0px"`. В CSS стоит `overflow: hidden`, поэтому ответ скрыт.
2. Клик по вопросу: если ответ закрыт, ставим `maxHeight = scrollHeight + "px"` (настоящая высота текста). Если открыт, ставим `"0px"`.
3. `classList.toggle("active")` делает вопрос синим и поворачивает «+» в «×».
4. Плавность даёт CSS `transition: max-height 0.35s`.

**Могут спросить:**
- *Почему не `height: auto`?* CSS не умеет плавно анимировать до `auto`, ему нужна высота в пикселях.

## Task 3. Popup — `popup.js`

1. Окно уже есть в HTML. В CSS у него `opacity: 0; visibility: hidden`, поэтому его не видно.
2. Кнопка «Sign up for free» добавляет класс `open`, и CSS делает окно видимым (с плавным появлением).
3. Окно закрывается (`classList.remove("open")`):
   - по кнопке ×;
   - по клику на тёмный фон: `event.target === popup`. Клик внутри белого окна даёт другой `target`;
   - по клавише Esc.

**Могут спросить:**
- *Почему не `display: none`?* `display` нельзя анимировать, а `opacity` можно.
- *Как связаны Task 1 и Task 3?* popup.js только показывает и прячет окно. Форму внутри проверяет validation.js, потому что у неё класс `validate-form`.

## Task 4. Background — `background.js`

1. Два массива: `bgColors` (цвета) и `bgNames` (названия).
2. По клику выполняется `bgIndex = (bgIndex + 1) % bgColors.length`. `%` — остаток от деления, поэтому после последнего цвета индекс снова 0.
3. `document.body.style.backgroundColor = bgColors[bgIndex]` меняет фон.
4. Плавность даёт CSS `body { transition: background-color 0.5s; }`.

**Могут спросить:**
- *Как сделать случайный цвет?* `Math.floor(Math.random() * bgColors.length)`.

## Task 5. Date and time — `datetime.js`

1. `new Date()` возвращает текущее время с часов компьютера.
2. `toLocaleDateString("en-US", {...})` даёт «Monday, October 19, 2026».
3. `toLocaleTimeString("en-US")` даёт «5:40:15 PM».
4. Вызываем функцию сразу, затем `setInterval(updateDateTime, 1000)` повторяет её каждую секунду.

**Могут спросить:**
- *`setInterval` vs `setTimeout`?* `setTimeout` срабатывает один раз, `setInterval` повторяется.
- *24-часовой формат?* `toLocaleTimeString("ru-RU")` или опция `hour12: false`.

---

## Общее
- **DOM** — дерево объектов, которое браузер строит из HTML. JS меняет страницу через него.
- **`querySelector` / `querySelectorAll`** — первый возвращает один элемент, второй — список всех (перебираем через `forEach`).
- **`addEventListener`** — подписка на событие (`click`, `submit`, `keydown`).
- **Почему имена переменных везде разные?** Все `<script>` на странице делят одну общую область. Одинаковый `const` в двух файлах дал бы ошибку.

## Проверить перед защитой
1. Главная: время идёт, «Change background» меняет фон.
2. «Sign up for free»: пустая отправка даёт ошибки, короткий пароль и разные пароли — свои ошибки, верные данные — зелёное сообщение.
3. Popup закрывается через ×, клик по фону и Esc.
4. Contact: пустая форма даёт 4 ошибки. FAQ открывается и закрывается.
