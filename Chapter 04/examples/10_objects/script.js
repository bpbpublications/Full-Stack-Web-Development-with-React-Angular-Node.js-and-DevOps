console.log("=== Objects ===");

const student = {
  name: "Neha",
  rollNo: 21,
  marks: [82, 76, 91],
  average() {
    const sum = this.marks.reduce((acc, v) => acc + v, 0);
    return sum / this.marks.length;
  },
};

console.log(student.name, student.rollNo);
console.log("Average:", student.average());

// destructuring
const { name, marks } = student;
console.log("destructured:", name, marks);

// JSON
const json = JSON.stringify(student);
console.log("JSON:", json);

const parsed = JSON.parse(json);
console.log("Parsed:", parsed);
