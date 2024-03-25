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

function reset(){
    let todos = document.getElementById("todos");
    todos.innerHTML="";

}

function addTodoToDom(index,todo){
   
    todo.classList.add("todo");
    let todoName =document.createElement('div');
    todoName.innerHTML= "What: " + todoList[index].name;
    todoName.classList.add("name");
    let todoTime = document.createElement('div');
    todoTime.innerHTML= "Time: " +  todoList[index].time;
    todoTime.classList.add("time");
    let todoDate =document.createElement('div');
    todoDate.innerHTML= "Date: " +  todoList[index].date;
    todoDate.classList.add("date");
    let todoProject =document.createElement('div');
    todoProject.innerHTML= "Folder: " +  todoList[index].project;
    todoProject.classList.add("project");
    todo.append(todoName, todoProject, todoTime, todoDate );
    return todo;
    
}
function displayAll(){
    reset();
    let counter=0;
    while (counter<todoList.length){
        let td = document.createElement('div');
        td=addTodoToDom(counter,td)
        todos.append(td);
        counter++;
        
    }
}
function displayTodo(index,existingProj){
        let todo = document.createElement('div');
        todo = addTodoToDom(index,todo);
    if(todoList[index].project!=""){
        todo.classList.add(todoList[index].project.replace(/ /g,''));
        let proj = document.getElementById(todoList[index].project);
        if(!proj){
            let nav = document.getElementById("nav")
            let button = document.createElement("button");
            button.id=todoList[index].project;
            button.innerHTML = todoList[index].project;
            
            button.addEventListener("click",()=>{
                for (const child of nav.children) {
                    child.disabled=false;
                  }
                  button.disabled=true;
                reset();
                let counter=0;
                while (counter<todoList.length){
                    if(todoList[counter].project==button.innerHTML){
                        let td = document.createElement('div');
                        td=addTodoToDom(counter,td)
                        todos.append(td);
                    }
                    counter++;
                    
                }
            });
            nav.append(button);

        }
        
    }
    
    if(existingProj){
        todos.append(todo);
    }
    

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
let nav = document.getElementById("nav")
let todos = document.getElementById("todos");
let all = document.getElementById("All");
all.addEventListener("click",()=>{
    for (const child of nav.children) {
        child.disabled=false;
      }
      nav.children[0].disabled=true;
    displayAll();
})
nav.children[0].disabled=true;
let submit = document.getElementById("submitButton");
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let myForm=document.getElementById("myForm");
    let todoName=document.getElementById("todoNameInput").value;
    let todoTime=document.getElementById("todoTimeInput").value;
    let todoDate=document.getElementById("todoDateInput").value;
    let todoProject=document.getElementById("todoProjectInput").value;
    addToList(todoName,todoTime,todoDate,todoProject);
    
    for (const child of nav.children) {
        if (child.disabled){
            if (child.innerHTML=="All" || child.innerHTML==todoProject){
                displayTodo(index,true);
            }
            else{
                displayTodo(index,false);
            }
        }
      }
    index++;
    myForm.reset();
    dialog.close();
    console.log(todoList)
});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmb3JtYXQsIGNvbXBhcmVBc2MgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcblxyXG5mdW5jdGlvbiB0b2RvIChuYW1lLCB0aW1lLCBkYXRlLCBwcm9qZWN0KXtcclxuICAgIHRoaXMubmFtZT1uYW1lO1xyXG4gICAgdGhpcy50aW1lPXRpbWU7XHJcbiAgICB0aGlzLmRhdGU9ZGF0ZTtcclxuICAgIHRoaXMucHJvamVjdD1wcm9qZWN0XHJcbn07XHJcbmZ1bmN0aW9uIGFkZFRvTGlzdChuYW1lLHRpbWUsZGF0ZSxwcm9qZWN0KXtcclxuICAgIHRvZG9MaXN0LnB1c2gobmV3IHRvZG8obmFtZSx0aW1lLGRhdGUscHJvamVjdCkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVzZXQoKXtcclxuICAgIGxldCB0b2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3NcIik7XHJcbiAgICB0b2Rvcy5pbm5lckhUTUw9XCJcIjtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG9Ub0RvbShpbmRleCx0b2RvKXtcclxuICAgXHJcbiAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xyXG4gICAgbGV0IHRvZG9OYW1lID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9OYW1lLmlubmVySFRNTD0gXCJXaGF0OiBcIiArIHRvZG9MaXN0W2luZGV4XS5uYW1lO1xyXG4gICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgICBsZXQgdG9kb1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9UaW1lLmlubmVySFRNTD0gXCJUaW1lOiBcIiArICB0b2RvTGlzdFtpbmRleF0udGltZTtcclxuICAgIHRvZG9UaW1lLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xyXG4gICAgbGV0IHRvZG9EYXRlID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9EYXRlLmlubmVySFRNTD0gXCJEYXRlOiBcIiArICB0b2RvTGlzdFtpbmRleF0uZGF0ZTtcclxuICAgIHRvZG9EYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xyXG4gICAgbGV0IHRvZG9Qcm9qZWN0ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9Qcm9qZWN0LmlubmVySFRNTD0gXCJGb2xkZXI6IFwiICsgIHRvZG9MaXN0W2luZGV4XS5wcm9qZWN0O1xyXG4gICAgdG9kb1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcbiAgICB0b2RvLmFwcGVuZCh0b2RvTmFtZSwgdG9kb1Byb2plY3QsIHRvZG9UaW1lLCB0b2RvRGF0ZSApO1xyXG4gICAgcmV0dXJuIHRvZG87XHJcbiAgICBcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5QWxsKCl7XHJcbiAgICByZXNldCgpO1xyXG4gICAgbGV0IGNvdW50ZXI9MDtcclxuICAgIHdoaWxlIChjb3VudGVyPHRvZG9MaXN0Lmxlbmd0aCl7XHJcbiAgICAgICAgbGV0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGQ9YWRkVG9kb1RvRG9tKGNvdW50ZXIsdGQpXHJcbiAgICAgICAgdG9kb3MuYXBwZW5kKHRkKTtcclxuICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGlzcGxheVRvZG8oaW5kZXgsZXhpc3RpbmdQcm9qKXtcclxuICAgICAgICBsZXQgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRvZG8gPSBhZGRUb2RvVG9Eb20oaW5kZXgsdG9kbyk7XHJcbiAgICBpZih0b2RvTGlzdFtpbmRleF0ucHJvamVjdCE9XCJcIil7XHJcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKHRvZG9MaXN0W2luZGV4XS5wcm9qZWN0LnJlcGxhY2UoLyAvZywnJykpO1xyXG4gICAgICAgIGxldCBwcm9qID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb0xpc3RbaW5kZXhdLnByb2plY3QpO1xyXG4gICAgICAgIGlmKCFwcm9qKXtcclxuICAgICAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpXHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidXR0b24uaWQ9dG9kb0xpc3RbaW5kZXhdLnByb2plY3Q7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSB0b2RvTGlzdFtpbmRleF0ucHJvamVjdDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBuYXYuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5kaXNhYmxlZD1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBidXR0b24uZGlzYWJsZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnRlcj0wO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGNvdW50ZXI8dG9kb0xpc3QubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0b2RvTGlzdFtjb3VudGVyXS5wcm9qZWN0PT1idXR0b24uaW5uZXJIVE1MKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRkPWFkZFRvZG9Ub0RvbShjb3VudGVyLHRkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2Rvcy5hcHBlbmQodGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBuYXYuYXBwZW5kKGJ1dHRvbik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYoZXhpc3RpbmdQcm9qKXtcclxuICAgICAgICB0b2Rvcy5hcHBlbmQodG9kbyk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn1cclxubGV0IHRvZG9MaXN0ID0gW107XHJcbmxldCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiKTtcclxubGV0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVG9kb1wiKTtcclxubGV0IGluZGV4PTA7XHJcbmFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJDTElDS1wiKTtcclxuXHJcbn0pO1xyXG5cclxubGV0IGNhbmNlbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbEJ1dHRvblwiKTtcclxuY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxufSk7XHJcbmxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKVxyXG5sZXQgdG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zXCIpO1xyXG5sZXQgYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBbGxcIik7XHJcbmFsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBuYXYuY2hpbGRyZW4pIHtcclxuICAgICAgICBjaGlsZC5kaXNhYmxlZD1mYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBuYXYuY2hpbGRyZW5bMF0uZGlzYWJsZWQ9dHJ1ZTtcclxuICAgIGRpc3BsYXlBbGwoKTtcclxufSlcclxubmF2LmNoaWxkcmVuWzBdLmRpc2FibGVkPXRydWU7XHJcbmxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdEJ1dHRvblwiKTtcclxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChldmVudCk9PntcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgbXlGb3JtPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpO1xyXG4gICAgbGV0IHRvZG9OYW1lPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb05hbWVJbnB1dFwiKS52YWx1ZTtcclxuICAgIGxldCB0b2RvVGltZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9UaW1lSW5wdXRcIikudmFsdWU7XHJcbiAgICBsZXQgdG9kb0RhdGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvRGF0ZUlucHV0XCIpLnZhbHVlO1xyXG4gICAgbGV0IHRvZG9Qcm9qZWN0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb1Byb2plY3RJbnB1dFwiKS52YWx1ZTtcclxuICAgIGFkZFRvTGlzdCh0b2RvTmFtZSx0b2RvVGltZSx0b2RvRGF0ZSx0b2RvUHJvamVjdCk7XHJcbiAgICBcclxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgbmF2LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkLmRpc2FibGVkKXtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLmlubmVySFRNTD09XCJBbGxcIiB8fCBjaGlsZC5pbm5lckhUTUw9PXRvZG9Qcm9qZWN0KXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlUb2RvKGluZGV4LHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VG9kbyhpbmRleCxmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGluZGV4Kys7XHJcbiAgICBteUZvcm0ucmVzZXQoKTtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgY29uc29sZS5sb2codG9kb0xpc3QpXHJcbn0pO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9