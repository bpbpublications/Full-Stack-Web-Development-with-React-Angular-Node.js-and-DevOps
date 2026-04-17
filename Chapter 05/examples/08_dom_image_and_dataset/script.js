const img = document.getElementById("img");
const altOut = document.getElementById("altOut");

document.getElementById("setAlt").addEventListener("click", (e) => {
  const newAlt = e.currentTarget.dataset.newAlt;
  img.alt = newAlt;
  altOut.textContent = img.alt;
});

document.getElementById("toggleSize").addEventListener("click", () => {
  const big = img.width === 160;
  img.width = big ? 220 : 160;
  img.height = big ? 220 : 160;
});
