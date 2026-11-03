// Всплывающее уведомление

function showToast(text) {
    const toast = $('<div class="toast-message"></div>');
    toast.text(text);
    $("body").append(toast);

    toast.fadeIn(300).delay(2500).fadeOut(400, function () {
        toast.remove();
    });
}
