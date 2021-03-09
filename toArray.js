const prompt = require('prompt-sync')()
const toArray = (number1, number2) => {
    return Array(number1, number2)
}

let number1 = Number(prompt("Enter number 1"))
let number2 = Number(prompt("Enter number 2"))
console.log(toArray(number1,number2))