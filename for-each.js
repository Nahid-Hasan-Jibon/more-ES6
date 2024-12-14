//  for each works like map but map return somthing but for each does not return something

const numbers = [1, 2, 5, 6, 7, 8, 15];

const result = numbers.forEach((n) => console.log(n));

console.log(result) // undefined because forEach returns nothing