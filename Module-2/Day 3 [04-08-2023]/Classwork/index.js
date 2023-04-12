// 2 Pass System - Declaring Variables & Line by Line Execution

// // console.log(test1);
// const test1 = "test1";
// console.log(test2);
// var test2 = "test2";

// DRY - Do not repeat yourself (don't duplicate your code)
// helloWorld();
// function helloWorld() {
//   console.log("Hello World");
// }

const firstName = "Alex";
const lastName = "McKaughan";
// Global can't reach into local (pulling out firstName and lastName),
// but local can reach out to global (pulling in variables outside of function)
// Shadowing - Since 'firstName' is passed in as a parameter, it will only use local param,
// but if
function helloToYou(firstName) {
  message = "Hello to you, " + firstName + " " + lastName;
  return message;
}

console.log(helloToYou("First"));
console.log(message);
