const poll = new XMLHttpRequest();

const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

poll.addEventListener('readystatechange', () => {
    if (poll.readyState === poll.DONE) {

        const pollParsed = JSON.parse(poll.response);
        pollTitle.innerText = pollParsed['data'].title;

        for (const answer of pollParsed['data'].answers) {
            const pollAnswer = document.createElement('button');
            pollAnswer.classList.add('poll__answer');
            pollAnswer.innerText = answer;
            pollAnswers.append(pollAnswer);

            pollAnswer.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
        }
    }
})

poll.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
poll.send();