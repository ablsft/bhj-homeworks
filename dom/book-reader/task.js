const bookControlFontSize = document.querySelector('.book__control_font-size');
const bookControlColor = document.querySelector('.book__control_color');
const bookControlBackground = document.querySelector('.book__control_background');
const bookContent = document.querySelector('.book__content');

let fontSizeLastModified = null;
let textColorLastModified = null;
let backgroundColorLastModified = null;

function chooseFontSize(event) {
    let fontSizeActive = document.querySelector('.font-size_active')
    let target = event.target;

    if (target.classList.contains('font-size')) {
        if (fontSizeLastModified) {
            bookContent.classList.remove(fontSizeLastModified);
        }
        
        fontSizeActive.classList.remove('font-size_active');
        target.classList.add('font-size_active');

        let dataSize = target.getAttribute('data-size');
        if (dataSize) {
            let fontSizeClass = `book_fs-${dataSize}`;
            bookContent.classList.add(fontSizeClass);
            fontSizeLastModified = fontSizeClass;
        }
    }

    event.preventDefault();
}

function chooseTextColor(event) {
    let textColorActive = bookControlColor.querySelector('.color_active');
    let target = event.target;

    if (target.classList.contains('color')) {
        if (textColorLastModified) {
            bookContent.classList.remove(textColorLastModified);
        }

        textColorActive.classList.remove('color_active');
        target.classList.add('color_active');

        let dataTextColor = target.getAttribute('data-text-color');
        let dataTextColorClass = `book_color-${dataTextColor}`;
        bookContent.classList.add(dataTextColorClass);
        textColorLastModified = dataTextColorClass;
    }

    event.preventDefault();
}

function chooseBackgroundColor(event) {
    let backgroundColorActive = bookControlBackground.querySelector('.color_active');
    let target = event.target;

    if (target.classList.contains('color')) {
        if (backgroundColorLastModified) {
            bookContent.classList.remove(backgroundColorLastModified);
        }

        backgroundColorActive.classList.remove('color_active');
        target.classList.add('color_active');

        let dataBackgroundColor = target.getAttribute('data-bg-color');
        let dataBackgroundColorClass = `book_bg-${dataBackgroundColor}`;
        bookContent.classList.add(dataBackgroundColorClass);
        backgroundColorLastModified = dataBackgroundColorClass;
    }

    event.preventDefault();
}

bookControlFontSize.addEventListener('click', chooseFontSize);
bookControlColor.addEventListener('click', chooseTextColor);
bookControlBackground.addEventListener('click', chooseBackgroundColor);
