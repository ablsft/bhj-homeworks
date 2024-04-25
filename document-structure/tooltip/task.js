const hasTooltips = document.querySelectorAll('.has-tooltip');

hasTooltips.forEach(function (hasTooltip) {
    let tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = hasTooltip.getAttribute('title');
    
    hasTooltip.insertAdjacentElement('afterend', tooltip);

    hasTooltip.addEventListener('click', function (e) {
        let activeTooltip = hasTooltip.nextSibling;
        activeTooltip.classList.toggle('tooltip_active');

        e.preventDefault();
    });
});