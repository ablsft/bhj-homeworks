const clickerCounter = document.getElementById('clicker__counter');
const img = document.getElementById('cookie');

var counter = Number(clickerCounter.textContent);

img.onclick = () => {
    counter++;
    clickerCounter.textContent = counter;
    if (counter % 2) {
        img.width += 20;
        img.height += 15;
    } else {
        img.width -= 20;
        img.height -= 15;
    }
}