// 1 + 2 + 3 + 4 + 5 + 6 + 7

// simple way
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
    console.log(i, sum);
}

// function way

function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}

const return_store = sumOfNumbers(50);
console.log(return_store);


// multiplication of number
// 1 * 2 * 3....
// 3! = 3 * 2 * 1
// 4! = 4*3*2*1

function factorial(number){
    let result = 1; // আসল খেলা এখানে যোদ এর বেলাই ০ দিয়ে শুরু করলে ও পরে তা যোগ হয়ে মান বাড়ে, কিন্ত গুন এর বেলাই ০ দিয়ে শুধু  হোলে সব সময়ে ০ ই আসবে তাই ১ দিয়ে শুরু করতে হবে
    for(let i = 1; i <= number; i++){
        result = result * 7
    }
    return result;
}

const result = factorial(7);
console.log(result);