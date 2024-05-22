const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const newTodoInput = document.getElementById("new-todo");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", function() {
  const newTodoValue = newTodoInput.value.trim();

  if (newTodoValue) {
    const newTodoItem = document.createElement("li");
    newTodoItem.innerText = newTodoValue;
    todoList.appendChild(newTodoItem);

    newTodoInput.value = "";
  }



});
