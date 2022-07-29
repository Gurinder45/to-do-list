// Selectors
const taskInput = document.querySelector(".task-input");
const submitBtn = document.querySelector(".submit-btn");
const taskList = document.querySelector(".task-list");

document.addEventListener("DOMContentLoaded", getTasks);

function createTask(text) {
  // create div to hold a task and append it onto the tasklist
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const newTasks = document.createElement("li");
  newTasks.innerText = text;
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
}

submitBtn.addEventListener("click", function (event) {
  // Stop page from refreshing
  event.preventDefault();
  createTask(taskInput.value);
  localSave(taskInput.value);
  //clear value in input field
  taskInput.value = "";
});

// handle done and delete buttons
taskList.addEventListener("click", function (event) {
  const selected = event.target;
  if (selected.classList[0] === "delete-btn") {
    const task = selected.parentElement;
    localDelete(task);
    task.remove();
  }
  if (selected.classList[0] === "done-btn") {
    const task = selected.parentElement;
    task.classList.toggle("finished-task");
  }
});

function localSave(task) {
  // see if we already have tasks in local storage
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  // see if we already have tasks in local storage
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task) {
    createTask(task);
  });
}

function localDelete(task) {
  // see if we already have tasks in local storage
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  const index = task.children[0].innerText;
  tasks.splice(tasks.indexOf(index), 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
