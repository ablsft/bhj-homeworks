const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');
const img = document.getElementById('cookie');

var counter = Number(clickerCounter.textContent);

let clickTimestamp = new Date().getTime();

img.onclick = () => {
    counter++;

    newClickTimestamp = new Date().getTime();
    speed = 1000 / (newClickTimestamp - clickTimestamp);
    clickTimestamp = newClickTimestamp;

    clickerCounter.textContent = counter;
    clickerSpeed.textContent = Math.round(speed * 100) / 100;

    if (counter % 2) {
        img.width += 20;
        img.height += 15;
    } else {
        img.width -= 20;
        img.height -= 15;
    }
}