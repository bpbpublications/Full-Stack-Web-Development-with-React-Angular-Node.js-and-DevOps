const input = document.getElementById("itemText");
const list = document.getElementById("list");

function createItem(text){
  const li = document.createElement("li");
  li.className = "list-item";

  const span = document.createElement("span");
  span.textContent = text;

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.className = "btn danger small";
  del.addEventListener("click", () => li.remove());

  li.appendChild(span);
  li.appendChild(del);
  return li;
}

document.getElementById("add").addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  list.appendChild(createItem(text));
  input.value = "";
  input.focus();
});

document.getElementById("clearAll").addEventListener("click", () => {
  list.innerHTML = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") document.getElementById("add").click();
});
