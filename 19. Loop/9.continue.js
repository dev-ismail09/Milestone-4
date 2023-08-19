// var numbers = [45, 24, 75, 95, 42, 14, 230, 65, 72];
// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     if(number > 50){
//         break;
//     }
//     console.log(number);
// }
var numbers = [45, 24, 75, 95, 42, 14, 230, 65, 72];
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    if(element > 50){
        continue;
    }
    console.log(element);
}