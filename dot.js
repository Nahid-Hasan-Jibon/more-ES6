const person ={
    name:'kodom ali',
    job: 'badam khai',
    3:'third',
    'address': 'malipara'

}
const prop = 'job'
console.log(person.job)
console.log(person['job'])
console.log(person[prop])
console.log(person['3'])
console.log(person['address'])


// Dot Notation Vs Bracket Notation
/**
 * Dot notation is faster to write and clear to write and cleaner to read, easy to read.
 * 
 * Square bracket notation allows access to properties containing special characters and selection of properties using variables.
 * 
 * You can use variables with bracket notation but not with dot notation. this is specially useful for situations when you want access a property but don't know the name of the property ahead of time
 */