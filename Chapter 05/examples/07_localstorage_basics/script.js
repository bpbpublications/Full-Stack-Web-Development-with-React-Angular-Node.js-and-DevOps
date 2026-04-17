const KEY = "chapter5_note";

document.getElementById("save").addEventListener("click", () => {
  const value = document.getElementById("note").value;
  localStorage.setItem(KEY, value);
  alert("Saved!");
});

document.getElementById("load").addEventListener("click", () => {
  const value = localStorage.getItem(KEY);
  document.getElementById("out").textContent = value ?? "-";
});

document.getElementById("clear").addEventListener("click", () => {
  localStorage.removeItem(KEY);
  document.getElementById("out").textContent = "-";
  alert("Cleared!");
});
