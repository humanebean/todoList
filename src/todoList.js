import { format, compareAsc } from "date-fns";


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

