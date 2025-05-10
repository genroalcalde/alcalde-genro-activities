let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 5;

document.getElementById("button").addEventListener("click", function() {
    let userGuess = parseInt(document.getElementById("guess").value);
    let messageDisplay = document.getElementById("message");
    let attemptsDisplay = document.getElementById("tries");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDisplay.textContent = "Please enter a valid number between 1 and 100!";
        return;
    }

    attemptsLeft--;

    if (userGuess === secretNumber) {
        messageDisplay.textContent = "Awesome! You've found the secret number!";
        messageDisplay.style.color = "green";
        document.getElementById("button").disabled = true;
    } else if (attemptsLeft === 0) {
        messageDisplay.textContent = "Sorry, game over! The correct number was " + secretNumber;
        messageDisplay.style.color = "red";
        document.getElementById("button").disabled = true;
    } else {
        messageDisplay.textContent = userGuess > secretNumber ? "Too high! Try a lower number." : "Too low! Try a higher number.";
        messageDisplay.style.color = "orange";
    }

    attemptsDisplay.textContent = "Attempts Remaining: " + attemptsLeft;
});
