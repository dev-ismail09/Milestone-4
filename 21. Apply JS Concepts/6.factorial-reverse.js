function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}

const number = 7;
const fact = factorial(number);
console.log("factorial of", number, ":", fact);

//  while loop

function factorial2(number2){
    let i = 7;
    let result2 = 1;
    while( i >= 1){
        result2 = result2 * i;
        i--;
    }
    return result2;
}
const output = factorial2(7);
console.log(output);