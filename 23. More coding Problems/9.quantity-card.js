const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 5 },
    { name: 'shirt', price: 2200, quantity: 2 },
    { name: 'pant', price: 3700, quantity: 3 },
    { name: 'belt', price: 600, quantity: 4 },
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        // console.log(product);
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log(expense);