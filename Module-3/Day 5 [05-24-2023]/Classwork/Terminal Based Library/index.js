// Day 4 Exercise
// Terminal Based Library
// You are going to make a command line program that allows a user to keep track of books. Follow the steps bellow to do so. I have provided a starting point for you in the library.js file.
const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let library = fs.existsSync("library.json")
  ? JSON.parse(fs.readFileSync("library.json"))
  : [];

// 1. Create a Book:
// Create a function createBook that takes in parameters for title, author, genre, and yearPublished and returns an object with these properties.

function createBook(title, author, genre, yearPublished) {
  // ####################################
  // My Version
  // return {
  //   title: title,
  //   author: author,
  //   genre: genre,
  //   yearPublished: yearPublished,
  // };
  // ####################################
  // Zach's Version
  // Shorthand method is:
  return {
    title,
    author,
    genre,
    yearPublished,
  };
  // ####################################
}

// 2. Adding a Book to the Library:
// Create a function addBook that takes a book object and adds it to the library array.

function addBook(book) {
  library.push(book);
  // My Version
  // fs.writeFileSync("library.json", JSON.stringify(library));
  // Zach's Version
  libraryStats();
}

// 3. Removing a Book from the Library:
// Create a function removeBook that takes a book title and removes that book from the library array.

// Zach Added Function
function libraryStats() {
  const plural = library.length > 1 ? "s" : "";
  console.log("There are now ${library.length} book${plural} in the library");
}

function removeBook(title) {
  // My Version
  // library = library.filter((book) => book.title !== title);
  // fs.writeFileSync("library.json", JSON.stringify(library));
  // Zach's Version
  const pos = library.findIndex((book) => book.title === title);
  if (pos === -1) {
    console.log("Book not found");
  } else {
    library.splice(pos, 1);
    console.log("${title} has been removed from the library");
    libraryStats();
  }
}

// 4. Finding a Book in the Library:
// Create a function findBook that takes a book title and returns that book from the library array.

function findBook(title) {
  // return library.find((book) => book.title === title);
  // Zach's Version
  const book = library.find((book) => book.title === title);
  if (book) {
    console.log(book);
  } else {
    console.log("Book not found");
  }
}

// 5. Listing all Books in the Library:
// Create a function listBooks that logs all the books in the library array to the console.

function listBooks() {
  // My Version
  // console.log(...library);
  // Zach's Version
  libraryStats();
  console.log("The books in the library are:");
  library.forEach((book) => console.log(book));
}

// 6. Creating a User Interface:
// Finally, update the prompt function. Based on what the user inputs, call the appropriate functions based on their choices.

// 7. Prompting more than once:
// Notice that our library program only prompts the user once. How can we make it so that it prompts the user over and over again until they choose to quit?
// To do this, we need to use a concept called recursion. Recursion is when a function calls itself. We can use recursion to call our prompt function over and over again until the user chooses to quit (the user can quit by hitting ctrl + c twice).

// 8. Bonus Round:
// notice that once you stop the program, anything you added to the library is gone. The library array is just something that is stored in memory during the program's execution.
// We need a way to save the contents of the library array. We can do this by saving the library to a file.
// use chatGPT and research to figure out how to do this. If you do it right, you will be using the node filesystem module, and JSON.parse and JSON.stringify. Anytime you add a book or remove a book, you will want to update your file as well.

function continuePrompt() {
  rl.question("Anything else? 'Y/N'\n", (answer) => {
    if (answer.toLowerCase() === "n") {
      fs.writeFileSync("library.json", JSON.stringify(library));
      console.log("Library saved!");
      rl.close();
    } else {
      prompt();
    }
  });
}

var shortCommands =
  "Please use the following commands: 'a' = addBook, 'r'= removeBook, 'f' = findBook, 'l' = listBooks, 'e' = exit";

function prompt() {
  // ####################################
  // My Version
  // rl.question(
  //   `What would you like to do?\n\n${shortCommands}\n\n`,
  //   (answer) => {
  //     if (answer.toLowerCase() === "a") {
  //       rl.question("Enter book title: ", (title) => {
  //         rl.question("Enter book author: ", (author) => {
  //           rl.question("Enter book genre: ", (genre) => {
  //             rl.question("Enter book yearPublished: ", (yearPublished) => {
  //               addBook(createBook(title, author, genre, yearPublished));
  //               listBooks();
  //               continuePrompt(); // recursion to ask the user again
  //             });
  //           });
  //         });
  //       });
  //     } else if (answer.toLowerCase() === "r") {
  //       rl.question("Remove book by title: ", (title) => {
  //         removeBook(title);
  //         listBooks();
  //         continuePrompt(); // recursion to ask the user again
  //       });
  //     } else if (answer.toLowerCase() === "f") {
  //       rl.question("Find book by title: ", (title) => {
  //         const book = findBook(title);
  //         if (book) {
  //           console.log(book);
  //         } else {
  //           console.log(`No book found with title "${title}"`);
  //         }
  //         continuePrompt(); // recursion to ask the user again
  //       });
  //     } else if (answer.toLowerCase() === "l") {
  //       listBooks();
  //       continuePrompt();
  //     } else if (answer.toLowerCase() === "e") {
  //       rl.close();
  //     } else {
  //       console.log(`${shortCommands}`);
  //       prompt();
  //     }
  //     // console.log("After: " + answer);
  //   }
  // );
  // ####################################
  // Zach's Version
  rl.question(
    "What would you like to do? You can create, remove, find, remove\n",
    (answer) => {
      if (answer === "create") {
        rl.question(
          'What is the "title, author, genre, year published" of the book you want to add?:\n\n',
          (info) => {
            const [title, author, genre, yearPublished] = info.split(", ");
            addBook(createBook(title, author, genre, yearPublished));
            listBooks();
            prompt();
          }
        );
      } else if (answer === "remove") {
        rl.question(
          "what is the title of the book you want to remove? \n",
          (title) => {
            removeBook(title);
            prompt();
          }
        );
      } else if (answer === "find") {
        rl.question(
          "what is the title of the book you want to find? \n",
          (title) => {
            removeBook(title);
            prompt();
          }
        );
      } else if (answer === "list") {
        listBooks();
        prompt();
      } else {
        console.log("Invalid Input");
        prompt();
      }
    }
  );
}
prompt();
