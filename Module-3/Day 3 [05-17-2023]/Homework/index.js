// DEBUGGING
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#debugging
// console.log()
// console.clear()
// console.warn()

// console.log(typeof "");
// console.log(typeof 0);
// console.log(typeof []);
// console.log(typeof {});

// More stuff about fixing parentheses and infinite loops, etc.

// BASIC DATA STRUCTURES
//www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-data-structures

// let simpleArray = ['one', 2, 'three', true, false, undefined, null];
// console.log(simpleArray.length);

// let complexArray = [
//     [
//       {
//         one: 1,
//         two: 2
//       },
//       {
//         three: 3,
//         four: 4
//       }
//     ],
//     [
//       {
//         a: "a",
//         b: "b"
//       },
//       {
//         c: "c",
//         d: "d"
//       }
//     ]
//   ];

//   let ourArray = ["a", "b", "c"];
//   let ourVariable = ourArray[0];
//   ourArray[1] = "not b anymore";

// Unshift and Push Ex
// let twentyThree = 'XXIII';
// let romanNumerals = ['XXI', 'XXII'];
// romanNumerals.unshift('XIX', 'XX');
// romanNumerals.push(twentyThree);

// Splice Ex 1
// let array = ['today', 'was', 'not', 'so', 'great'];
// array.splice(2, 2);

// Splice Ex 2
// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;
// numbers.splice(startIndex, amountToDelete, 13, 14);
// console.log(numbers);

// Slice Ex 1
// let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
// let todaysWeather = weatherConditions.slice(1, 3);

// Spread Operator Ex 1
// let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray];

// Spread Operator Ex 2
// let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
// let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

// Index Of
// let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
// fruits.indexOf('dates');
// fruits.indexOf('oranges');
// fruits.indexOf('pears');

// #####################################

// let users = {
//     Alan: {
//       age: 27,
//       online: true
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: true
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };

// users.hasOwnProperty('Alan');
// 'Alan' in users;

// function isEveryoneHere(userObj) {
//     return userObj.hasOwnProperty("Alan") &&
//        userObj.hasOwnProperty("Jeff") &&
//        userObj.hasOwnProperty("Sarah") &&
//        userObj.hasOwnProperty("Ryan");
// }

//   function isEveryoneHere(userObj) {
//     return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
//       userObj.hasOwnProperty(name)
//     );
//   }

//  console.log(isEveryoneHere(users));

// for...in loop
// const refrigerator = {
//     'milk': 1,
//     'eggs': 12,
//   };

//   for (const food in refrigerator) {
//     console.log(food, refrigerator[food]);
//   }

// We've defined a function countOnline which accepts one argument, allUsers.
// Use a for...in statement inside this function to loop through the allUsers object and return the number of users whose online property is set to true.
// An example of an object which could be passed to countOnline is shown below. Each user will have an online property set to either true or false.

// const users = {
//     Alan: {
//       online: false
//     },
//     Jeff: {
//       online: true
//     },
//     Sarah: {
//       online: false
//     }
//   }

//   function countOnline(allUsers) {
//     // Only change code below this line
//     var count = 0;
//     for(const user in users){
//       if(allUsers[user].online){
//         count ++;
//       }
//     }
//     return count;
//     // Only change code above this line
//   }

//   console.log(countOnline(users));

// Fetchings Key of an Object
// let users = {
//     Alan: {
//       age: 27,
//       online: false
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: false
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };

//   function getArrayOfUsers(obj) {
//     // Only change code below this line
//     return Object.keys(obj);
//     // Only change code above this line
//   }

//   console.log(getArrayOfUsers(users));
