console.log("Hello World");

// #########################
// SAMPLE ARRAY
// const sampleArray = [1, 2, 3, 4, 5];

// #########################
// ANONYMOUS AND ARROW FUNCTIONS
// Anonymous Function
// sampleArray.forEach(function (element) {
//   console.log(element);
// });

// Arrow Function
// sampleArray.forEach((element) => {
//   console.log(element);
//   console.log("test");
// });

// #########################
// MAP METHOD
// https://www.w3schools.com/jsref/jsref_map.asp
// const sampleArray = [1, 2, 3, 4, 5];
// const square = (num) => num * num;
// const newMap = sampleArray.map(square);
// console.log(newMap);

// #########################
// FILTER METHOD
// https://www.w3schools.com/jsref/jsref_find.asp
const ages = [2, 33, 16, 40];
// const checkAdult = (age) => age >= 18;
// const resultArrow = ages.filter(checkAdult);
const resultArrow = ages.filter((age) => age >= 18);
console.log(resultArrow);

// #########################
// FIND METHOD
// const ages = [2, 33, 16, 40];
// const checkAge = (age) => age > 50;
// console.log(ages.find(checkAge));

// #########################
// INCLUDES METHOD
// https://www.w3schools.com/jsref/jsref_includes_array.asp
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Mango"));

// #########################
// SOME METHOD
// const ages = [2, 33, 16, 40];
// const checkAdult2 = (age) => age > 18;
// console.log(ages.some(checkAdult2));

// #########################
// EVERY METHOD
// https://www.w3schools.com/jsref/jsref_every.asp
// const checkAge2 = (age) => age > 0;
// console.log(ages.every(checkAge2));

// #########################
// COMPLEX ARRAY EXAMPLES
// const complexArray = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Jack", age: 15 },
//   { name: "Jill", age: 20 },
// ];

// const over18 = complexArray.filter((person) => person["age"] > 18);
// console.log(over18);

// const john = complexArray.find((person) => person.name === "John");
// console.log(john);

// const over18Exists = complexArray.some((person) => person.age > 18);
// console.log("over18Exists: " + over18Exists);
// const over18Every = complexArray.every((person) => person.age > 18);
// console.log("over18Every: " + over18Every);

// #########################
// REDUCE METHOD
// Reduce converts all elements into one element
// const sampleArray = [1, 2, 3, 4, 5];
// const sum = sampleArray.reduce((acc, num) => acc + num, 0);
// const factorial = sampleArray.reduce((acc, num) => acc * num, 1);
// console.log(sum);
// console.log(factorial);

// #########################
// SIDE NOTE: TRUTHY AND FALSY VALUES
// undefined is not a boolean, but is truthy falsy
// if (undefined) {
//   console.log("TEST");
// }

// !! coerces it to a boolean
// !!{} = true
// !![] = true
// !!0 = false
// !!"" = false
// !!NaN = false
// !!undefined = false
// !!null = false
