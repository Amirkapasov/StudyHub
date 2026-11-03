// Полоска прогресса прокрутки

$("body").prepend('<div id="scroll-progress"></div>');
const bar = $("#scroll-progress");

function updateProgress() {
    const maxScroll = $(document).height() - $(window).height();
    let percent = 0;

    // если страница не скроллится, maxScroll = 0
    if (maxScroll > 0) {
        percent = $(window).scrollTop() / maxScroll * 100;
    }

    bar.css("width", percent + "%");
}

$(window).on("scroll", updateProgress);
updateProgress();
