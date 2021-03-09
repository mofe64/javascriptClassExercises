const prompt = require('prompt-sync')()
const checkIfPositiveOrNegative = (number) => {
    if (number >= 0) {
        return "Is Positive";
    }
    return "Is Negative";
}

const number = Number(prompt("Enter a number "))
console.log(checkIfPositiveOrNegative(number))
