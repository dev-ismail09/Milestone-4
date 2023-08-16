var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 2,
    pen: 23
}

// when you know the property name, use dot notation
// 1. way
var penCount = shoppingCart.pen;
// alternative system
// 2. way
var penCount2 = shoppingCart['pen'];

// 3. way
var propertyName = 'keyboard';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

//
var propertys = Object.keys(shoppingCart);
var propertys_Values = Object.values(shoppingCart);
console.log(propertys);
console.log(propertys_Values);