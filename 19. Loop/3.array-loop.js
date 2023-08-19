// for(var i = 0; i < 10; i++){
//     console.log(i);
// }

// target: display every elements of an array

var numbers = [45, 24, 75, 95, 42, 14, 230, 65, 72];
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    console.log(element); // number[0] = 45
}

var items = ['bottle', 'mouse', 'phone', 'pen', 'gameplay'];
items.unshift('Boom');
for(var i = 0; i < items.length; i++){
    console.log(items[i]);
}