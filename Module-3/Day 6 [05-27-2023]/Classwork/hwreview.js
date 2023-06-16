// #################################
// Homework Practice
// // Sum All Odd Fibonacci Numbers
// function sumFibs(num) {
//   let twoPrior = 0;
//   let onePrior = 1;
//   let next = nextNumber(twoPrior, onePrior);
//   let sum = 1;
//   while (next <= num) {
//     next = nextNumber(twoPrior, onePrior);
//     twoPrior = onePrior;
//     onePrior = next;
//     console.log({ twoPrior, onePrior, next });
//     if (isOdd(next) && next <= num) {
//       sum = sum + next;
//     }
//   }
//   console.log(sum);
//   function isOdd(num) {
//     return num % 2 !== 0;
//   }
//   function nextNumber(pre, curr) {
//     return pre + curr;
//   }
//   return num;
// }
// sumFibs(1000);
// #################################
