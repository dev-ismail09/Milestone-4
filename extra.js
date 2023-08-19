function sumAllNum(number){
    let sum = 0;
    for(var i = 0; i < number.length; i++){
        const index = i;
        const element = number[index];
        sum = sum + element;
    }
    return sum;
}

function allOddSum(numbers){
    let newNumber =  [];
    for(var i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        // console.log(index, element);
        if(element  % 2 === 1 ){
            // console.log("odd number");
            newNumber.push(element);
        }
    }
    return newNumber;
}


const oddNSum = [51, 14, 24, 27, 25, 30];
const OddSum = allOddSum(oddNSum);
console.log(OddSum);

const finalResult = sumAllNum(OddSum);
console.log(finalResult);