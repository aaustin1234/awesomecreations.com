function addTask(columnId) {
    const input = document.getElementById(`${columnId}-input`);
    const taskText = input.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById(`${columnId}-list`);
    const task = document.createElement('div');
    task.className = 'task';
    task.innerText = taskText;

    taskList.appendChild(task);
    input.value = '';
}

// Attach event listeners if you prefer this method over inline onclick
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const columnId = this.previousElementSibling.id.split('-')[0]; // Assumes button is always after input
        addTask(columnId);
    });
});

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
