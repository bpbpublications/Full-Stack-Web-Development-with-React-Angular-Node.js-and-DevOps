console.log("=== Type Conversion ===");

console.log(Number("123"), typeof Number("123"));
console.log(Number("12.5"), typeof Number("12.5"));
console.log(Number("abc"), "=> NaN");

console.log(parseInt("12.9"), "(parseInt)");
console.log(parseFloat("12.9"), "(parseFloat)");

console.log(String(100), typeof String(100));
console.log(Boolean(0), Boolean(1), Boolean(""), Boolean("text"));

const values = [0, 1, "", "x", null, undefined, [], {}, NaN];
for (const v of values) {
  console.log(v, "=>", Boolean(v));
}
