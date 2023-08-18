function maxInArray(numbers){
    let bigBro = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if(element > bigBro){
            bigBro = element;
        }
    }
    return bigBro;
}

let heights = [137, 154, 195, 175, 250];
let tallest = maxInArray(heights);
console.log(tallest);