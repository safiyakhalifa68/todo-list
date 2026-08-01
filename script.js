let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function addTask() {

    let input = document.getElementById("taskInput");

    let text = input.value.trim();

    if(text==""){
        alert("Enter Task");
        return;
    }

    tasks.push({
        task:text,
        completed:false
    });

    saveTasks();

    displayTasks();

    input.value="";
}
function displayTasks(){

    let list=document.getElementById("taskList");

    list.innerHTML="";

    tasks.forEach((item,index)=>{

        let li=document.createElement("li");

        li.className="list-group-item";

        if(item.completed){
            li.classList.add("completed");
        }

        li.innerHTML=`

        <span>${item.task}</span>

        <div class="buttons">
         <button class="btn btn-primary btn-sm"
        onclick="editTask(${index})">
        Edit
        </button>
        <button class="btn btn-danger btn-sm"
        onclick="deleteTask(${index})">
        Delete

        <button class="btn btn-success btn-sm"
        onclick="completeTask(${index})">

        ${item.completed ? "Undo" : "Complete"}

        </button>

        `;

        list.appendChild(li);

    });

}

function editTask(index){

    let newTask = prompt("Edit Task", tasks[index].task);

    if(newTask != null && newTask.trim() != ""){

        tasks[index].task = newTask;

        saveTasks();

        displayTasks();
    }
}
function deleteTask(index){

    if(confirm("you want to Delete this task?")){

        tasks.splice(index,1);

        saveTasks();

        displayTasks();

    }

}

function completeTask(index){

    tasks[index].completed=!tasks[index].completed;

    saveTasks();

    displayTasks();

}
