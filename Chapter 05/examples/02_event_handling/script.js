const input = document.getElementById("name");
const preview = document.getElementById("preview");
const clearBtn = document.getElementById("clear");

input.addEventListener("input", () => {
  preview.textContent = input.value.trim() ? input.value : "-";
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  preview.textContent = "-";
  input.focus();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    input.value = "";
    preview.textContent = "-";
  }
});
