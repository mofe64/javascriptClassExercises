const rotate = (array=[]) => {
    let firstItem = array.shift();
    array.push(firstItem);
    return array;
}

console.log(rotate([1,2,4,5,6]))