// const numbers =[4,5,6,8,10];

// const doubled =[];
// for(const num of numbers){
//     const double =num*2;
//     doubled.push(double)
// }
// console.log(doubled)

// MAP--> loops through each element of an array and do the operation that you passed in the callback function and hold the result from each operation in an array and finally returns you the array .

// const numbers =[4,5,6,8,10];
// function doubledIt(num){
//     console.log('number now', num)
//     return num*2
// }
// const result = numbers.map(doubledIt)
// console.log(result)

// more short way using arrow function

// const numbers =[4,5,6,8,10];
// const doubledIt2=n=>n*2
// const result2=numbers.map(doubledIt2)

// console.log(result2)

// more short way direct using the function in map

const numbers = [4, 5, 6, 8, 10,99];

const result3 = numbers.map(n=>n*2);
console.log(result3)
