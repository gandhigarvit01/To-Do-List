let btn1 = document.querySelector(".task button");

btn1.addEventListener("click", () => {
    addtask();
})

function addtask(){
    let inp = document.querySelector(".task input");
    let str = inp.value;

    if(str.trim() === "") return;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(str);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    createtask(str);
    inp.value = "";
}

function createtask(str){
    let element = document.querySelector(".todo");
    let newel = element.cloneNode(true);

    newel.querySelector("p").innerText = str;
    newel.style.display = "flex";

    let new_btn = newel.querySelector("button");

    new_btn.addEventListener("click", (e) => {
        removetask(e.target);
    });
    document.querySelector(".container").append(newel);
}

function removetask(btn){
    let element = btn.parentElement;
    let task = element.querySelector("p").innerText;
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter((t) => {
        return t !== task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    element.remove();
}

window.addEventListener("load", () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    for(let task of tasks){
        createtask(task);
    }
})