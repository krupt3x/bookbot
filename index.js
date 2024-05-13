console.log("Bookbot has been initialized.");
console.log("Hold up bookbot's counting words.")
const fs = require('node:fs');

fs.readFile('./books/frankenstein.txt', 'utf8', (err, data) => {
    if (err) {
        throw err;
    }

    const words = data.split(/\s+/);
    const numWords = words.length;

    console.log(`The file contains ${numWords} words.`);
});

console.log("bookbot exiting gracefully.")