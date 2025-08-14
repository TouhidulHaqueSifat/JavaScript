console.log("Project Task Manager");

const textElm = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(){
    let task = textElm.value;

    if(task.trim() === "") return;
    let li = document.createElement("li");
    li.innerText = task;

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✅";
    completeBtn.style.marginLeft = "10px";
    li.appendChild(completeBtn);

    const editBtn = document.createElement("button");
    editBtn.innerText = "✏️";
    editBtn.style.marginLeft = "10px";
    li.appendChild(editBtn);
    

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.style.marginLeft = "10px";
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    textElm.value= "";
    
    editBtn.addEventListener("click",()=>{
        input = document.createElement("input");
        input.type = "text";
        updateTask = li.firstChild.textContent;
        input.value = updateTask;
        console.log("Update Task", updateTask);
        

        const saveBtn = document.createElement("button");
        saveBtn.innerText = "💾";
        saveBtn.style.marginLeft = "10px";
        li.insertBefore(input, li.firstChild);
        li.removeChild(li.firstChild.nextSibling);
        li.insertBefore(saveBtn, completeBtn);
        
        saveBtn.addEventListener("click",()=>{
            li.insertBefore(document.createTextNode(input.value), li.firstChild);
            li.removeChild(input);
            li.removeChild(saveBtn);
        })
    
    })
    deleteBtn.addEventListener("click", ()=>{
        taskList.removeChild(li);
        //li.remove()
    })

    completeBtn.addEventListener("click", ()=>{
        li.classList.toggle("completed");
    })
}

function searchTask(){
    const searchElm = document.getElementById("searchInput");
    let input = searchElm.value;
    const items = document.querySelectorAll("ul#taskList li");

    items.forEach((item) =>{
        item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none"
    })


}
