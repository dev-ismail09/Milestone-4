var numbers = [45, 53, 32, 77, 56.44, 14.2, 24];

// 1. get element by index

console.log(numbers[0]);
console.log(numbers[3]);
var element = numbers[1];
console.log(element);

// 2. element set any index position
console.log(numbers[1]);
numbers[1] = 10;
console.log(numbers);
console.log(numbers[1]);

// 3. find index of an element

var positionIndex = numbers.indexOf(77);
console.log(positionIndex); // r oi number index a na thakle -1 (array er modde nai)