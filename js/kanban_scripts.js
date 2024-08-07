function addTask(columnId) {
    const input = document.getElementById(`${columnId}-input`);
    const taskText = input.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById(`${columnId}-list`);
    const task = document.createElement('div');
    task.className = 'task';
    task.innerText = taskText;

    // Make tasks draggable
    task.setAttribute('draggable', 'true');
    task.ondragstart = handleDragStart;
    task.ondragover = handleDragOver;
    task.ondrop = handleDrop;

    taskList.appendChild(task);
    input.value = '';
}

function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.innerText);
    event.dataTransfer.setData('taskId', event.target.id);
}

function handleDragOver(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    const taskText = event.dataTransfer.getData('text/plain');
    const target = event.target;
    const taskId = event.dataTransfer.getData('taskId');

    if (target.classList.contains('task-list')) {
        const task = document.createElement('div');
        task.className = 'task';
        task.innerText = taskText;
        task.setAttribute('draggable', 'true');
        task.ondragstart = handleDragStart;
        task.ondragover = handleDragOver;
        task.ondrop = handleDrop;

        target.appendChild(task);
        const oldTask = document.querySelector(`#${taskId}`);
        if (oldTask) oldTask.remove();
    }
}
