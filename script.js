const taskInput = document.getElementById("task-input");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector("tasks-items");
const clearAll = document.querySelector(".clear-tasks");
const searchInput = document.querySelector("#search");

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    //trim the values of the input
    const taskText = taskInput.ariaValueMax.trim();
    //check the value of the input is empty or not
    if(taskInput.value !== ""){
        //create li
        const newLi = document.createElement("li");
        newLi.className="task";
        newLi.style.margin = ".5rem 0rem";

        //create input field
        const task = document.createElement("input");
        task.disabled = true;
        task.type= "text";
        task.className = "taskDisabled";

        //make the value of the input to be our text
        task.value = taskText;
        //create a delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerText = "Delete";
    
        //edit button
         const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.innerText = "Edit";
        
        newLi.appendChild(task);
        newLi.appendChild(deleteBtn);
        newLi.appendChild(editBtn);
        taskList.appendChild(newLi);

        taskInput.value="";
        
    } else{
        const err = document.querySelector(".err");
        err.style.display ="block";
        setTimeout(() => {
            err.style.display="none";
        }, 2000);
    }
    taskList.addEventListener("click", (e) => {
  //  get the parent of the button
  // check if the target is the delete button
  if (e.target.classList.contains("delete-btn")) {
    // remove the parent
    e.target.parentElement.remove();
  }
});
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    console.log(e.target.parentElement);
    const input = e.target.parentElement.querySelector('input[type="text"]');
    input.disabled = !input.disabled;
    if (!input.disabled) {
      input.focus();
    }
  }
});
clearAll.addEventListener("click", function (e) {
  e.preventDefault();
  taskList.innerHTML = "";
});
//Search event listener

searchInput.addEventListener("keyup", (e)=>{
    e.preventDefault();
    let searchedWord = e.target.value.toLowerCase();

    const taskItems = document.querySelector(".task");
    taskItems.forEach(taskItem => {
        let taskText = taskItem.querySelector(".taskDisabled").value.toLowerCase();

        if (taskText.indexOf(searchedWord) !== -1) {
      taskItem.style.display = "block";
    } else {
      taskItem.style.display = "none";
    }
    });
})

})