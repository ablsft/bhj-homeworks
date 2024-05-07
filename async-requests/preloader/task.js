const courses = new XMLHttpRequest();

const loader = document.getElementById('loader');
const items = document.getElementById('items');

valutesArray = [];

function addValuteToDom(itemCode, itemValue, parent) {
    parent.insertAdjacentHTML('beforeend', `
        <div class="item">
            <div class="item__code">${itemCode}</div>
            <div class="item__value">${itemValue}</div>
            <div class="item__currency">руб.</div>
        </div>
    `);
}

if (localStorage.getItem('valutesArray')) {
    valutesArray = JSON.parse(localStorage.getItem('valutesArray'));

    valutesArray.forEach((valuteElement) => {
        addValuteToDom(valuteElement[0], valuteElement[1], items);
    });
}

courses.addEventListener('readystatechange', () => {
    if (courses.readyState === courses.DONE) {
        loader.classList.remove('loader_active');
        localStorage.removeItem('valutesArray');
        valutesArray = [];

        items.remove();
        itemsEmpty = document.createElement('div');
        itemsEmpty.classList.add('items');
        document.querySelector('.card').append(itemsEmpty);
        
        const coursesParsed = JSON.parse(courses.response);
        const valutes = coursesParsed.response.Valute;

        for (const valute in valutes) {
            addValuteToDom(valutes[valute].CharCode, valutes[valute].Value, itemsEmpty);
        
            if (localStorage.getItem('valutesArray')) {
                valutesArray = JSON.parse(localStorage.getItem('valutesArray'));
            }

            valutesArray.push([valutes[valute].CharCode, valutes[valute].Value]);
            localStorage.setItem('valutesArray', JSON.stringify(valutesArray));
        }
    }
})

courses.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
courses.send();
