function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[3]); // result:- array like object
}

add(12, 13, 45, 26);