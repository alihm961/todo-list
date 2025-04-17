const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterBtns = document.querySelectorAll(".filters button");

let tasks = [];

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const text = taskInput.value.trim();
    if (text !== "") {
        tasks.push({ text, completed: false});
        taskInput.value = "";
        renderTasks();
    }
}

function renderTasks(filter = "all") {
    taskList.innerHTML = "";
    const filteredTasks = tasks.filter(task => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true;
    });

    filteredTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";
        li.innerHTML =`
           <span onclick="toggleCompleted(${index})">${task.text}</span>
           <button class="remove-btn" onclick="removeTask(${index})">Remove</button>
           `;
           taskList.appendChild(li);
    });
}

function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks(getActivefilter());
}
function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks(getActivefilter());
}

filterBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderTasks(btn.dataset.filter);
    });
});

function getActivefilter() {
    return document.querySelector(".filters .active").dataset.filter;
}

renderTasks();