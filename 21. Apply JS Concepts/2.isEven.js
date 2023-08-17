// Even number
console.log(12/2);
console.log(24/2);
console.log(48/2);
console.log(96/2);

console.log(12%2);
console.log(24%2);
console.log(48%2);
console.log(96%2);

console.log(13/2);
console.log(25/2);
console.log(49/2);
console.log(97/2);


console.log(13%2);
console.log(25%2);
console.log(49%2);
console.log(97%2);


// Even number with function
function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);
    if(remainder ==  0){
        // console.log('Even Number');
        return true;
    } 
    else{
        // console.log('Odd Number');
        return false;
    }
}
const myNumber = isEven(15);
console.log(myNumber);
const herNumber = isEven(48);
console.log(herNumber);