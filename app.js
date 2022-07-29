// Selectors
const taskInput = document.querySelector(".task-input");
const submitBtn = document.querySelector(".submit-btn");
const taskList = document.querySelector(".task-list");

submitBtn.addEventListener("click", function (event) {
  // Stop page from refreshing
  event.preventDefault();
  // create div to hold a task, done button, and a delete button
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const newTasks = document.createElement("li");
  newTasks.classList.add("new-task");
  taskDiv.appendChild(newTasks);

  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  doneBtn.classList.add("done-btn");
  taskDiv.appendChild(doneBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  deleteBtn.classList.add("delete-btn");
  taskDiv.appendChild(deleteBtn);

  taskList.appendChild(taskDiv);
});
