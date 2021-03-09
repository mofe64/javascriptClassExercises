const prompt = require('prompt-sync')()
const joinElements = (array = []) => {
    return array.join();
}

let array = [];
let sentinel = 1
while (sentinel !== -1) {
    const value = prompt("Enter a value to place in the array or press q to stop placing items in array ");
    if (value === 'q' || value === 'Q') {
        sentinel = -1;
    } else {
        array.push(value)
    }
}
console.log(joinElements(array))
