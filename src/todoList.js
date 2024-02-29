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
