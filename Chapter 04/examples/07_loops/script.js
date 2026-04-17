console.log("=== Loops ===");

for (let i = 1; i <= 5; i++) {
  console.log("for i =", i);
}

let j = 3;
while (j > 0) {
  console.log("while j =", j);
  j--;
}

const fruits = ["apple", "banana", "cherry"];
for (const f of fruits) {
  console.log("for..of:", f);
}

const person = { name: "Asha", city: "Delhi" };
for (const key in person) {
  console.log("for..in:", key, "=", person[key]);
}
