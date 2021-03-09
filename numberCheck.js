const checkNumbers = (number1, number2) => {
    let result = false;
    if (number1 === 50 || number2 === 50) { result = true };
    if (number1 + number2 === 50) { result = true };
    return result;
}

