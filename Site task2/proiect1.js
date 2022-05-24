var newTask= document.querySelector('#newTask');
var errorMessage="Please use minimum 3 chraracters!"
var greetingMessage="Congratulation, you have no tasks today!"
var btnSubmit = document.querySelector('#btnSubmit');
btnSubmit.addEventListener("click", addTask)
var tasks = document.querySelector("#tasks");
var message = document.querySelector("#message")
message.innerText=greetingMessage
var btnClear = document.querySelector("#btnClear");

tasks.addEventListener("click", handleTask)

btnClear.addEventListener("click", clearList);


function clearList(){
    var list = tasks.getElementsByClassName("list-group-item");
    
    while(list.length > 0){
        list[0].parentNode.removeChild(list[0]);
        message.innerHTML=greetingMessage
    }
}


function handleTask(event){
     var style= event.target.style
    if (!style.textDecoration) { 
    style.textDecoration = "line-through";
}
   else{
       style.textDecoration=""
   }
     
}


function addTask(){
    if(inputIsValid(newTask.value) && newTask.value.length>2){
        tasks.innerHTML += '<li class=list-group-item>' + newTask.value + '</li>';
        message.innerText = "Never Give Up!"
        message.style.color = "Blue"
        newTask.value=""
    }
    else {
        message.innerText=errorMessage
        message.style.visibility="visible"
        message.style.color="red"
        newTask.value = ""
    }

}




function inputIsValid(input){
    if(input){
        return true;
    }
    else{
        return false;
    }
}