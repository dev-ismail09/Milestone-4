// 1 - array element sum
function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        // let sum = 0; // akane nile sum all time 0 hobe
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
        // return sum;// akane nile sudu akbar e code run hoye ber hoye jabe  
    }
    return sum;
}

const myNumbers = [12, 54, 34, 63, 93];
getSumOfAnArray(myNumbers);


// 2 - array element odd number sum

function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);

        } 
    }
    return oddNumbers;
}

const herNumber = [54, 7, 89, 24, 87];
const oddNumbers = getOddNumbersOfAnArray(herNumber);
console.log(oddNumbers);

const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log("Odd Number Sum: ", oddNumberSum);