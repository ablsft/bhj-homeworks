const tasksAdd = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');

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

        tasksList.append(task);

        const taskDom = tasksList.lastChild;
        taskDom.append(taskTitle);
        taskDom.append(a);

        taskDom.lastChild.addEventListener('click', (e) => {
            taskDom.remove();
        })
    }
})