console.log("=== Conditionals ===");

const score = 76;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

const day = "Tue";
switch (day) {
  case "Mon":
    console.log("Start of week");
    break;
  case "Tue":
  case "Wed":
  case "Thu":
    console.log("Mid-week");
    break;
  case "Fri":
    console.log("Weekend is near");
    break;
  default:
    console.log("Weekend");
}
