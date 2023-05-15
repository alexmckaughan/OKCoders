// // ################################################################################################
// // 1.) Make a HTTP server, using plain nodejs http module, that responds to any request with a status code of 200 and a body of "Hello World".

// // To create a simple HTTP server using the plain Node.js http module, follow these steps:
// // First, make sure you have Node.js installed on your system. You can download it from https://nodejs.org/en/download/.
// // Create a new directory for your project and navigate to it in your terminal or command prompt.
// // Create a new JavaScript file, e.g., server.js, in the project directory.
// // Open server.js in your favorite code editor and add the following code:

// // Import the 'http' module
// const http = require("http");
// // Define the request handler function
// const server = http.createServer((req, res) => {
//   // Set the response status code and headers
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   // Set the response body
//   res.end("Hello World");
// });

// // Define the server's listening port
// const PORT = 3000;

// // Start the server and listen for incoming requests
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
// // To use, bash: node server.js
// ################################################################################################
// 2.) I would like to use the plain nodes filesystem module to read a file on my computer,
// and then log the number of characters in that file to the console.
// To read a file using the Node.js fs (filesystem) module and log the number of characters in the file to the console,
// follow these steps:

// Create a new JavaScript file, e.g., readFile.js, in your project directory.
// Open readFile.js in your favorite code editor and add the following code:
// Import the 'fs' module
const fs = require("fs");

// Define the file path
const filePath = "./README.md";

// Read the file asynchronously
fs.readFile(filePath, "utf8", (err, data) => {
  // If an error occurs, log the error and exit the process
  if (err) {
    console.error("Error reading file:", err);
    process.exit(1);
  }

  // Log the number of characters in the file
  console.log(`Number of characters in the file: ${data.length}`);
});
// Replace 'path/to/your/file.txt' with the actual path to the file you want to read.
// Save the file and close the editor.
// In the terminal or command prompt, navigate to the project directory and run the following command to execute the readFile.js script:

// bash: node readFile.js
// The script will read the specified file and log the number of characters in the file to the console.
// Note that this example uses the asynchronous fs.readFile method, which is recommended for reading files to avoid blocking the event loop.
// If you prefer to use the synchronous version, you can replace the fs.readFile call with fs.readFileSync:
// try {
//   const data = fs.readFileSync(filePath, 'utf8');
//   console.log(`Number of characters in the file: ${data.length}`);
// } catch (err) {
//   console.error('Error reading file:', err);
//   process.exit(1);
// }

// ################################################################################################
