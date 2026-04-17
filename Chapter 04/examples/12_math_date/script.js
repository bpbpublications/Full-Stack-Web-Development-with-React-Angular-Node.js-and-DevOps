console.log("=== Math & Date ===");

console.log("PI:", Math.PI);
console.log("round(4.6):", Math.round(4.6));
console.log("floor(4.9):", Math.floor(4.9));
console.log("ceil(4.1):", Math.ceil(4.1));

const random1to100 = Math.floor(Math.random() * 100) + 1;
console.log("Random 1..100:", random1to100);

const now = new Date();
console.log("Now:", now.toString());
console.log("Year:", now.getFullYear());
console.log("Month (0-based):", now.getMonth());
console.log("Date:", now.getDate());
