// const numbers = [45, 65, 23, 98, 19];

// for(const number of numbers){
//      console.log(number);
// }


const products = [
    {id: 1, name: 'Xiami phone', price: 19000},
    {id: 2, name: 'iphone phone', price: 89000},
    {id: 3, name: 'macbook laptop', price: 195000},
    {id: 4, name: 'Dell laptop', price: 47000},
    {id: 5, name: 'nokia', price: 35000},
    {id: 6, name: 'walton phone', price: 29000},
];


function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'LaPTop');
console.log(result);