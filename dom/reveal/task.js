const reveals = document.querySelectorAll('.reveal');

for (const reveal of reveals) {
    addEventListener('scroll', () => {
        const revealBounds = reveal.getBoundingClientRect();    
    
        if (!reveal.classList.contains('reveal_active') && revealBounds.top < window.innerHeight) {
            reveal.classList.add('reveal_active');
        }
    });
}