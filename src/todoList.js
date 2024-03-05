import { format, compareAsc } from "date-fns";

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

