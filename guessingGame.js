//console.log("Welcome to the Guessing Game!, this is a test.");

const secretNumber = Math.floor(Math.random() * 10) + 1;

let guessed = false;

for (let i = 1; i <= 3; i++) {
    const input = prompt(`Attempt ${i}: Guess the secret number (between 1 and 10)`);
    if (input === null) {
        console.log("Game cancelled");
        alert("Game cancelled");
        break;
    }

    const guess = Number(input);
    if (Number.isNaN(guess)) {
        console.log("Enter a valid number");
        alert("Enter a valid number");
        continue;
    }

    if (guess === secretNumber) {
        console.log("Congratulations! You've guessed the secret number.");
        alert("Congratulations! You've guessed the secret number.");
        guessed = true;
        break;
    } else if (guess < secretNumber) {
        console.log("Too low! Try again.");
        alert("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
        alert("Too high! Try again.");
    }
}

if (!guessed) {
    alert("Sorry, you've used all your attempts. The secret number was " + secretNumber);
}
