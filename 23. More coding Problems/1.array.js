// 1
const student = {id: 150, name:"ismail", class: 11};
const friends = [12, 15, 40, 34, 14];
console.log(typeof student);
console.log(typeof friends);
// check array using Array.isArray
console.log(Array.isArray(friends));

//2 
console.log(friends.includes(10));
console.log(friends.includes(15));

// concat

const newFriends = [10, 13, 15, 30, 40];
const allFriends = newFriends.concat(friends);
console.log(allFriends);
