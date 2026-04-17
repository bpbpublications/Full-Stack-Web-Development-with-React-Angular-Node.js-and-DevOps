function startGame() {
  const secret = Math.floor(Math.random() * 100) + 1;
  const maxAttempts = 7;

  console.log("Secret number (for learning):", secret);

  alert("Number Guess Game\nGuess a number between 1 and 100.\nYou have 7 attempts.");

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const input = prompt(`Attempt ${attempt}/${maxAttempts}: Enter your guess (1-100)`);

    if (input === null) {
      alert("Game cancelled.");
      return;
    }

    const guess = Number(input);

    if (!Number.isFinite(guess)) {
      alert("Please enter a valid number.");
      attempt--; // do not count invalid input
      continue;
    }

    if (guess < 1 || guess > 100) {
      alert("Please enter a number between 1 and 100.");
      attempt--;
      continue;
    }

    if (guess === secret) {
      alert(`Correct! You guessed it in ${attempt} attempt(s).`);
      return;
    }

    if (guess < secret) {
      alert("Too low. Try again.");
    } else {
      alert("Too high. Try again.");
    }
  }

  alert(`Out of attempts! The correct number was ${secret}.`);
}

document.getElementById("startBtn").addEventListener("click", startGame);
