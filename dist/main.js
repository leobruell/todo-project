/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTXlUb0RvSXRlbSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgY29tcGxldGUgPSBmYWxzZSxcbiAgICBwcm9qZWN0ID0gW11cbiAgKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIG1hcmtDb21wbGV0ZSgpIHtcbiAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvak5hbWUpIHtcbiAgICB0aGlzLnByb2plY3QucHVzaChwcm9qTmFtZSk7XG4gIH1cbn1cblxuY29uc3QgbXlUb0RvTGlzdCA9IFtdO1xuXG5jb25zdCBteVRvRG8gPSBuZXcgTXlUb0RvSXRlbShcInRlc3RcIiwgXCJ0aGlzIGlzIGEgdGFza1wiLCBcInRvZGF5XCIsIFwiaGlnaFwiKTtcbmNvbnNvbGUubG9nKG15VG9Ebyk7XG5teVRvRG8ubWFya0NvbXBsZXRlKCk7XG5teVRvRG8uYWRkUHJvamVjdChcImEgcHJvamVjdFwiKTtcbmNvbnNvbGUubG9nKG15VG9Ebyk7XG5cbm15VG9Eb0xpc3QucHVzaChteVRvRG8pO1xuY29uc29sZS5sb2cobXlUb0RvTGlzdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=