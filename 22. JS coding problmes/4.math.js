const result = Math.pow(2, 8);
console.log(result);

const num1 = 25;
const num2 = 45;

// const gap = num1 - num2;
const gap = Math.abs(num1 - num2);
console.log(gap);
if(gap < 5){
    console.log('you guys can be friends');
}

else{
    console.log('you guys stay apart');
}

// ----------------------

const number = 2.4999;
const fullNumber = Math.round(number);// .5 hole up number hobe
const upNumber = Math.ceil(number);
const downNumber = Math.floor(number);
console.log(fullNumber);
console.log(upNumber);
console.log(downNumber);

// Random  ----------------------
console.log(Math.random());
const random = Math.random()*100;
// console.log(random);
console.log(Math.round(random));

// for(let i = 0; i < 6; i++){
//     const six = Math.round(Math.random()*6);
//     console.log(six);

// }