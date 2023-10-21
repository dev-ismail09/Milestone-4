// let sum = 0;
// for(let i = 0; i <= 5; i++){
//     sum = sum + i;
// }
// console.log(sum);


// let sum = 0;
// for(let i = 10; i >= 1; i--){
//     sum = sum + i;
// }
// console.log(sum);

function sum(i){
    if(i == 1){
        return 1;
    }
    // console.log(i);
    return i + sum(i-1); //একটা function এর ভেতর থেকে সেম function টাকে Call করতে পারবো - Recuasion বলে
}

const result = sum(5);
console.log(result);

/*
 5 + sum(4)
 5 + i + sum(i -1)
 5 + 4 + sum(3)
 ...............
 5 + 4 + 3 + 2 + 1
*/

// let factotial = 1;
// for(let i = 5; i >= 1; i--){
//     factotial = factotial * i;
// }
// console.log(factotial);


function factotial(i){
    if( i == 1){
        return 1;
    }
    return i * factotial(i - 1);
}

const output = factotial(5);
console.log(output);