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

