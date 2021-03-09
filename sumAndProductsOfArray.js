const getSumOfArray = (array = []) => {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(getSumOfArray([1, 2, 3, 45, 6, 6, 7]))


const getProductOfArray = (array = []) => {
    let product = 1;
    array.forEach(element => {
        product *= element;
    });
    return product;
}

console.log(getProductOfArray([1,2,3,4,5]))