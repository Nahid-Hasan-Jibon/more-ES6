//Filter :  kicu shorto onusare kno kicu bacai kora
// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.

const numbers = [1, 2, 4, 5, 6, 76, 15];

const players = [56, 67, 78, 98, 34, 56, 75, 78, 59];

// const selected = players.filter((p) => p > 70);
const selected = players.filter((p) => p % 2 === 1);
console.log(selected);

const friends = ["Tom", "John", "Micheal", "Oliver", "Jack", "Jerry"];

const filteredFriends = friends.filter((friend) => friend.length > 4);
console.log(filteredFriends);
