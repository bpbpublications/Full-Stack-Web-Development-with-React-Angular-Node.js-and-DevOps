/*
Node.js version of Number Guess Game (optional).
Run: node node_game.js
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secret = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 7;
let attempt = 1;

console.log("Number Guess Game (Node)");
console.log("Guess a number between 1 and 100.");
console.log("You have", maxAttempts, "attempts.");

function ask() {
  rl.question(`Attempt ${attempt}/${maxAttempts}: `, (answer) => {
    const guess = Number(answer);

    if (!Number.isFinite(guess) || guess < 1 || guess > 100) {
      console.log("Enter a valid number between 1 and 100.");
      ask();
      return;
    }

    if (guess === secret) {
      console.log("Correct! You won.");
      rl.close();
      return;
    }

    console.log(guess < secret ? "Too low." : "Too high.");

    attempt++;
    if (attempt > maxAttempts) {
      console.log("Out of attempts. The number was:", secret);
      rl.close();
      return;
    }
    ask();
  });
}

ask();
