// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
// import * as bootstrap from "bootstrap";

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
    document.querySelector("#Description").removeAttribute("required");
    document.querySelector("#title").removeAttribute("required");
    document.querySelector("#Date").removeAttribute("required");
    addTaskForm.classList.add("d-none");
  }
}

function displayAllTasks() {
  const allTasksList = document.querySelector(".all-tasks-list");
  allTasksList.innerHTML = "";
  myToDoList.forEach((task) => {
    const aTask = document.createElement("div");
    aTask.innerHTML = `
    <div class="border border-dark d-flex flex-column flex-md-row  mb-3 align-items-start pt-3 justify-content-around">
    <input class="read-checkbox" type="checkbox" value="" id="flexCheckDefault">
    <h3 class="task-title">${task.title}</h3>
    <p class="task-description">${task.description}</p>
    <div class="date-div d-flex align-items-center justify-content-center">
      <p class="border border-dark">${task.dueDate}</p>
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
  document.querySelector("#Description").setAttribute("required", true);
  document.querySelector("#title").setAttribute("required", true);
  document.querySelector("#Date").setAttribute("required", true);
}

function cancelTaskForm() {
  const addTaskForm = document.querySelector("#add-class-form");
  addTaskForm.reset();
  addTaskForm.classList.add("d-none");
}

const openTaskButton = document.querySelector(".open-task-form-button");
openTaskButton.addEventListener("click", openTaskForm);
