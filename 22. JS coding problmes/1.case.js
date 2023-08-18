// string immutable
let first = "ismail";
console.log(first);

let fullN = "Ismail Hosen";
console.log(fullN)
console.log(fullN.length);
console.log(fullN[6]); // ' ' -- The String is immutable, so its value cannot be changedThe String is immutable, so its value cannot be changed


// case

const userName = 'blackPinK';
const userInput = 'blackPink';

if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log("valid user");
}
else{
    console.log("invalid user");
}