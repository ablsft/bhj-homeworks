const tasksAdd = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');

let taskCounter = 0;
if (localStorage.getItem('taskCounterValue')) {
    taskCounter = Number(localStorage.getItem('taskCounterValue'));
}

for (let i = 0; i < taskCounter; i++) {
    if (localStorage.getItem(i)) {
        tasksList.insertAdjacentHTML('beforeend', localStorage.getItem(i));

        let lastTask = tasksList.lastChild;
        
        lastTask.lastChild.addEventListener('click', () => {
            lastTask.remove();
            localStorage.removeItem(i);
        });
    }
}

tasksAdd.addEventListener('click', (e) => {
    const taskInput = document.getElementById('task__input');
    
    if (taskInput.value) {
        const task = document.createElement('div');
        task.classList.add('task');

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.innerText = taskInput.value;
        taskInput.value = '';

        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.classList.add('task__remove');
        a.innerText = '×';

        task.append(taskTitle);
        task.append(a);
        tasksList.append(task);

        localStorage.setItem(taskCounter, task.outerHTML);
        taskCounter += 1;
        localStorage.setItem('taskCounterValue', taskCounter);

        task.lastChild.addEventListener('click', () => {
            task.remove();
            localStorage.removeItem(taskCounter);
        });
    }

    e.preventDefault();
});