const addBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");

addBtn.addEventListener("click", () => {
  // Create the list item
  const newTask = document.createElement("li");
  newTask.textContent = taskInput.value;

  // Create the remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.style.marginLeft = "10px";
  
  taskList.appendChild(newTask);
  newTask.appendChild(removeBtn);

  taskInput.value = "";
  
  removeBtn.addEventListener("click", () => {
    newTask.remove();
  });
});
