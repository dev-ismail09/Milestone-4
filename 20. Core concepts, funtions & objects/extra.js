var numbers = [3, 45, 34, 56, 43, 64, 43];
var store = numbers.slice(1, 3);
console.log(store);


var person = 'Ariana Grande is singing';
var store2 = person.includes('singing');
console.log(store2);

var show = person.substring(0, 10);
console.log(show);

person[1] = 'X'; // immutable 
console.log(person);