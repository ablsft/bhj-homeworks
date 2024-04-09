function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let molesKilled = 0;
let faults = 0;
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for (let index = 1; index <= 9; index++) {
    getHole(index).onclick = () => {
        if (getHole(index).className.includes('hole_has-mole')) {
            molesKilled++;
        } else {
            faults++;
        }
        
        if (molesKilled === 10) {
            alert('Победа!');
            molesKilled = 0;
            faults = 0;
        } else if (faults === 5) {
            alert('Вы проиграли!');
            molesKilled = 0;
            faults = 0;
        } 
        
        dead.textContent = molesKilled;
        lost.textContent = faults; 
    }
}
