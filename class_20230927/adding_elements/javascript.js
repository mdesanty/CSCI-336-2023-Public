document.addEventListener('DOMContentLoaded', function() {
  const addTodoBtn = document.getElementById('add-todo-btn');

  addTodoBtn.addEventListener('click', function() {
    // Get the text from the text input
    const todoInput = document.getElementsByClassName('todo-input')[0];
    const todoValue = todoInput.value;

    // Create an li element with that text for the ul
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoValue;

    // Adding the li element to the ul
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(newTodo);

    // Clear the text input
    todoInput.value = '';
  });
});
