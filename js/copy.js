// Кнопка копирования

$(".copy-btn").on("click", function () {
    const btn = $(this);
    const text = btn.attr("data-copy");

    navigator.clipboard.writeText(text).then(function () {
        btn.text("✓").addClass("copied"); // класс показывает подсказку

        setTimeout(function () {
            btn.text("📋").removeClass("copied");
        }, 2000);
    }).catch(function () {
        showToast("Could not copy. Please copy it manually.");
    });
});

// если скопировали сами через Ctrl+C
$(".copy-text").on("copy", function () {
    showToast("Copied to clipboard!");
});
