const card = document.querySelector('.card')
let dropdownList = null;

function dropdownActions(event) {
    let target = event.target;

    if (target.className == 'dropdown__value') {
        dropdownList = target.nextElementSibling;
    }

    if (target.className == 'dropdown__link') {
        let dropdown = target.closest('.dropdown');
        let dropdownValue = dropdown.querySelector('.dropdown__value');

        dropdownValue.textContent = target.textContent;
    }

    dropdownList.classList.toggle('dropdown__list_active');
    event.preventDefault();
}

card.addEventListener('click', dropdownActions);