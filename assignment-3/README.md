# StudyHub — Assignment 3

Версия исходного StudyHub с добавлениями по заданию. Сохранены прежние тексты, пять основных страниц, белый фон, цвета, фотографии, карточки, расписание и оформление футера.

Открыть локально: `index.html` двойным щелчком или через WebStorm → Open in Browser. Bootstrap 5.3.8 хранится в `vendor`; установка пакетов и интернет для работы сайта не нужны.

Публичный адрес: https://amirkapasov.github.io/StudyHub/assignment-3/

## Требования задания

| Задание | Где выполнено |
|---|---|
| 1. Адаптивный текст | `media-queries.html`, конец `css/media-queries.css` |
| 2. Три карточки без Bootstrap | `media-queries.html`: три существующие карточки курсов в 1 / 2 / 3 колонки |
| 3. Bootstrap Grid | Две `col-lg-6` на Home и Contact; три `col-lg-4` в футере; сетка фотографий Gallery |
| 4. Отступы Bootstrap | `px-4`, `py-3`, `my-4 my-lg-5`, `mt-3 mt-lg-0` и другие классы в HTML |
| 5. Navbar | Пять прежних ссылок; ниже 992px меню раскрывается кнопкой |
| 6. Кнопки и btn-group | Home, Courses, Contact; группа Grid / Slideshow в Gallery |
| 7. Карусель | Gallery → Slideshow: девять фотографий, стрелки и индикаторы |
| 8. Bootstrap Cards | Пять прежних карточек Courses: `card`, `card-body`, `card-group` |
| 9. Адаптивная форма | Прежняя форма Contact с `form-control`, `form-select`, radio и checkbox |
| 10. Доступность | Семантические теги, подписи полей, alt, ARIA-атрибуты, фокус и читаемый текст |

На Home две секции с Bootstrap Grid: основной блок в две колонки и существующий футер в три. Дополнительная секция с новым контентом не нужна.

Страница Media Queries не подключает Bootstrap. Ссылка на неё находится под карточками Courses. Она использует тот же дизайн и три карточки исходного сайта.

## Файлы

- `css/style.css` — знакомые стили, адаптированные для Bootstrap. Обычные margin/padding перенесены в HTML-классы.
- `css/media-queries.css` — собственный CSS для заданий 1–2.
- `js/contact.js` — учебная демонстрация формы; данные, включая пароль, не отправляются и не сохраняются.
- `vendor/` — официальная библиотека и лицензия; эти файлы редактировать не нужно.
- `DEFENSE.md` — разбор кода и упражнения для защиты.

Во всех шести HTML-файлах в footer указаны Amir Kapassov и Yeskendir Abraimov.

Рекомендуемое разделение для изучения: Yeskendir — navbar на Contact и Schedule плюс форма; Amir — Grid на Home и Courses плюс карточки и карусель. Каждый участник должен сам понимать и уметь менять свою часть. В отчёте указывается фактический вклад.

PDF-отчёт отложен по просьбе команды. Для сдачи ещё нужны номер группы, отчёт со скриншотами и личная защита каждого участника.

## Документация

- [Grid](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Отступы](https://getbootstrap.com/docs/5.3/utilities/spacing/)
- [Navbar](https://getbootstrap.com/docs/5.3/components/navbar/)
- [Carousel](https://getbootstrap.com/docs/5.3/components/carousel/)
- [Cards](https://getbootstrap.com/docs/5.3/components/card/)
- [Tabs](https://getbootstrap.com/docs/5.3/components/navs-tabs/)
