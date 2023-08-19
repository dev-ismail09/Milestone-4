const friends = [12, 15, 40, 34, 14, 56, 45, 26];

// Removes elements from an array 
//and, if necessary, inserts new elements in their place, 
//returning the deleted elements.
// will change the original array

const partial = friends.splice(2, 5, 102, 103, 105, 106, 107, 201); // index 2 theke suru kore 5 ta nibe mot
console.log(partial);
console.log(friends);// change