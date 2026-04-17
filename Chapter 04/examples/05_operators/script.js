console.log("=== Operators ===");

console.log("2 + 3 =", 2 + 3);
console.log("10 % 3 =", 10 % 3);

console.log("'5' == 5 :", "5" == 5);   // true (loose equality)
console.log("'5' === 5:", "5" === 5);  // false (strict equality)

console.log("true && false:", true && false);
console.log("true || false:", true || false);

const age = 19;
const canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote?", canVote);

// Nullish coalescing (??)
const userInput = "";
const value1 = userInput || "fallback using OR"; // OR treats "" as false
const value2 = userInput ?? "fallback using ??"; // ?? only treats null/undefined as missing
console.log("OR:", value1);
console.log("??:", value2);

// Optional chaining (?.)
const user = { profile: { city: "Gurugram" } };
console.log("City:", user?.profile?.city);
console.log("Zip:", user?.profile?.zip);
