let tasks = [];

document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("filterBtn").addEventListener("click", filterTasks);
document.getElementById("clearFilterBtn").addEventListener("click", resetFilter);

function getInputValue(id) {
  return document.getElementById(id).value.trim();
}

function createTask(description, category) {
  taskObj = {description, category};
  return taskObj;
}

function addTask() {
  const description = getInputValue("taskInput");
  const category = getInputValue("categorySelect");

  if (description.length < 2) return alert("Task too short");

  const newTask = createTask(description, category);
  tasks.push(newTask);
  renderTasks(tasks);
  clearInputs();
}

function renderTasks(list) {
  const ul = document.getElementById("taskList");
  ul.innerHTML = "";
  list.forEach(task => {
    const li = document.createElement("li");
    li.textContent = '[' + task.category + '] ' + task.description;
    ul.appendChild(li);
  });
}

function clearInputs() {
  document.getElementById("taskInput").value = "";
}

function filterTasks() {
  const cat = getInputValue("categorySelect");
  let results = [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].category === cat) {
      results.push(tasks[i]);
    }
  }

  console.log("Filtering tasks for category:", cat);
  console.log("Found:", results.length);

  const ul = document.getElementById("taskList");
  ul.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    const li = document.createElement("li");
    li.textContent = '[' +results[i].category + '] ' + results[i].description;
    ul.appendChild(li);
  }

  for (let i = 0; i < results.length; i++) {
    if (results[i].description.includes("test")) {
      console.log("Task contains 'test':", results[i].description);
    }
  }

  const countInfo = document.createElement("li");
  countInfo.textContent = 'Total in ' + cat + ': ' + results.length;
  countInfo.style.fontWeight = "bold";
  ul.appendChild(countInfo);
}

function resetFilter(){
    renderTasks(tasks);
}