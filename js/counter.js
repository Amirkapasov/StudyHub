// Счётчики в блоке статистики

let started = false; // чтобы анимация шла один раз

function startCounters() {
    $(".counter-number").each(function () {
        const el = this;
        const target = Number($(el).attr("data-target"));

        // плавно меняем число от 0 до target
        $({ value: 0 }).animate({ value: target }, {
            duration: 2000,
            step: function (now) {
                $(el).text(Math.floor(now));
            },
            complete: function () {
                $(el).text(target);
            }
        });
    });
}

function checkStats() {
    if (started) return;

    const windowBottom = $(window).scrollTop() + $(window).height();

    // низ окна дошёл до блока - запускаем
    if (windowBottom >= $(".stats").offset().top) {
        started = true;
        startCounters();
    }
}

$(window).on("scroll", checkStats);
checkStats(); // блок может быть виден сразу
