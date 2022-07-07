// It should take two command line arguments:

let arguments = process.argv;
arguments.splice(0, 2);

// a URL
// a local file path
// It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
// EXAMPLE: 
// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html


// WRITE CODE

const fs = require('fs');
let fileName = "testFile.txt";
const content = ('Some NEW content!' + arguments[0] + arguments[1]);

fs.writeFile(`/Users/max/Desktop/${fileName}`, content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});



// There are two operations in this problem which will take an unknown amount of time:

// You need to make an http request and wait for the response.
// After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.

// When you're trying to control the order of asynchronous operations, you can use nested callbacks.

// don't use writeFileSync -- is there writeFileAsync?

// TIPS ---------
// 1 character = 1 byte
// https://nodejs.dev/learn/writing-files-with-nodejs

// Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
// Use Node's fs (file system) module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning above)


