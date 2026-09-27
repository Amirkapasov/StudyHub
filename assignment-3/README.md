# StudyHub — Assignment 3

Самостоятельная версия сайта для Media Queries + Bootstrap Grid.
Откройте `index.html` двойным щелчком или через WebStorm → Open in Browser.
Установка пакетов и запуск сборки не нужны. Bootstrap 5.3.8 лежит в `vendor`, поэтому сайт работает без интернета.

## Где выполнены задания

| Задание | Где смотреть |
|---|---|
| 1. Адаптивные размеры текста | `media-queries.html`, `css/media-queries.css` |
| 2. Три карточки без Bootstrap: 1 / 2 / 3 колонки | `media-queries.html`, `css/media-queries.css` |
| 3. Bootstrap Grid: две и три колонки | `index.html`; сетка также есть на остальных основных страницах |
| 4. Отступы Bootstrap, включая адаптивные | `p-3 p-lg-4`, `py-4 py-lg-5`, `mt-lg-4`, `g-4` в HTML |
| 5. Navbar с раскрывающимся меню | Пять основных страниц, `navbar-expand-lg` |
| 6. Кнопки разных размеров и группа кнопок | `index.html`, `schedule.html`, `courses.html`, `contact.html` |
| 7. Карусель с девятью изображениями | `gallery.html` |
| 8. Карточки с изображениями и card-group | `courses.html` |
| 9. Адаптивная форма | `contact.html` |
| 10. Семантика, подписи и доступность | Все страницы |

Во всех шести HTML-файлах в footer указаны Amir Kapassov и Yeskendir Abraimov.
Страница Study Tips специально не подключает Bootstrap: это отдельная демонстрация Tasks 1–2.
На пяти Bootstrap-страницах собственных CSS-правил для обычных margin/padding нет; отступы задаются классами Bootstrap.
`scroll-margin-top` задаёт положение при переходе по якорю под закреплённым меню, а не расстояние между блоками.

## Как устроены файлы

- `index.html`, `courses.html`, `schedule.html`, `gallery.html`, `contact.html` — основные страницы.
- `media-queries.html` — Study Tips, задания на собственный CSS.
- `css/style.css` — цвета, размеры изображений, несколько деталей оформления.
- `css/media-queries.css` — собственные стили и два media queries для Study Tips.
- `js/contact.js` — короткая демонстрация проверки формы; сообщения не отправляются и не сохраняются.
- `vendor/` — готовые официальные файлы Bootstrap и лицензия. Их редактировать не нужно.
- `images/` — изображения из исходного проекта.
- `DEFENSE.md` — разбор кода и упражнения для защиты.

## Совместная работа и защита

Рекомендуемое разделение для изучения и проверки каждым участником:

- Yeskendir Abraimov: navbar на Contact и Schedule; форма и таблица.
- Amir Kapassov: Bootstrap Grid на Home и Courses; карточки и карусель.
- Вместе: media queries, отступы, доступность и проверка на разных ширинах.

В отчёте нужно указывать фактический вклад каждого участника. Само наличие имён в footer не заменяет личное участие и понимание кода.

## Что останется для сдачи

PDF-отчёт отложен по просьбе команды. Для финальной сдачи понадобятся номер группы, скриншоты кода и страниц, описание шагов и ссылка на опубликованный сайт. Каждый участник сдаёт работу отдельно.

Для публикации можно разместить содержимое этой папки на GitHub Pages или Netlify. Если GitHub Pages публикует корень основного репозитория, эта версия должна открываться по пути `/assignment-3/` после загрузки файлов в публикуемую ветку. Публичный адрес нужно проверить после развёртывания.

## Источники

- [Bootstrap 5.3: подключение](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Bootstrap Grid](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Bootstrap Spacing](https://getbootstrap.com/docs/5.3/utilities/spacing/)
- [Bootstrap Navbar](https://getbootstrap.com/docs/5.3/components/navbar/)
- [Bootstrap Carousel](https://getbootstrap.com/docs/5.3/components/carousel/)
- [Bootstrap Cards](https://getbootstrap.com/docs/5.3/components/card/)
- [MDN: Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
