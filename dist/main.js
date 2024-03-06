/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);



function todo (name, time, date, project){
    this.name=name;
    this.time=time;
    this.date=date;
    this.project=project
};
function addToList(name,time,date,project){
    todoList.push(new todo(name,time,date,project));
};

function displayTodo(index){
    let todo = document.createElement('div');
    let todos = document.getElementById("todos");
    todo.classList.add("todo");
    if(todoList[index].project!=""){
        todo.classList.add(todoList[index].project);
        let proj = document.getElementById(todoList[index].project);
        if(!proj){
            let nav = document.getElementById("nav")
            let button = document.createElement("button");
            button.id=todoList[index].project;
            button.innerHTML = todoList[index].project;
            nav.append(button);

        }
        
    }
    todo.innerHTML=JSON.stringify(todoList[index],null,4);
    todos.append(todo);

}
let todoList = [];
let add = document.getElementById("add");
let dialog = document.getElementById("addTodo");
let index=0;
add.addEventListener("click",()=>{
    dialog.showModal();
    console.log("CLICK");

});

let cancel=document.getElementById("cancelButton");
cancel.addEventListener("click",()=>{
    dialog.close();
});

let submit = document.getElementById("submitButton");
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let myForm=document.getElementById("myForm");
    let todoName=document.getElementById("todoNameInput").value;
    let todoTime=document.getElementById("todoTimeInput").value;
    let todoDate=document.getElementById("todoDateInput").value;
    let todoProject=document.getElementById("todoProjectInput").value;
    addToList(todoName,todoTime,todoDate,todoProject);
    displayTodo(index);
    index++;
    myForm.reset();
    dialog.close();
    console.log(todoList)
});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmb3JtYXQsIGNvbXBhcmVBc2MgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcblxyXG5mdW5jdGlvbiB0b2RvIChuYW1lLCB0aW1lLCBkYXRlLCBwcm9qZWN0KXtcclxuICAgIHRoaXMubmFtZT1uYW1lO1xyXG4gICAgdGhpcy50aW1lPXRpbWU7XHJcbiAgICB0aGlzLmRhdGU9ZGF0ZTtcclxuICAgIHRoaXMucHJvamVjdD1wcm9qZWN0XHJcbn07XHJcbmZ1bmN0aW9uIGFkZFRvTGlzdChuYW1lLHRpbWUsZGF0ZSxwcm9qZWN0KXtcclxuICAgIHRvZG9MaXN0LnB1c2gobmV3IHRvZG8obmFtZSx0aW1lLGRhdGUscHJvamVjdCkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRvZG8oaW5kZXgpe1xyXG4gICAgbGV0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCB0b2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3NcIik7XHJcbiAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xyXG4gICAgaWYodG9kb0xpc3RbaW5kZXhdLnByb2plY3QhPVwiXCIpe1xyXG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCh0b2RvTGlzdFtpbmRleF0ucHJvamVjdCk7XHJcbiAgICAgICAgbGV0IHByb2ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvTGlzdFtpbmRleF0ucHJvamVjdCk7XHJcbiAgICAgICAgaWYoIXByb2ope1xyXG4gICAgICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIilcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pZD10b2RvTGlzdFtpbmRleF0ucHJvamVjdDtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IHRvZG9MaXN0W2luZGV4XS5wcm9qZWN0O1xyXG4gICAgICAgICAgICBuYXYuYXBwZW5kKGJ1dHRvbik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHRvZG8uaW5uZXJIVE1MPUpTT04uc3RyaW5naWZ5KHRvZG9MaXN0W2luZGV4XSxudWxsLDQpO1xyXG4gICAgdG9kb3MuYXBwZW5kKHRvZG8pO1xyXG5cclxufVxyXG5sZXQgdG9kb0xpc3QgPSBbXTtcclxubGV0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkXCIpO1xyXG5sZXQgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb2RvXCIpO1xyXG5sZXQgaW5kZXg9MDtcclxuYWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNMSUNLXCIpO1xyXG5cclxufSk7XHJcblxyXG5sZXQgY2FuY2VsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsQnV0dG9uXCIpO1xyXG5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG59KTtcclxuXHJcbmxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdEJ1dHRvblwiKTtcclxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChldmVudCk9PntcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgbXlGb3JtPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpO1xyXG4gICAgbGV0IHRvZG9OYW1lPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb05hbWVJbnB1dFwiKS52YWx1ZTtcclxuICAgIGxldCB0b2RvVGltZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9UaW1lSW5wdXRcIikudmFsdWU7XHJcbiAgICBsZXQgdG9kb0RhdGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvRGF0ZUlucHV0XCIpLnZhbHVlO1xyXG4gICAgbGV0IHRvZG9Qcm9qZWN0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb1Byb2plY3RJbnB1dFwiKS52YWx1ZTtcclxuICAgIGFkZFRvTGlzdCh0b2RvTmFtZSx0b2RvVGltZSx0b2RvRGF0ZSx0b2RvUHJvamVjdCk7XHJcbiAgICBkaXNwbGF5VG9kbyhpbmRleCk7XHJcbiAgICBpbmRleCsrO1xyXG4gICAgbXlGb3JtLnJlc2V0KCk7XHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgIGNvbnNvbGUubG9nKHRvZG9MaXN0KVxyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==