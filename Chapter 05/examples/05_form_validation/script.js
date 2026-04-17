const form = document.getElementById("form");
const nameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");

function isEmail(s){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  document.getElementById("nameErr").textContent = "";
  document.getElementById("emailErr").textContent = "";
  document.getElementById("msg").textContent = "-";

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  let ok = true;

  if (name.length < 3) {
    document.getElementById("nameErr").textContent = "Name must have at least 3 characters.";
    ok = false;
  }

  if (!isEmail(email)) {
    document.getElementById("emailErr").textContent = "Enter a valid email.";
    ok = false;
  }

  if (!ok) return;

  document.getElementById("msg").textContent = `Submitted: ${name} (${email})`;
  form.reset();
});
