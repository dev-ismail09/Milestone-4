function reverseString(text){
    // for(let i = 0; i < text.length; i++){}
    let pass = '';
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        pass = pass + element;
        console.log(element, pass);
    }
    return pass;

}

const myString = "I am a good boy";
const reversed = reverseString(myString);
console.log(reversed);