const difficulty = document.getElementById('difficulty');

const difficultyLevels = {
    facile: { maxAttempts: 10, maxNumber: 50 },
    intermediaire: { maxAttempts: 7, maxNumber: 100 },
    difficile: { maxAttempts: 5, maxNumber: 200 },
};

function setRules() {
    const selectedValue = difficulty.value;

    if (selectedValue === 'facile') {
        return { ...difficultyLevels.facile, number: Math.floor(Math.random() * difficultyLevels.facile.maxNumber + 1) };
    } else if (selectedValue === 'intermediaire') {
        return { ...difficultyLevels.intermediaire, number: Math.floor(Math.random() * difficultyLevels.intermediaire.maxNumber + 1) };
    } else if (selectedValue === 'difficile') {
        return { ...difficultyLevels.difficile, number: Math.floor(Math.random() * difficultyLevels.difficile.maxNumber + 1) };
    }
}

function playGame() {
    const rule = setRules();
    let attempts = 0;
    const number = rule.number;
    const maxAttempts = rule.maxAttempts;

    while (attempts < maxAttempts) {
        const guess = prompt(`Donner un nombre entre 0 et ${rule.maxNumber} | attempts : ${attempts}`);
        attempts++;

        if (guess === null) {
            alert("Game canceled.");
            break;
        }

        if (isNaN(guess)) {
            alert("Please enter a valid number.");
            continue;
        }

        if (parseInt(guess) === number) {
            alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
            return;
        } else if (parseInt(guess) < number) {
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