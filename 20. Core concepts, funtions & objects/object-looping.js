var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 2,
    pen: 23
}

var key = Object.keys(shoppingCart);
var value = Object.values(shoppingCart);
console.log(key, value);

for(var i = 0; i < key.length; i++){
    var propertyName = key[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}