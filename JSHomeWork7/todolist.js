
// 宣告
// let currentTask = null;

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();  //如果事件可以被取消，就取消事件。但不會影響事件的傳遞，事件仍會繼續傳遞。
    addTask();
});

// function getCurrentTask(event) {
//     currentTask = event.value;
// }
//渲染
function loadTasks() {
    const list = document.querySelector("ul");
    list.innerHTML = "";
    if (localStorage.getItem("tasks") == null) return;

    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML =
            `
        <input type="checkbox" onclick="taskComplete(this)" class="check" data-index=${index} ${task.completed ? 'checked' : ''}>
        <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)" oninput="editTask(this)" data-index=${index}>
        <i class="fa fa-trash" onclick="removeTask(this)" data-index=${index}></i>
        `;
        console.log(list);
        list.prepend(li, list.children[0]);//清空
    });
}
// 新增
function addTask() {
    const task = document.querySelector("form input");
    const list = document.querySelector("ul");
    // 檢查是不是空的
    if (task.value === "") {
        alert("白癡!欠債還不完!");
        return false;
    }
    //有沒有重複
    // if (document.querySelector(`input[value="${task.value}"]`)) {
    //     alert("白癡!別添加重複的!");
    //     return false;
    // }

    localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value, completed: false }]));

    // const li = document.createElement("li");
    // li.innerHTML = 
    // `
    // <input type="checkbox" onclick="taskComplete(this)" class="check">
    // <input type="text" value="${task.value}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
    // <i class="fa fa-trash" onclick="removeTask(this)  data-index=${index} "></i>
    // `;
    loadTasks();

    task.value = "";//清空使用者輸入
}
//完成
function taskComplete(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    tasks.forEach((task, index) => {
        if (index == event.parentNode.children[1].dataset.index) {
            task.completed = !task.completed;
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.nextElementSibling.classList.toggle("completed");
}
//刪除
function removeTask(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    tasks.forEach((task, index) => {
        if (index == event.parentNode.children[1].dataset.index) {

            tasks.splice(tasks.indexOf(task), 1);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.parentElement.remove();
}
// 編輯
function editTask(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    // 檢查是不是空的
    if (event.value === "") {
        alert("白癡!不可以是空的!");
        event.value = currentTask;
        return;
    }
    //有沒有重複
    // tasks.forEach(task => {
    //     if (task.task === event.value) {
    //         alert("白癡!重複了!");
    //         event.value = currentTask;
    //         return;
    //     }
    // });
    // 更新
    tasks.forEach((task, index) => {
        if (index == event.parentNode.children[1].dataset.index) {
            task.task = event.value;
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
window.onload = function () {
    loadTasks()
};