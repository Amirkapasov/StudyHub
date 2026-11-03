// Ленивая загрузка картинок в галерее
// путь лежит в data-src, пока картинка не появится на экране

function loadVisibleImages() {
    const windowBottom = $(window).scrollTop() + $(window).height() + 100; // 100px запас

    $("img.lazy").each(function () {
        const img = $(this);

        if (img.offset().top < windowBottom) {
            img.attr("src", img.attr("data-src"));
            img.removeClass("lazy");
        }
    });
}

$(window).on("scroll", loadVisibleImages);
loadVisibleImages();
