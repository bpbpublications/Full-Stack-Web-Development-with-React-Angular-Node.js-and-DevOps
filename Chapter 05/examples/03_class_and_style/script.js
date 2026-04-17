const box = document.getElementById("box");

document.getElementById("makeBlue").addEventListener("click", () => {
  box.classList.add("blue");
  box.style.transform = "translateY(-2px)";
});

document.getElementById("toggleRound").addEventListener("click", () => {
  box.classList.toggle("round");
});

document.getElementById("reset").addEventListener("click", () => {
  box.className = "demo-box";
  box.removeAttribute("style");
});
