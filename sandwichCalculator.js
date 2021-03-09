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


    console.log(noOfSandwichesWithChese)
    return noOfSandwichesWithChese;
}

extendedSandwichCalculator(10, 2)