// Intermediate Algorithm Scripting
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.
// Below uses the spread operator to grab the remaining arguments passed to the function
// function destroyer(arr, ...valsToRemove) {
//   console.log(arr.filter((elem) => !valsToRemove.includes(elem)));
//   return arr.filter((elem) => !valsToRemove.includes(elem));
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// #######################################
// Uhhh..
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
// #######################################
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// function spinalCase(str) {
// const regex = /\s+|_+/g;
// str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
// return str.replace(regex,"-").toLowerCase();
// }

// spinalCase("This Is Spinal Tap");
// spinalCase("thisIsSpinalTap");
// spinalCase("The_Andy_Griffith_Show");
// spinalCase("Teletubbies say Eh-oh");
// spinalCase("AllThe-small Things");
// #######################################
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.
// function translatePigLatin(str) {
//     return str
//     .replace(/^[aeiou]\w*/, "$&way")
//     .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
// }

// translatePigLatin("consonant");
// translatePigLatin("california");
// translatePigLatin("paragraphs");
// translatePigLatin("glove");
// translatePigLatin("algorithm");
// translatePigLatin("eight");
// translatePigLatin("schwartz");
// translatePigLatin("rhythm");
// #######################################
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
// Sorted Union

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.
// function uniteUnique(...arr) {
//     return [...new Set(arr.flat())];
//   }
  
  
//   uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// #######################################
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
// function steamrollArray(arr) {
//     const flattenedArray = [];
//     // Loop over array contents
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         // Recursively flatten entries that are arrays
//         //  and push into the flattenedArray
//         flattenedArray.push(...steamrollArray(arr[i]));
//       } else {
//         // Copy contents that are not arrays
//         flattenedArray.push(arr[i]);
//       }
//     }
//     return flattenedArray;
//   };
  
//   steamrollArray([1, [2], [3, [[4]]]]);