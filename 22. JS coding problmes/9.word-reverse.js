function reverseWord(str){
    const words = str.split(' ');
    const reverse = [];
    for(var i = words.length - 1; i >= 0; i--){
        const element = words[i];
        reverse.push(element);
    }
    const add = reverse.join(' ');
    return reverse;
}



const myString = "I am a good boy";
const output = reverseWord(myString);
console.log(output);