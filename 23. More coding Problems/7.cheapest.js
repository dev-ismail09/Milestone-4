const phones = [
    { name: "iphone", camera: 12, storate: '64gd', price: 84000, color: "black"},
    { name: "Nokia", camera: 10, storate: '64gd', price: 42000, color: "white"},
    { name: "Oppo", camera: 32, storate: '64gd', price: 22000, color: "black"},
    { name: "Vivo", camera: 16, storate: '64gd', price: 26000, color: "black"},
    { name: "HTC", camera: 10, storate: '64gd', price: 38000, color: "white"},
    { name: "Realme", camera: 12, storate: '64gd', price: 20000, color: "black"}
];

function cheapestPhone(phones){
    let returnStore = phones[0]; // iphone detalis
    // console.log(phones);
    for(var i = 0; i < phones.length; i++){
        const element = phones[i];
        if(element.price < returnStore.price){
            returnStore = element;
        }
    }
    return returnStore;
}

const result = cheapestPhone(phones);
console.log(result);
