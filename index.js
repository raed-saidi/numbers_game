const difficulty = document.getElementById('difficulty');

const difficultyLevels = {
    facile: { maxAttempts: 10, maxNumber: 50 },
    intermediaire: { maxAttempts: 7, maxNumber: 100 },
    difficile: { maxAttempts: 5, maxNumber: 200 },
};

function setRules() {
    const selectedValue = difficulty.value;
    const level = difficultyLevels[selectedValue];
    return {
        ...level,
        number: Math.floor(Math.random() * level.maxNumber + 1)
    };
}

function playGame() {
    const rule = setRules();
    let attempts = 0;
    const { number, maxAttempts, maxNumber } = rule;

    while (attempts < maxAttempts) {
        const guess = +prompt(`Donner un nombre entre 0 et ${maxNumber} | attempts : ${attempts}`);
        attempts++;

        if (!guess && guess !== 0) {
            alert("Please enter a valid number.");
            continue;
        }

        if (guess === number) {
            alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
            return;
        } else if (guess < number) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }
    }

    alert(`Game over! The number was ${number}.`);
}

function startNewGame() {
    do {
        playGame();
    } while (confirm("Do you want to play again?"));
}
