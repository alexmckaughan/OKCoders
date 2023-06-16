// Async
// - sync vs async
//     - line by line vs a callback
//     - filesystem read file
// See order/time of functions being executed below:
const fs = require("fs");

// .readFile doesn't allow you to assign/use variable outside of the function
// fs.readFile("./README.md", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//     summarizeFileContents(data);
//   }
// });
// Use promise to read the file.
// const loadFilePromise = fs.promises.readFile("./README.md", "utf8");
// Use a promise to read the file.
// loadFilePromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Most people now use async over promise now
async function processMultipleFiles() {
  try {
    const readMeData = await fs.promises.readFile("./README.md", "utf8");
    const readMeSummary = summarizeFileContents(readMeData);
    console.log({ readMeSummary });
  } catch (err) {
    console.log(err);
  }
}

processMultipleFiles();

function summarizeFileContents(data) {
  const numberOfWords = data.split(" ").length;
  return numberOfWords;
}

const firstName = "Alex";
const lastName = "McKaughan";
const greeting = `Hello my name is ${firstName} ${lastName}`;

// setTimeout allows it to wait a specified amount of time.
setTimeout(() => {
  console.log("This is a callback function");
}, 2000);
console.log(greeting);
