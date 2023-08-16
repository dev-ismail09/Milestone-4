function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    console.log(sum);
    return 20;
    return "hello babu";
    return sum; // haha aigula kaj e korbe na karon alreay function return hoye ber hoye gese
}

var total = add(80, 20);
console.log('Total', total);

// 2
function singara(money){
    console.log("koi tk dilam: ", money);
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var tk_dilam = 400;
var total_singara = singara(tk_dilam);
console.log("total singara paibi: ", total_singara);