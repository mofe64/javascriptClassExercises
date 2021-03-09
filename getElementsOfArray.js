const prompt = require('prompt-sync')({sigint: true})
const getElements = (array = [], n = 0) => {
    if (n === 0) {
        return array[n]
    } else {
        return array.slice(0, n)
    }
}
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
let check = Number(prompt("Would you like to specify an N value(number of elements you want to get from the array, press 1 for yes 2 for no)"))
let n = -1;
if (check === 1) {
    let value = Number(prompt("Enter your n value "));
    if (value > array.length()) {
        console.log("Specified N Value is invalid as array is smaller than specified value ");
    } else {
        n = value;
    }
}
if (n == -1) {
   console.log( getElements(array))
} else {
    console.log(getElements(array, n))
}


