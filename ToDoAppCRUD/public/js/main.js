const updateBtn = document.querySelectorAll('.update-btn')

// Open modal and populate with task data
function openModal(taskId, currentTask) {
    document.getElementById('taskId').value = taskId;
    document.getElementById('taskText').value = currentTask;
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
        fetch(`/update-task/${taskId}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                task: newTaskText
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Task updated successfully') {
                    // Update the task text in the DOM without page reload
                    document.querySelector(`.task[data-id="${taskId}"] .task-text`).textContent = newTaskText;
                    closeModal();
                } else {
                    console.error(data.message);
                }
            })
            .catch(error => console.error("Error updating task:", error));
    }
})

updateBtn.forEach(button => {
    button.addEventListener('click', () => {
        const taskElement = button.parentElement;
        const taskId = taskElement.getAttribute('data-id')
        const currentTask = taskElement.querySelector('.task-text').textContent.trim();

        openModal(taskId, currentTask)

    })
})