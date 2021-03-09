const prompt = require('prompt-sync')()
const getSumOfArray = (array = []) => {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

// console.log(getSumOfArray([1, 2, 3, 45, 6, 6, 7]))


const getProductOfArray = (array = []) => {
    let product = 1;
    array.forEach(element => {
        product *= element;
    });
    return product;
}

// console.log(getProductOfArray([1,2,3,4,5]))
let choice = Number(prompt("Enter 1 to calculate sum or 2 to calculate product"))
let array = [];
let sentinel = 1
while (sentinel !== -1) {
    const value = prompt("Enter number to place in the array or press q to stop placing items in array ");
    if (value === 'q' || value === 'Q') {
        sentinel = -1;
    } else {
        array.push(Number(value))
    }
}
if (choice === 1) {
    console.log(getSumOfArray(array))
} else {
    console.log(getProductOfArray(array))
}
