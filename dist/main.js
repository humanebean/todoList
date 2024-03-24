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
    let todoName = document.createElement('div');
    todoName.innerHTML= todoList[index].name;
    todoName.classList.add("name");
    let todoTime = document.createElement('div');
    todoTime.innerHTML= todoList[index].time;
    todoTime.classList.add("time");
    let todoDate = document.createElement('div');
    todoDate.innerHTML= todoList[index].date;
    todoDate.classList.add("date");
    let todoProject = document.createElement('div');
    todoProject.innerHTML= todoList[index].project;
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
        todo.classList.add(todoList[index].project);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmb3JtYXQsIGNvbXBhcmVBc2MgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcblxyXG5mdW5jdGlvbiB0b2RvIChuYW1lLCB0aW1lLCBkYXRlLCBwcm9qZWN0KXtcclxuICAgIHRoaXMubmFtZT1uYW1lO1xyXG4gICAgdGhpcy50aW1lPXRpbWU7XHJcbiAgICB0aGlzLmRhdGU9ZGF0ZTtcclxuICAgIHRoaXMucHJvamVjdD1wcm9qZWN0XHJcbn07XHJcbmZ1bmN0aW9uIGFkZFRvTGlzdChuYW1lLHRpbWUsZGF0ZSxwcm9qZWN0KXtcclxuICAgIHRvZG9MaXN0LnB1c2gobmV3IHRvZG8obmFtZSx0aW1lLGRhdGUscHJvamVjdCkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVzZXQoKXtcclxuICAgIGxldCB0b2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3NcIik7XHJcbiAgICB0b2Rvcy5pbm5lckhUTUw9XCJcIjtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG9Ub0RvbShpbmRleCx0b2RvKXtcclxuICAgXHJcbiAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xyXG4gICAgbGV0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvTmFtZS5pbm5lckhUTUw9IHRvZG9MaXN0W2luZGV4XS5uYW1lO1xyXG4gICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgICBsZXQgdG9kb1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9UaW1lLmlubmVySFRNTD0gdG9kb0xpc3RbaW5kZXhdLnRpbWU7XHJcbiAgICB0b2RvVGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcclxuICAgIGxldCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb0RhdGUuaW5uZXJIVE1MPSB0b2RvTGlzdFtpbmRleF0uZGF0ZTtcclxuICAgIHRvZG9EYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xyXG4gICAgbGV0IHRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvUHJvamVjdC5pbm5lckhUTUw9IHRvZG9MaXN0W2luZGV4XS5wcm9qZWN0O1xyXG4gICAgdG9kb1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcbiAgICB0b2RvLmFwcGVuZCh0b2RvTmFtZSwgdG9kb1Byb2plY3QsIHRvZG9UaW1lLCB0b2RvRGF0ZSApO1xyXG4gICAgcmV0dXJuIHRvZG87XHJcbiAgICBcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5QWxsKCl7XHJcbiAgICByZXNldCgpO1xyXG4gICAgbGV0IGNvdW50ZXI9MDtcclxuICAgIHdoaWxlIChjb3VudGVyPHRvZG9MaXN0Lmxlbmd0aCl7XHJcbiAgICAgICAgbGV0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGQ9YWRkVG9kb1RvRG9tKGNvdW50ZXIsdGQpXHJcbiAgICAgICAgdG9kb3MuYXBwZW5kKHRkKTtcclxuICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGlzcGxheVRvZG8oaW5kZXgsZXhpc3RpbmdQcm9qKXtcclxuICAgICAgICBsZXQgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRvZG8gPSBhZGRUb2RvVG9Eb20oaW5kZXgsdG9kbyk7XHJcbiAgICBpZih0b2RvTGlzdFtpbmRleF0ucHJvamVjdCE9XCJcIil7XHJcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKHRvZG9MaXN0W2luZGV4XS5wcm9qZWN0KTtcclxuICAgICAgICBsZXQgcHJvaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG9MaXN0W2luZGV4XS5wcm9qZWN0KTtcclxuICAgICAgICBpZighcHJvail7XHJcbiAgICAgICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKVxyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmlkPXRvZG9MaXN0W2luZGV4XS5wcm9qZWN0O1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gdG9kb0xpc3RbaW5kZXhdLnByb2plY3Q7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgbmF2LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZGlzYWJsZWQ9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkPXRydWU7XHJcbiAgICAgICAgICAgICAgICByZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ZXI9MDtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChjb3VudGVyPHRvZG9MaXN0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodG9kb0xpc3RbY291bnRlcl0ucHJvamVjdD09YnV0dG9uLmlubmVySFRNTCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZD1hZGRUb2RvVG9Eb20oY291bnRlcix0ZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb3MuYXBwZW5kKHRkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmF2LmFwcGVuZChidXR0b24pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKGV4aXN0aW5nUHJvail7XHJcbiAgICAgICAgdG9kb3MuYXBwZW5kKHRvZG8pO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG59XHJcbmxldCB0b2RvTGlzdCA9IFtdO1xyXG5sZXQgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIik7XHJcbmxldCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvZG9cIik7XHJcbmxldCBpbmRleD0wO1xyXG5hZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiQ0xJQ0tcIik7XHJcblxyXG59KTtcclxuXHJcbmxldCBjYW5jZWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxCdXR0b25cIik7XHJcbmNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgZGlhbG9nLmNsb3NlKCk7XHJcbn0pO1xyXG5sZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIilcclxubGV0IHRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvc1wiKTtcclxubGV0IGFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQWxsXCIpO1xyXG5hbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgbmF2LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgY2hpbGQuZGlzYWJsZWQ9ZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbmF2LmNoaWxkcmVuWzBdLmRpc2FibGVkPXRydWU7XHJcbiAgICBkaXNwbGF5QWxsKCk7XHJcbn0pXHJcbm5hdi5jaGlsZHJlblswXS5kaXNhYmxlZD10cnVlO1xyXG5sZXQgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRCdXR0b25cIik7XHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZXZlbnQpPT57XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IG15Rm9ybT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKTtcclxuICAgIGxldCB0b2RvTmFtZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9OYW1lSW5wdXRcIikudmFsdWU7XHJcbiAgICBsZXQgdG9kb1RpbWU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvVGltZUlucHV0XCIpLnZhbHVlO1xyXG4gICAgbGV0IHRvZG9EYXRlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb0RhdGVJbnB1dFwiKS52YWx1ZTtcclxuICAgIGxldCB0b2RvUHJvamVjdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9Qcm9qZWN0SW5wdXRcIikudmFsdWU7XHJcbiAgICBhZGRUb0xpc3QodG9kb05hbWUsdG9kb1RpbWUsdG9kb0RhdGUsdG9kb1Byb2plY3QpO1xyXG4gICAgXHJcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5hdi5jaGlsZHJlbikge1xyXG4gICAgICAgIGlmIChjaGlsZC5kaXNhYmxlZCl7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5pbm5lckhUTUw9PVwiQWxsXCIgfHwgY2hpbGQuaW5uZXJIVE1MPT10b2RvUHJvamVjdCl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VG9kbyhpbmRleCx0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheVRvZG8oaW5kZXgsZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBpbmRleCsrO1xyXG4gICAgbXlGb3JtLnJlc2V0KCk7XHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgIGNvbnNvbGUubG9nKHRvZG9MaXN0KVxyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==