const timer = document.getElementById('timer');

const timestamp = timer.textContent.split(':');
let hours = +timestamp[0];
let minutes = +timestamp[1];
let seconds = +timestamp[2];

var timerInterval = setInterval(() => {
    if (seconds) {
        seconds--;
    } else if (!hours && !minutes) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    } else if (!minutes) {
        hours--;
        minutes = 59;
        seconds = 59;
    } else if (!seconds) {
        console.log(minutes);
        minutes--;
        seconds = 59;
    }

    let showTime = [hours, minutes, seconds];
    for (let i = 0; i < showTime.length; i++) {
        if (showTime[i] < 10) {
            showTime[i] = 0 + String(showTime[i]);
        }
    } 
    timer.textContent = showTime.join(':');
}, 1000);