console.log("=== Variables & Scope ===");

// var (function-scoped)
var a = 10;
console.log("var a:", a);

// let/const (block-scoped)
let b = 20;
const c = 30;
console.log("let b:", b, "const c:", c);

if (true) {
  var insideVar = "I am var inside if (still visible outside)";
  let insideLet = "I am let inside if (NOT visible outside)";
  console.log(insideVar);
  console.log(insideLet);
}
console.log(insideVar);

// Hoisting (basic view)
console.log("hoistedVar:", hoistedVar); // undefined (declared but not assigned yet)
var hoistedVar = 999;

// Uncomment to see error: temporal dead zone for let
// console.log(x);
// let x = 5;
