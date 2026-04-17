console.log("=== Error Handling ===");

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log("10 / 2 =", divide(10, 2));
  console.log("10 / 0 =", divide(10, 0)); // will throw
} catch (err) {
  console.error("Caught error:", err.message);
} finally {
  console.log("finally: this always runs");
}
