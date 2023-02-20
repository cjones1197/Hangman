/*
A program that converts the text file of words into an array and makes a new file: wordList.js.
Reading/Writing files uses Node methods, so this script was run using 
$node wordListConverter.js /  $npm run wordListConverter (included as a script in package.json).
*/

// Import the read and write file methods from fs:
const { readFileSync, writeFile } = require('fs');
// Call the readFileSync function to read the text file, and assign to a variable:
const contents = readFileSync('./src/word_list_10000.txt', 'utf-8');
// Make an array for all the words, with every item enclosed by "" and comma-separated:
const wordsArray = `const wordList =  ["${contents.split(/\r?\n/).join('"," ')}"] \n export default wordList`;

console.log(wordsArray); // To check the format of the words is correct.

// Create a new file in the src folder called wordList.js and log to the console if successful:
writeFile('./src/wordList.js', wordsArray, function (err) {
    if (err) throw err;
    console.log('Success');
});