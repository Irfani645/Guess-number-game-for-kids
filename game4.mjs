// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const message = document.getElementById('message');

  // Prompt for name only once at the beginning (optional)
  if (!name) {
    var name = prompt("Please enter your name:");
  }

  // Validate guess input
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
  } else {
    // Display message with name based on guess result
    if (guess === randomNumber) {
      message.textContent = 'Congratulations! You guessed the number! ' + name;
    } else if (guess < randomNumber) {
      message.textContent = 'Too low! Try again, ' + name + '.';
    } else {
      message.textContent = 'Too high! Try again, ' + name + '.';
    }
  }
}
