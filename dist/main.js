/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
console.log("TEST");
function todo (name, time, date){
    this.name=name;
    this.time=time;
    this.date=date;
}
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
    myForm.reset();
    dialog.close();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiVEVTVFwiKTtcclxuZnVuY3Rpb24gdG9kbyAobmFtZSwgdGltZSwgZGF0ZSl7XHJcbiAgICB0aGlzLm5hbWU9bmFtZTtcclxuICAgIHRoaXMudGltZT10aW1lO1xyXG4gICAgdGhpcy5kYXRlPWRhdGU7XHJcbn1cclxubGV0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkXCIpO1xyXG5sZXQgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb2RvXCIpO1xyXG5cclxuYWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNMSUNLXCIpO1xyXG5cclxufSk7XHJcblxyXG5sZXQgY2FuY2VsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsQnV0dG9uXCIpO1xyXG5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG59KTtcclxuXHJcbmxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdEJ1dHRvblwiKTtcclxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChldmVudCk9PntcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgbXlGb3JtPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpO1xyXG4gICAgbXlGb3JtLnJlc2V0KCk7XHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==