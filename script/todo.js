window.onload = loadTasks;
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  addTask();
});
/* Load Task */
function loadTasks() {
  if (localStorage.getItem("tasks") == null) return;
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach(task => {
    const list = document.getElementById("ulTask");
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
          <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
          <button class="cross-button" onclick="removeTask(this)">✖</button><div class="check-mark">✔</div>`;
    list.insertBefore(li, list.children[0]);
  });
}
/* Add Task Function */
function addTask() {
  const task = document.querySelector("form input");
  const list = document.getElementById("ulTask");
  if (task.value === "") {
    alert("Please add some task!");
    return false;
  }

  localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value, completed: false }]));

/* List */
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
      <input type="text" value="${task.value}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
  <button class="cross-button" onclick="removeTask(this)">✖</button><div class="check-mark">✔</div>`;
  list.insertBefore(li, list.children[0]);
  task.value = "";
}

/* Mark Task Function */
function taskComplete(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach(task => {
    if (task.task === event.nextElementSibling.value) {
      task.completed = !task.completed;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.nextElementSibling.classList.toggle("completed");
}

/* Delete Task Function */
function removeTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach(task => {
    if (task.task === event.parentNode.children[1].value) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.parentElement.remove();
}
/* Current Task */
var currentTask = null;
function getCurrentTask(event) {
  currentTask = event.value;
}
/* Local Storage*/
  localStorage.setItem("tasks", JSON.stringify(tasks));

  