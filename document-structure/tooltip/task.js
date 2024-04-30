const hasTooltips = document.querySelectorAll('.has-tooltip');

hasTooltips.forEach(function (hasTooltip) {
    let tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = hasTooltip.getAttribute('title');
    
    hasTooltip.insertAdjacentElement('afterend', tooltip);

    hasTooltip.addEventListener('click', function (e) {
        const tooltips = document.querySelectorAll('.tooltip');
        let activeTooltip = hasTooltip.nextSibling;
        
        tooltips.forEach(function (tooltip) {
            if (tooltip != activeTooltip) {
                tooltip.classList.remove('tooltip_active');
            }
        })

        activeTooltip.classList.toggle('tooltip_active');

        e.preventDefault();
    });
});