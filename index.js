const todoInput = document.getElementById("todo-input");
const addTodo = document.getElementById("add-todo");
const todoItems = document.getElementById("todo-items");

addTodo.addEventListener("click", function (event) {
    event.preventDefault();
    if (todoInput.value === "") return;
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;
    todoItems.appendChild(newTodo);
    todoInput.value = "";
    addDeleteButton(newTodo);
    addCompleteButton(newTodo);
});

function addDeleteButton(todoItem) {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
        todoItem.remove();
    });
    todoItem.appendChild(deleteButton);
}

function addCompleteButton(todoItem) {
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "Complete";
    completeButton.addEventListener("click", function () {
        todoItem.classList.toggle("completed");
    });
    todoItem.appendChild(completeButton);
}
