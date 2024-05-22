let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
let attempts = 0;

function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);

  if (isNaN(guess)) {
    alert("Please enter a valid number!");
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    document.getElementById("message").innerHTML = `Congratulations! You guessed the number in ${attempts} attempts.`;
  } else if (guess < randomNumber) {
    document.getElementById("message").innerHTML = "Too low! Try again.";
  } else {
    document.getElementById("message").innerHTML = "Too high! Try again.";
  }
}
