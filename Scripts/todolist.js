let i=1;
const box = document.getElementById("input-box-text"); 
function createTask(){
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("id","task-"+i);
    taskContainer.setAttribute("class","task");
    document.getElementById("task-container").appendChild(taskContainer);
    
    const taskBoxContainer = document.createElement("p");
    taskBoxContainer.setAttribute("id","task-bar-"+i);
    taskBoxContainer.setAttribute("class","task-bar");
    document.getElementById("task-"+i).appendChild(taskBoxContainer);

    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("id","done-btn-"+i);
    buttonContainer.setAttribute("class","done-btn");
    document.getElementById("task-"+i).appendChild(buttonContainer);

    const buttonBoxContainer = document.createElement("button");
    buttonBoxContainer.innerHTML="DONE";
    buttonBoxContainer.setAttribute("onclick","removeTask("+i+")");
    document.getElementById("done-btn-"+i).appendChild(buttonBoxContainer);
    return;
}

function addTask(){  
    const task = document.getElementById("input-box-text").value.trim();
    if(task === "") {
        alert("Please enter some text");
        return;
    }
    document.getElementById("your-task-ttl").innerHTML="Your Tasks";
    createTask();
    document.getElementById("task-bar-"+i).innerHTML=task;
    i++;
    return;
}
box.addEventListener("keypress",(e)=>{if(e.key==="Enter"){addTask()}})
let j=1;

function createStructure(){
    const removeTaskContainer = document.createElement("div");
    removeTaskContainer.setAttribute("id","done-"+j);
    removeTaskContainer.setAttribute("class","done");
    document.getElementById("done-tasks").appendChild(removeTaskContainer);
    removeTaskContainer.appendChild(document.createElement("p"));
    return;
}

function checkForEmpty(){
    if(i == j){
        document.getElementById("your-task-ttl").innerHTML=""; 
    }
}

function removeTask(idNumb){
    document.getElementById("done-ttl").innerText="Tasks Done";
    document.getElementById("done-task").style.border="1px solid black";
    const taskInBox = document.getElementById("task-bar-"+idNumb).innerHTML;
    const taskToRemove = document.getElementById("task-"+idNumb);
    document.getElementById("task-container").removeChild(taskToRemove);
    createStructure();
    document.getElementById("done-"+j).childNodes[0].innerHTML=taskInBox;
    j++;
    checkForEmpty();
    return;
}
