function getAverage(assi1, assi2, assi3){
    const total = assi1 + assi2 + assi3;
    const average = total / 3;
    return average;
}

const assi1 = 60;
const assi2 = 59;
const assi3 = 58;

var myAvarage = getAverage(assi1, assi2, assi3);
console.log(myAvarage);


// 2
function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(112, 24);
const result2 = add(12, 12);
const myResult = add(result1, result2);
console.log(myResult);