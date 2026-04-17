console.log("=== Arrays ===");

const nums = [5, 2, 9, 1, 7];
console.log("nums:", nums);

nums.push(10);
console.log("after push:", nums);

const last = nums.pop();
console.log("popped:", last, "nums:", nums);

const mapped = nums.map((x) => x * 2);
console.log("map x2:", mapped);

const filtered = nums.filter((x) => x >= 5);
console.log("filter >=5:", filtered);

const total = nums.reduce((acc, x) => acc + x, 0);
console.log("reduce sum:", total);

const sorted = [...nums].sort((a, b) => a - b);
console.log("sorted:", sorted);
