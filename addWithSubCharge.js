const prompt = require('prompt-sync')()
const addWithSubCharge = (number1, number2) => {
    let subcharge = 0;
    if (number1 <= 10) {
        subcharge += 1;
    } else {
        subcharge += 2;
    }
    if (number2 <= 10) {
        subcharge += 1;
    } else {
        subcharge += 2;
    }

    return subcharge + number1 + number2;
}

const number1 = Number(prompt("Enter number1 "))
const number2 = Number(prompt("Enter number2"))

console.log(addWithSubCharge(number1, number2))