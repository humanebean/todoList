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


console.log("TEST");
function todo (name, time, date){
    this.name=name;
    this.time=time;
    this.date=date;
};
function addToList(name,time,date){
    todoList.push(new todo(name,time,date));
};
let todoList = [];
let add = document.getElementById("add");
let dialog = document.getElementById("addTodo");

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
    addToList(todoName,todoTime,todoDate);
    myForm.reset();
    dialog.close();
    console.log(todoList)
});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYyB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuY29uc29sZS5sb2coXCJURVNUXCIpO1xyXG5mdW5jdGlvbiB0b2RvIChuYW1lLCB0aW1lLCBkYXRlKXtcclxuICAgIHRoaXMubmFtZT1uYW1lO1xyXG4gICAgdGhpcy50aW1lPXRpbWU7XHJcbiAgICB0aGlzLmRhdGU9ZGF0ZTtcclxufTtcclxuZnVuY3Rpb24gYWRkVG9MaXN0KG5hbWUsdGltZSxkYXRlKXtcclxuICAgIHRvZG9MaXN0LnB1c2gobmV3IHRvZG8obmFtZSx0aW1lLGRhdGUpKTtcclxufTtcclxubGV0IHRvZG9MaXN0ID0gW107XHJcbmxldCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiKTtcclxubGV0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVG9kb1wiKTtcclxuXHJcbmFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJDTElDS1wiKTtcclxuXHJcbn0pO1xyXG5cclxubGV0IGNhbmNlbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbEJ1dHRvblwiKTtcclxuY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxufSk7XHJcblxyXG5sZXQgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRCdXR0b25cIik7XHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZXZlbnQpPT57XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IG15Rm9ybT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKTtcclxuICAgIGxldCB0b2RvTmFtZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9OYW1lSW5wdXRcIikudmFsdWU7XHJcbiAgICBsZXQgdG9kb1RpbWU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvVGltZUlucHV0XCIpLnZhbHVlO1xyXG4gICAgbGV0IHRvZG9EYXRlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb0RhdGVJbnB1dFwiKS52YWx1ZTtcclxuICAgIGFkZFRvTGlzdCh0b2RvTmFtZSx0b2RvVGltZSx0b2RvRGF0ZSk7XHJcbiAgICBteUZvcm0ucmVzZXQoKTtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgY29uc29sZS5sb2codG9kb0xpc3QpXHJcbn0pO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9