const prompt = require('prompt-sync')()
const checkNumbers = (number1, number2) => {
    let result = false;
    if (number1 === 50 || number2 === 50) { result = true };
    if (number1 + number2 === 50) { result = true };
    return result;
}

let number1 = Number(prompt("Enter a number "));
let number2 = Number(prompt("Enter another number ..."))
console.log(checkNumbers(number1, number2))

