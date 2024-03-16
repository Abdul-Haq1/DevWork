const readlineSync = require('readline-sync')

function coinFlip() {
    return Math.random() < 0.5 ? 'heads' : 'tails';
}

function playGame() {
    console.log('Welcome to the Coin Flip Game!');
    console.log('Enter "heads" or "tails" to make your guess, or type "quit" to exit.');

    while (true) {
        const userGuess = readlineSync.question('> ').toLocaleLowerCase();
        if (userGuess === 'quit') {
            console.log('Thanks for playing!.');
            break;
        }

        if (userGuess !== 'heads' && userGuess !== 'tails') {
            console.log('Invalid input. Please enter "heads" or "tails".');
            continue;
        }

        const result = coinFlip();
        console.log("the coin landed on: " + result)

        if (userGuess === result) {
            console.log('congratulations! You guessed corrrectly!');
        } else {
            console.log('Sorry, you guessed incorrectly. Better luck next time!');
        }
    }
}

playGame()