// how to access data
//  array- using index
//  object - using dot/bracket notation

const data = [{ id: 1, userNAme: "abul", address: "kochur khet" }];

// console.log(data[0].address)

const products = {
  count: 5000,
  data: [
    {
      id: 1,
      name: "lenovo laptop",
      price: 65000,
    },
    {
      id: 2,
      name: "Mac book",
      price: 165000,
    },
  ],
};

// second product price
// console.log(products.data[1].price)

const user1 = {
  id: 5001,
  name: "Shoriful Raj",
  address: {
    street: {
      first: "54/1 uttor side",
      second: "pribag er goli",
      third: "no dorai",
    },
    city: "Dhaka",
  },
};

// access the second street

// console.log(user1.address.street.second)

const user2={
    id:5002,
    name: 'pori bibir majar',
    address:{
        city:'chitagong',
        country:'Bangladesh'
    }

}
// console.log(user2.address.street?.second)  // optional chaining `?`
// optional chaining--> jodi man paawa jay tahle dekhabe. r value pawa na gele 'undefined' dekhabe

console.log(user1.address.street?.second) 
console.log(user2.address.street?.second) 