for(var i = 1; i < 20; i++){
    console.log(i);
    if(i >= 10){
        break;
    }
}

var items = ['bottle', 'mouse', 'phone', 'pen', 'gameplay'];
items.unshift('Boom');
for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == 'pen'){
        break;
    }
    console.log(item);
}

var numbers = [45, 24, 75, 95, 42, 14, 230, 65, 72];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
}