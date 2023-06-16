const fs = require("fs");

function readFile(fileName) {
  return fs.readFileSync(fileName, "utf8");
}

function countWordOccurrences(text, matchWord) {
  console.log(`Counting occurences of the word "${matchWord}" in the text`);
  let count = 0;
  const words = text.split(" ");
  console.log(words);

  // for (let i = 0; i < words.length; i++) {
  //   if (words[i].toLowerCase() === matchWord.toLowerCase()) {
  //     count++;
  //   }
  // }

  // Replace above loop with better loop below
  words.forEach((word) => {
    // console.log(`word: ${word}`);
    // console.log(`word.toLowerCase(): ${word.toLowerCase()}`);
    // console.log(`matchWord.toLowerCase(): ${matchWord.toLowerCase()}`);
    // ***After using the console.log() to debug our code, determined that the word "code?" was not being counted, so use RegEx to replace all special characters.
    const punctuationRemovedWord = word.replaceAll(
      /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,
      ""
    );
    console.log(punctuationRemovedWord);
    if (punctuationRemovedWord.toLowerCase() === matchWord.toLowerCase()) {
      count++;
    }
  });

  console.log(`count: ${count}`);

  return count;
}

function main() {
  const fileName = "./test-file.txt";
  const fileContent = readFile(fileName);
  // console.log(`The file ${fileName} has this content: ${fileContent}`);
  const wordCount = countWordOccurrences(fileContent, "code");
  console.log(`The word "code" appears ${wordCount} times in the file.`);
}

main();
