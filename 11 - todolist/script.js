const listTasksDiv_elem = document.querySelector(".list-tasks");
const form = document.querySelector("#form");



form.addEventListener("submit",function(event){
    event.preventDefault();
    const formData = new FormData(form);
    const task = document.createElement("div");
    task.classList.add("task");
    listTasksDiv_elem.appendChild(task);

    const taskP = document.createElement("p");
    taskP.textContent = formData.get("tache");
    task.appendChild(taskP);
    console.log(taskP);
    

    const taskButtonDele = document.createElement("btn");
    taskButtonDele.classList.add("btn-delete");
    task.appendChild(taskButtonDele);

    const logoButtonDel = document.createElement("i");
    logoButtonDel.classList.add("fas");
    logoButtonDel.classList.add("fa-trash-alt");
    taskButtonDele.appendChild(logoButtonDel);

    const taskButtonArch = document.createElement("btn");
    taskButtonArch.classList.add("btn-archive");
    task.appendChild(taskButtonArch);

    const logoButtonArch = document.createElement("i");
    logoButtonArch.classList.add("fas");
    logoButtonArch.classList.add("fa-check-circle");
    taskButtonArch.appendChild(logoButtonArch);

    logoButtonArch.onclick = function(){
        taskP.classList.toggle("done");
    }

    logoButtonDel.onclick = function(){
        const parent = taskButtonDele.parentElement;
        parent.remove();
    }
})
