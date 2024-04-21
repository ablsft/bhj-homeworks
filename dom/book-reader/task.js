const bookControl = document.querySelector('.book__control');
const bookContent = document.querySelector('.book__content')

function chooseFontSize(event) {
    let fontSizeActive = document.querySelector('.font-size_active')
    let target = event.target;

    if (target.classList.contains('font-size')) {
        bookContent.className = 'book';

        fontSizeActive.classList.remove('font-size_active');
        target.classList.add('font-size_active');

        let dataSize = target.getAttribute('data-size');
        if (dataSize) {
            bookContent.classList.add(`book_fs-${dataSize}`)
        }
    }

    event.preventDefault();
}

bookControl.addEventListener('click', chooseFontSize);
