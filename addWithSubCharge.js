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