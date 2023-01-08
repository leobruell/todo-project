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
  const theTitle = document.querySelector(".title input").value;
  const theDescription = document.querySelector(".description input").value;
  const theDate = document.querySelector(".date input").value;
  const newTask = new MyToDoItem(theTitle, theDescription, theDate);
  myToDoList.push(newTask);
  console.log(myToDoList);
  displayAllTasks();
}

function displayAllTasks() {
  const allTasksList = document.querySelector(".all-tasks-list");
  myToDoList.forEach((task) => {
    const aTask = document.createElement("div");
    aTask.classList.add("a-task");
    aTask.innerHTML = `<h3 class="task-title">${task.title}</h3>
    <p class="task-description">${task.description}</p>
    <p class="task-due">${task.dueDate}</p>`;
    allTasksList.appendChild(aTask);
  });
}

const addTaskButton = document.querySelector(".submit-task-form-button");
addTaskButton.addEventListener("click", addTask);
