// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

class MyToDoItem {
  constructor(title, description, dueDate, complete = false, project = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.complete = complete;
    this.project = project;
  }

  markComplete() {
    this.complete = true;
  }

  addProject(projName) {
    this.project.push(projName);
  }
}

const myToDoList = [];

function addTask(event) {
  const theTitle = document.querySelector("#title").value;
  const theDescription = document.querySelector("#Description").value;
  const theDate = document.querySelector("#Date").value;
  const newTask = new MyToDoItem(theTitle, theDescription, theDate);
  if (theTitle != "" && theDescription != "" && theDate != "") {
    myToDoList.push(newTask);
    displayAllTasks();
    const addTaskForm = document.querySelector("#add-class-form");
    addTaskForm.reset();
    addTaskForm.classList.add("d-none");
  }
}

function displayAllTasks() {
  const allTasksList = document.querySelector(".all-tasks-list");
  allTasksList.innerHTML = "";
  myToDoList.forEach((task) => {
    const aTask = document.createElement("div");
    aTask.innerHTML = `<div class="border border-dark d-flex flex-row justify-content-between ps-4 pe-5 pt-2 mb-3">
    <h3 class="task-title">${task.title}</h3>
    <p class="task-description">${task.description}</p>
    <div class="date-div">
      <p class="border border-dark p-1">${task.dueDate}</p>
    </div>
  </div>`;
    allTasksList.appendChild(aTask);
  });
}

function openTaskForm() {
  const addTaskForm = document.querySelector("#add-class-form");
  addTaskForm.classList.remove("d-none");
  const addTaskButton = document.querySelector(".add-task-button");
  const cancelTaskButton = document.querySelector(".cancel-task-button");
  cancelTaskButton.addEventListener("click", cancelTaskForm);
  addTaskButton.addEventListener("click", addTask);
}

function cancelTaskForm() {
  const addTaskForm = document.querySelector("#add-class-form");
  addTaskForm.reset();
  addTaskForm.classList.add("d-none");
}

const openTaskButton = document.querySelector(".open-task-form-button");
openTaskButton.addEventListener("click", openTaskForm);
