const updateBtn = document.querySelectorAll('.update-btn')

// Open modal and populate with task data
function openModal(taskId, currentTask) {
    document.getElementById('taskId').value = taskId;
    document.getElementById('taskText').value = currentTask.trim();
    document.getElementById('updateModal').style.display = 'flex';
}

// Close modal
function closeModal() {
    document.getElementById('updateModal').style.display = 'none';
}

// handleFormsubmisson
document.getElementById('updateForm').addEventListener('submit', e => {
    e.preventDefault();

    const taskId = document.getElementById('taskId').value;
    const newTaskText = document.getElementById('taskText').value.trim();

    if (newTaskText) {
        fetch('/update-task', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: taskId,
                task: newTaskText
            })
        }).then(response => response.json()).catch(err => console.error(err));
    }
})

updateBtn.forEach(button => {
    button.addEventListener('click', () => {
        const taskElement = button.parentElement;
        const taskId = taskElement.getAttribute('data-id')
        const currentTask = taskElement.querySelector('.task-text').textContent;

        openModal(taskId, currentTask)

    })
})