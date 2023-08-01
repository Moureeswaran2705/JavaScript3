// Get necessary DOM elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

// Add event listener to the Add button
addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    addTaskToList(taskText);
    taskInput.value = '';
  }
});

// Function to add a new task to the list
function addTaskToList(taskText) {
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-button">Delete</button>
  `;
  taskList.appendChild(taskItem);

  // Add event listener to the Delete button
  const deleteButton = taskItem.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    taskItem.remove();
  });

  // Add event listener to mark task as completed
  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });
}
