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
  newTasks.innerText = taskInput.value;
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
  //clear value in input fie ld
  taskInput.value = "";
});

// handle done and delete buttons
taskList.addEventListener("click", function (event) {
  const selected = event.target;
  if (selected.classList[0] === "delete-btn") {
    const task = selected.parentElement;
    task.remove();
  }
  if (selected.classList[0] === "done-btn") {
    const task = selected.parentElement;
    task.classList.toggle("finished-task");
  }
});
