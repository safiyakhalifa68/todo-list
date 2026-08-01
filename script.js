let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
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

        `;

        list.appendChild(li);

    });

}
