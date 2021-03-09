const prompt = require('prompt-sync')()
const computeSum = (number1, number2) => {
    let sum = number1 + number2;
    if (number1 === number2) {
        return sum * 3;
    }
    return sum;
}

let number1 = Number(prompt("Enter a number "))
let number2 = Number(prompt("Enter another number "))

console.log(computeSum(number1, number2))