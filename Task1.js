//Array to store tasks
let tasks = [];

//Event listeners for buttons, calls functions when clicked
document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("filterBtn").addEventListener("click", filterTasks);
document.getElementById("clearFilterBtn").addEventListener("click", resetFilter);

//Functions for the buttons
function getInputValue(id) {
  return document.getElementById(id).value.trim();
}

//Function to create a task object
function createTask(description, category) {
  taskObj = {description, category};
  return taskObj;
}

//Function that adds task to the array and displays it in the list
function addTask() {
  const description = getInputValue("taskInput");
  const category = getInputValue("categorySelect");

  if (description.length < 2) return alert("Task too short");

  const newTask = createTask(description, category);
  tasks.push(newTask); //Adds to main array
  renderTasks(tasks); //Displays all tasks added to the list
  clearInputs(); //Clears filter and input, but not the task itself
}

//Function that renders the tasks in the list
function renderTasks(list) {
  const ul = document.getElementById("taskList");
  ul.innerHTML = ""; //Clears existing content
  list.forEach(task => {
    const li = document.createElement("li");
    li.textContent = '[' + task.category + '] ' + task.description;
    ul.appendChild(li);
  });
}

//Function that clears input and filter field
function clearInputs() {
  document.getElementById("taskInput").value = "";
}

//Function for filtering tasks by category
function filterTasks() {
  const cat = getInputValue("categorySelect");
  let results = [];

//Manual filter loop
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].category === cat) {
      results.push(tasks[i]);
    }
  }

  console.log("Filtering tasks for category:", cat);
  console.log("Found:", results.length);

  const ul = document.getElementById("taskList");
  ul.innerHTML = "";

//Renders filtered tasks
  for (let i = 0; i < results.length; i++) {
    const li = document.createElement("li");
    li.textContent = '[' +results[i].category + '] ' + results[i].description;
    ul.appendChild(li);
  }

//Filtering by desription
  for (let i = 0; i < results.length; i++) {
    if (results[i].description.includes("test")) {
      console.log("Task contains 'test':", results[i].description);
    }
  }

// Appends a count of the tasks to the list
  const countInfo = document.createElement("li");
  countInfo.textContent = 'Total in ' + cat + ': ' + results.length;
  countInfo.style.fontWeight = "bold";
  ul.appendChild(countInfo);
}

//Function for resetting the filter
function resetFilter(){
    renderTasks(tasks);
}

/* 
Summary:
This JavaScript file handles all dynamic behavior for the task manager.
It includes functions for creating, displaying, and filtering tasks. 
The code is separated into smaller, reusable functions such as getInputValue(), renderTasks(), and createTask().
Event listeners respond to user actions like adding or filtering tasks. 
Some improvements could include fixing undeclared variables, using modern array methods like filter(), and reusing renderTasks() inside filterTasks() to avoid code duplication.
Overall, the code is well-organized and demonstrates a solid approach to functional decomposition and DOM manipulation.
*/
