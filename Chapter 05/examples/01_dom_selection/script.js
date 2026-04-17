document.getElementById("btn").addEventListener("click", () => {
  const a = document.getElementById("targetId");
  const b = document.querySelector(".tag");
  const allTags = document.querySelectorAll(".tag");
  const note = document.querySelector('[data-role="note"]');

  console.log("getElementById:", a);
  console.log("querySelector:", b);
  console.log("querySelectorAll:", allTags);
  console.log("attribute selector:", note);

  document.getElementById("out").textContent =
    `Found: id=${a.textContent}, firstClass=${b.textContent}, tags=${allTags.length}, attr=${note.textContent}`;
});
