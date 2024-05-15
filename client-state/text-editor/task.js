const editor = document.getElementById('editor');

editor.value = localStorage.getItem('text');

function textHandler() {
    localStorage.setItem('text', editor.value);
}

editor.addEventListener('keyup', textHandler);
editor.addEventListener('cut', textHandler);
editor.addEventListener('paste', textHandler);