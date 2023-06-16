// #######################################################
// // Avoiding Mutations/Side Effects of Functions
// // The global variable
// let fixedValue = 4;

// function incrementer() {
//   // Only change code below this line
//   return fixedValue + 1;
//   // Only change code above this line
// }

// VS

// // The global variable
// let fixedValue = 4;

// function incrementer() {
//   // Only change code below this line
//   return fixedValue++;
//   // Only change code above this line
// }
// #######################################################

// #######################################################
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/pass-arguments-to-avoid-external-dependence-in-a-function
// Pass Arguments to Avoid External Dependence in a Function

// // The global variable
// let fixedValue = 4;

// // Only change code below this line
// function incrementer(fixedValue) {
//     return fixedValue + 1;
//   // Only change code above this line
// }
// #######################################################

// #######################################################
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions
// Refactor Global Variables Out of Functions
// So far, we have seen two distinct principles for functional programming:

// Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

// Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.
// #######################################################

// #######################################################
// Javascript Passing by Value vs. Reference Explained in Plain English
// https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c
// #######################################################

// #######################################################
// This one is tricky
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions
// #######################################################

// #######################################################
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-the-map-method-to-extract-data-from-an-array/18214
// Use the map Method to Extract Data from an Array
// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const names = users.map(user => user.name);
// console.log(names);

// Then show example of retuning a new map (in link above and more in depth-below)

// Why does this work:
// const ratings = watchList.map(movie => ({
//   title: movie.Title,
//   rating: movie.imdbRating
// }));

// but not this:
// const ratings = watchList.map(movie => {
//   title: movie.Title,
//   rating: movie.imdbRating
// });

// ChatGPT
// In JavaScript, curly braces ({}) are used for two main purposes:

// 1.) To create an object literal: {property: value, anotherProperty: value}

// 2.) To define a block of code: function() { /* code here */ }

// In your second code snippet, JavaScript sees the opening curly brace right after the arrow function => and interprets it as the start of a code block, not an object literal.
// Because the content within the braces is not valid code (it looks like properties of an object instead), JavaScript throws an error.

// To get around this, you can wrap the object literal in parentheses. This lets JavaScript know that it should expect an expression, not a code block.
// The opening parenthesis is not valid syntax for the start of a block, so JavaScript interprets the following curly braces as an object literal:

// #######################################################
// Review this one again:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype
// #######################################################

// #######################################################
// Use the filter Method to Extract Data from an Array
// const watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// // Only change code below this line
// let newMapList = watchList.map(movie =>({
//   title:movie.Title,
//   rating:movie.imdbRating
// }))
// const filteredList = newMapList.filter(movie => movie.rating >= 8.0);

// // console.log(newList);
// // Only change code above this line

// console.log(filteredList);
// #######################################################

// #######################################################
// Difficult for me:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-the-filter-method-on-a-prototype
// #######################################################

// "THIS" meaning in JS
// https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/

// splice vs slice
// #######################################################
// // Slice Example - Does not mutate array, only returns new one
// function sliceArray(anim, beginSlice, endSlice) {
//   // Only change code below this line
//   return anim.slice(beginSlice,endSlice);
//   // Only change code above this line
// }

// const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
// sliceArray(inputAnim, 1, 3);
// #######################################################

// #######################################################
// // Splice Example - Mutates the array
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/remove-elements-from-an-array-using-slice-instead-of-splice
// function nonMutatingSplice(cities) {
//   // Only change code below this line
//   return cities.splice(3);
//   // Only change code above this line
// }

// const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
// nonMutatingSplice(inputCities);
// #######################################################

// #######################################################
// // Concat Example - Does not mutate original array
// function nonMutatingConcat(original, attach) {
//   // Only change code below this line
//   return original.concat(attach);
//   // Only change code above this line
// }

// const first = [1, 2, 3];
// const second = [4, 5];
// nonMutatingConcat(first, second);
// #######################################################

// #######################################################
// // Push Example - Mutates the original array
// function nonMutatingPush(original, newItem) {
//     // Only change code below this line
//     return original.push(newItem);
//     // Only change code above this line
//   }

//   const first = [1, 2, 3];
//   const second = [4, 5];
//   nonMutatingPush(first, second);
// #######################################################

// #######################################################
// // Reduce Example
// // The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array).
// // This is achieved via a callback function that is called on each iteration.
// // Prompt: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-reduce-method-to-analyze-data
// const watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//       "Metascore": "74",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//       "Metascore": "82",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//       "Metascore": "70",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//       "Response": "True"
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//       "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//       "Metascore": "83",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//       "Response": "True"
//     }
//   ];

//   function getRating(watchList) {
//     // Only change code below this line
//     let filteredMovies = watchList.filter(movie => movie.Director === "Christopher Nolan")
//     let filteredRatings = filteredMovies.map(movie => movie.imdbRating);
//     let averageRating = (filteredRatings.reduce((accum,curr) => Number(accum) + Number(curr))/filteredRatings.length)
//     // Only change code above this line
//     return averageRating;
//   }

//   console.log(getRating(watchList));
// #######################################################

// #######################################################
// // Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
// // Complete the code for the squareList function using any combination of map(), filter(), and reduce().
// // Only positive integers
// const squareList = arr => {
//     // Only change code below this line
//     let filteredArr = arr.filter(num => num >= 0 && num % 1 === 0);
//     let squaredArr = filteredArr.map(num => num ** 2);
//     return squaredArr;
//     // Only change code above this line
//   };

//   const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//   console.log(squaredIntegers);
// #######################################################

// #######################################################
// // Sort Array Asc - Mutates array
// function ascendingOrder(arr) {
//     return arr.sort(function(a, b) {
//       return a - b;
//     });
//   }

//   ascendingOrder([1, 5, 2, 3, 4]);
// #######################################################

// #######################################################
// // Sort Array Alphabetically - Mutates array
// function alphabeticalOrder(arr) {
//     // Only change code below this line
//     return arr.sort(function(a,b){
//       return a === b ? 0 : a > b ? 1 : -1;
//     })
//     // Only change code above this line
//   }

//   alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
// #######################################################

// #######################################################
// // Return a Sorted Array Without Changing the Original Array
// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//   // Only change code below this line
//     return arr.slice(0,arr.length + 1).sort(function(a, b) {
//       return a - b;
//     });
//   // Only change code above this line
// }

// nonMutatingSort(globalArray);
// #######################################################

// #######################################################
// // Split Example
// // Split a String into an Array Using the split Method
// // /\W/ <= Any non-word characters
// function splitify(str) {
//     // Only change code below this line
//     return str.split(/\W/);
//     // Only change code above this line
//   }
//    splitify("Hello World,I-am code");
// // splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].
// // splitify("Earth-is-our home") should return ["Earth", "is", "our", "home"].
// // splitify("This.is.a-sentence") should return ["This", "is", "a", "sentence"].
// #######################################################

// #######################################################
// // Join Example
// // Combine an Array into a String Using the join Method
// function sentensify(str) {
//     // Only change code below this line
//     let splitStr = str.split(/\W/);
//     return splitStr.join(" ");
//     // Only change code above this line
//   }

//   sentensify("May-the-force-be-with-you");
// #######################################################

// #######################################################
// // Every Example
// // Use the every Method to Check that Every Element in an Array Meets a Criteria
// // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria
// function checkPositive(arr) {
//     // Only change code below this line
//     return arr.every((num) => num > 0);
//     // Only change code above this line
//   }

//   checkPositive([1, 2, 3, -4, 5]);
// #######################################################

// #######################################################
// // Some Example
// // Use the some Method to Check that Any Elements in an Array Meet a Criteria
// function checkPositive(arr) {
//     // Only change code below this line
//     return arr.some((num) => num > 0)
//     // Only change code above this line
//   }

//   checkPositive([1, 2, 3, -4, 5]);
// #######################################################

// #######################################################
// // Introduction to Currying and Partial Application
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/introduction-to-currying-and-partial-application
// function unCurried(x, y) {
//     return x + y;
//   }

//   function curried(x) {
//     return function(y) {
//       return x + y;
//     }
//   }

//   const curried = x => y => x + y

//   curried(1)(2); // returns 3
// const funcForY = curried(1);
// console.log(funcForY(2)); // 3

// // Partial Application
// function impartial(x, y, z) {
//     return x + y + z;
//   }

//   const partialFn = impartial.bind(this, 1, 2);
//   partialFn(10); // 13

// // Fill in the body of the add function so it uses currying to add parameters x, y, and z.
// function add(x) {
//     // Only change code below this line
//       return function(y){
//         return function(z){
//           return x + y + z
//         }
//       }
//     // Only change code above this line
//   }

// add(10)(20)(30);
// #######################################################

// #######################################################
// #######################################################

// #######################################################
// #######################################################

// #######################################################
// #######################################################

// #######################################################
// #######################################################

// #######################################################
// #######################################################
// #######################################################
// #######################################################

// #######################################################
// #######################################################

// #######################################################
// #######################################################

// #######################################################
// #######################################################
