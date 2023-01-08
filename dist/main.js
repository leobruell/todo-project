/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFdBQVc7QUFDM0Qsa0NBQWtDLGlCQUFpQjtBQUNuRCwwQkFBMEIsYUFBYTtBQUN2QztBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE15VG9Eb0l0ZW0ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGNvbXBsZXRlID0gZmFsc2UsIHByb2plY3QgPSBbXSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIG1hcmtDb21wbGV0ZSgpIHtcbiAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvak5hbWUpIHtcbiAgICB0aGlzLnByb2plY3QucHVzaChwcm9qTmFtZSk7XG4gIH1cbn1cblxuY29uc3QgbXlUb0RvTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBhZGRUYXNrKGV2ZW50KSB7XG4gIGNvbnN0IHRoZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZSBpbnB1dFwiKS52YWx1ZTtcbiAgY29uc3QgdGhlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uIGlucHV0XCIpLnZhbHVlO1xuICBjb25zdCB0aGVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlIGlucHV0XCIpLnZhbHVlO1xuICBjb25zdCBuZXdUYXNrID0gbmV3IE15VG9Eb0l0ZW0odGhlVGl0bGUsIHRoZURlc2NyaXB0aW9uLCB0aGVEYXRlKTtcbiAgbXlUb0RvTGlzdC5wdXNoKG5ld1Rhc2spO1xuICBjb25zb2xlLmxvZyhteVRvRG9MaXN0KTtcbiAgZGlzcGxheUFsbFRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcbiAgY29uc3QgYWxsVGFza3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtdGFza3MtbGlzdFwiKTtcbiAgbXlUb0RvTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgYVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFUYXNrLmNsYXNzTGlzdC5hZGQoXCJhLXRhc2tcIik7XG4gICAgYVRhc2suaW5uZXJIVE1MID0gYDxoMyBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9oMz5cbiAgICA8cCBjbGFzcz1cInRhc2stZGVzY3JpcHRpb25cIj4ke3Rhc2suZGVzY3JpcHRpb259PC9wPlxuICAgIDxwIGNsYXNzPVwidGFzay1kdWVcIj4ke3Rhc2suZHVlRGF0ZX08L3A+YDtcbiAgICBhbGxUYXNrc0xpc3QuYXBwZW5kQ2hpbGQoYVRhc2spO1xuICB9KTtcbn1cblxuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LXRhc2stZm9ybS1idXR0b25cIik7XG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==