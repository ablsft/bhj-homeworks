const rotators = document.getElementsByClassName('rotator');

for (const rotator of rotators) {
    const rotatorCases = rotator.children;
    let i = 0;

    for (const rotatorCase of rotatorCases) {
        rotatorCase.style.color = rotatorCase.getAttribute('data-color');
    }

    function rotate() {
        setTimeout(() => {
            rotatorCases[i].classList.remove('rotator__case_active')
    
            if (i < rotatorCases.length - 1) {
                rotatorCases[i+1].classList.add('rotator__case_active')
                i++;
            } else {
                rotatorCases[0].classList.add('rotator__case_active')
                i = 0;
            }

            rotate();
        }, rotatorCases[i].getAttribute('data-speed'));
    }

    rotate();
}