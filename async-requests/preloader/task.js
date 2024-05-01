const courses = new XMLHttpRequest();

const loader = document.getElementById('loader');
const items = document.getElementById('items');

courses.addEventListener('readystatechange', () => {
    if (courses.readyState === courses.DONE) {
        loader.classList.remove('loader_active');

        const coursesParsed = JSON.parse(courses.response);
        const valutes = coursesParsed.response.Valute;

        for (const valute in valutes) {
            const item = document.createElement('div');
            item.classList.add('item');

            const itemCode = document.createElement('div');
            itemCode.classList.add('item__code');
            itemCode.innerText = valutes[valute].CharCode;

            const itemValue = document.createElement('div');
            itemValue.classList.add('item__value');
            itemValue.innerText = valutes[valute].Value;

            const itemCurrency = document.createElement('div');
            itemCurrency.classList.add('item__currency');
            itemCurrency.innerText = 'руб.'

            item.append(itemCode, itemValue, itemCurrency);
            items.append(item);
        }
    }
})

courses.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
courses.send();
