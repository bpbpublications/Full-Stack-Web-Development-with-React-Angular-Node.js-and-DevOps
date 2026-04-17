console.log("=== Modern JS Basics ===");

// template literals
const course = "Web Development";
console.log(`Learning: ${course}`);

// destructuring arrays
const nums = [10, 20, 30];
const [x, y] = nums;
console.log("x:", x, "y:", y);

// spread operator
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b];
console.log("combined:", combined);

// object spread
const user = { name: "Aman", role: "Student" };
const updated = { ...user, role: "Developer" };
console.log(updated);
