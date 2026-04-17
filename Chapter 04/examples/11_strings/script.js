console.log("=== Strings ===");

const text = "JavaScript fundamentals";
console.log("length:", text.length);
console.log("upper:", text.toUpperCase());
console.log("slice:", text.slice(0, 10));

const name = "Rupesh";
const msg = `Hello ${name}, today is ${new Date().toDateString()}`;
console.log(msg);

// simple regex: check if an email looks valid (basic)
const email = "test@example.com";
const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
console.log("Email valid?", emailOk);
