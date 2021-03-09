const prompt = require('prompt-sync')()
const areaOfScaleneTriangle = (side1, side2, side3) => {
    let s = (side1 + side2 + side3) / 2;
    let area;
    area = s * (s - side1) * (s - side2) * (s - side3);
    area = Math.sqrt(area)
    return area;
}
const side1 = Number(prompt("Enter side1 "))
const side2 = Number(prompt("Enter side2 "))
const side3 = Number(prompt("Enter side3 "))

console.log(areaOfScaleneTriangle(side1, side2, side3))

// 