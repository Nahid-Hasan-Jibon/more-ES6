const products = [
    { id: 1, name: "lenovo", price: 65000 },
    { id: 2, name: "dell", price: 45000 },
    { id: 3, name: "hp", price: 40000 },
    { id: 4, name: "Mac", price: 150000 },
];


// map
const productName=products.map(product=>product.name);
console.log(productName) //[ 'lenovo', 'dell', 'hp', 'Mac' ]

const productPrice=products.map(product=>product.price)
console.log(productPrice)

//filter

const expensive =products.filter(p=>p.price>50000)
console.log(expensive)

//find

const affordable =products.find(p=>p.price<50000)
console.log(affordable)

// reduce

const total = products.reduce((previous, current)=>previous+current.price,0)

console.log(total)