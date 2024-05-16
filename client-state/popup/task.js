function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

modal = document.querySelector('.modal')
modalClose = document.querySelector('.modal__close');

if (document.cookie) {
    modal.classList.remove('modal_active');
}

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('popupClosed', true);
})