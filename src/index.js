class MyToDoItem {
  constructor(
    title,
    description,
    dueDate,
    priority,
    complete = false,
    project = []
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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

const myToDo = new MyToDoItem("test", "this is a task", "today", "high");
console.log(myToDo);
myToDo.markComplete();
myToDo.addProject("a project");
console.log(myToDo);

myToDoList.push(myToDo);
console.log(myToDoList);
