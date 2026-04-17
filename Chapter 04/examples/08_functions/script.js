console.log("=== Functions ===");

function add(x, y) {
  return x + y;
}
console.log("add(2, 3) =", add(2, 3));

const multiply = function (x, y) {
  return x * y;
};
console.log("multiply(3, 4) =", multiply(3, 4));

const square = (n) => n * n;
console.log("square(5) =", square(5));

function greet(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(greet());
console.log(greet("Rupesh"));

function sumAll(...nums) {
  return nums.reduce((acc, v) => acc + v, 0);
}
console.log("sumAll(1,2,3,4) =", sumAll(1, 2, 3, 4));

// callback example
function compute(x, y, op) {
  return op(x, y);
}
console.log("compute(10, 5, (a,b)=>a-b) =", compute(10, 5, (a, b) => a - b));
