let randomNumber = Math.floor(Math.random() * 10) + 1;

function submitGuess() {
  const name = document.getElementById("playerName").value.trim();
  const guess = parseInt(document.getElementById("guess").value);
  const result = document.getElementById("result");

  if (!name || isNaN(guess)) {
    result.textContent = "Please enter both name and a number.";
    return;
  }

  if (guess === randomNumber) {
    result.textContent = `🎉 Congrats ${name}, you guessed right!`;
  } else {
    result.textContent = `❌ Sorry ${name}, try again.`;
  }
}
