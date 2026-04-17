const input = document.getElementById("txt");
const tasks = document.getElementById("tasks");

document.getElementById("add").addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = `
    <span class="label">${text}</span>
    <button data-action="done" class="btn small" type="button">Done</button>
    <button data-action="remove" class="btn danger small" type="button">Remove</button>
  `;

  tasks.appendChild(li);
  input.value = "";
});

tasks.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const li = e.target.closest(".task");
  const action = btn.dataset.action;

  if (action === "done") li.classList.toggle("done");
  if (action === "remove") li.remove();
});
