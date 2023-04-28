const shoppingCartObject = {
  name: "dog toy",
  price: 6.99,
  description: "this is an awesome toy",
  quantity: 3,
};

// Functions, properties, methods
// function avatarString(name) {
//   const firstInitial = name[0];
//   const spaceIndex = name.indexof(" ");
//   const lastInitial = name[spaceIndex + 1];
//   return firstInitial + lastInitial;
// }

// Methods of fetch a value from an object
console.log(shoppingCartObject.name);
console.log(shoppingCartObject["name"]);
// Adding a new key-value pair to the object
shoppingCartObject.ratings = 5.0;
// Updating key's value
shoppingCartObject.price *= 2;
// Removing key-value pair
delete shoppingCartObject.description;

// You can add functions to an object
shoppingCartObject.helloFunction = function () {
  console.log("hello");
};
console.log(shoppingCartObject);
console.log(shoppingCartObject.helloFunction());
const shoppingCart = [
  shoppingCartObject,
  {
    name: "other toy",
    price: 2.99,
    description: "this is another toy",
    quantity: 1,
  },
];
console.log(shoppingCart);
console.log(shoppingCart[0].price);
