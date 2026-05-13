//console.log("Welcome to the Guessing Game!, this is a test.");

const secretNumber = Math.floor(Math.random() * 10) + 1;

let guessed = false;//boolean variable to keep track of whether the user has guessed the number correctly or not, initially set to false.

for (let i = 1; i <= 3; i++) { //for loop to give the user 3 attempts starting from 1 and moving to 3.
    const input = prompt(`Attempt ${i}: Guess the secret number (between 1 and 10)!!!!!!`); //storing the attempt number and asking the user to guess a number
    if (input === null) {
        console.log("Game cancelled"); //logging the cancellation into the console
        alert("Game cancelled");//once logged, will alert the user that the game cancelled
        break;
    }

    const guess = Number(input);
    if (Number.isNaN(guess)|| guess == "") {
        console.log("Enter a valid Input");
        alert("Enter a valid input");
        continue;
    }

    if (guess === secretNumber) {
        console.log("Congratulations! You've guessed the secret number.");
        alert("Congratulations! You've guessed the secret number.");
        guessed = true;//if the user guesses the number correctly, it will log a message to the console and alert the user, then set guessed to true and
        break;
    } else if (guess < secretNumber) {
        console.log("Too low! Try again.");
        alert("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
        alert("Too high! Try again.");
    }
}

if (!guessed) { //after the loop, if the user has not guessed the number correctly, it will log a message to the console and alert the user that they've used all their attempts and reveal the secret number.
    alert("Sorry, you've used all your attempts. The secret number was " + secretNumber);
}
