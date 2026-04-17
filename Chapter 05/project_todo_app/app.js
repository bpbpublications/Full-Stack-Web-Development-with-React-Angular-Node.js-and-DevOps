const STORAGE_KEY = "chapter5_todo_tasks_v1";

let tasks = loadTasks();
let filter = "all";

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const wipeBtn = document.getElementById("wipeBtn");
const list = document.getElementById("list");
const count = document.getElementById("count");
const status = document.getElementById("status");

const filterButtons = Array.from(document.querySelectorAll(".filters button"));

function uid(){
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function loadTasks(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch{
    return [];
  }
}

function saveTasks(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function setStatus(text){
  status.textContent = text;
}

function addTask(label){
  tasks.unshift({ id: uid(), label, done: false, createdAt: Date.now() });
  saveTasks();
  render();
  setStatus("Task added.");
}

function toggleTask(id){
  const t = tasks.find(x => x.id === id);
  if (!t) return;
  t.done = !t.done;
  saveTasks();
  render();
}

function deleteTask(id){
  tasks = tasks.filter(x => x.id !== id);
  saveTasks();
  render();
  setStatus("Task deleted.");
}

function clearDone(){
  const before = tasks.length;
  tasks = tasks.filter(x => !x.done);
  const removed = before - tasks.length;
  saveTasks();
  render();
  setStatus(removed ? `Removed ${removed} completed task(s).` : "No completed tasks to remove.");
}

function wipeAll(){
  tasks = [];
  saveTasks();
  render();
  setStatus("All tasks deleted.");
}

function setFilter(newFilter){
  filter = newFilter;
  filterButtons.forEach(b => b.classList.toggle("active", b.dataset.filter === newFilter));
  render();
}

function filteredTasks(){
  if (filter === "active") return tasks.filter(t => !t.done);
  if (filter === "done") return tasks.filter(t => t.done);
  return tasks;
}

function render(){
  const visible = filteredTasks();

  list.innerHTML = visible.map(t => `
    <li class="task ${t.done ? "done" : ""}" data-id="${t.id}">
      <input type="checkbox" ${t.done ? "checked" : ""} aria-label="Mark done" />
      <span class="label">${escapeHtml(t.label)}</span>
      <button data-action="delete" class="btn danger" type="button">Delete</button>
    </li>
  `).join("");

  const doneCount = tasks.filter(t => t.done).length;
  count.textContent = `${tasks.length} task(s) • ${doneCount} done`;
}

function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

// Events
addBtn.addEventListener("click", () => {
  const label = input.value.trim();
  if (!label) return;
  addTask(label);
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});

clearBtn.addEventListener("click", clearDone);

wipeBtn.addEventListener("click", () => {
  if (confirm("Delete all tasks?")) wipeAll();
});

document.querySelector(".filters").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  setFilter(btn.dataset.filter);
});

// Event delegation for list actions
list.addEventListener("click", (e) => {
  const li = e.target.closest(".task");
  if (!li) return;

  const id = li.dataset.id;

  if (e.target.matches('input[type="checkbox"]')) {
    toggleTask(id);
  }

  const btn = e.target.closest("button");
  if (btn?.dataset.action === "delete") {
    deleteTask(id);
  }
});

render();
setStatus("Loaded from localStorage.");
