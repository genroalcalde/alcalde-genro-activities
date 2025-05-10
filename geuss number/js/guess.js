let triesLeft = 5; 
const random = 300; 

function checknumber() {
    const guess = parseInt(document.getElementById("guess").value);
    const message = document.getElementById("message");
    const triesDisplay = document.getElementById("tries");

    if (triesLeft > 1) {
        triesLeft--;

        if (guess === random) {
            message.innerHTML = "Correct! Naglaing kadjayen 🎉";
            message.style.color = "green";
        } else if (guess < random) {
            message.innerHTML = `Higher! Try again!`;
            message.style.color = "orange";
        } else {
            message.innerHTML = `Lower! Try again!`;
            message.style.color = "orange";
        }

        // Update tries left
        triesDisplay.innerHTML = `Tries left: ${triesLeft}`;
    } else {
        message.innerHTML = `Game over! The correct number was ${random}.`;
        message.style.color = "red";
        triesDisplay.innerHTML = `No tries left!`;
        document.getElementById("guess").disabled = true;
    }
}
