const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];
function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i< names.length; i++){
        const elements = names[i];
        if(unique.includes(elements) === false){
            unique.push(elements);
        }
    }
    return unique;
}

const uniqeNames = removeDuplicate(names);
console.log(uniqeNames);