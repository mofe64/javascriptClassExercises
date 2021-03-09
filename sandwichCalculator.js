const prompt = require('prompt-sync')()
const sandwichCalculator = (slicesOfBread) => {
   let numberOfPossibleSanwiches = slicesOfBread / 2;
    return Math.floor(numberOfPossibleSanwiches);
}

const extendedSandwichCalculator = (slicesOfBread, slicesOfCheese) => {
    let numberOfPossibleSandwiches = Math.floor(slicesOfBread / 2);
    let noOfSandwichesWithChese =0
   let check = true;
    while (check) {
        if (slicesOfCheese > 0 && noOfSandwichesWithChese < numberOfPossibleSandwiches) {
            noOfSandwichesWithChese += 1;
            slicesOfCheese--;
        } else {
            check = false
        }

    }


    // console.log(noOfSandwichesWithChese)
    return noOfSandwichesWithChese;
}

let choice = Number(prompt("Enter 1 to calculate with just bread or 2 to calculate with bread and cheese"))
if (choice === 1) {
    let slicesOfBread = Number(prompt("Enter the slices of bread available "))
    console.log(sandwichCalculator(slicesOfBread))
} else {
    let slicesOfBread = Number(prompt("Enter the slices of bread available "))
    let slicesOfCheese = Number(prompt("Enter the slices of Cheese available "))
    console.log(extendedSandwichCalculator(slicesOfBread, slicesOfCheese))
}