// Exercise 1 //

// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY.

let year1 = prompt("Enter first year (YYYY)");
let year2 = prompt("Enter second year (YYYY)");
let year1parse = parseInt(year1);
let year2parse = parseInt(year2);


let year3 = year1parse-year2parse;
console.log(year3);
let result = year2parse + year3;

    console.log(result);

// Exercise 2 //

// 1. While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// 2. Ask the client for their zip code and console.log “success” or “error” based on the following rules.
//      * Zip codes consists of 5 numbers
//      * Must only contain numbers
//      * Must not contain any whitespace (spaces)
//      * Must not be greater than 5 digits in length

let zipcode = prompt("Write your zip code");
let codelength = zipcode.length;

if (codelength == 5) {
    console.log("success");
} else {
    console.log ("error");
}



// Exercise 3 : Secret Word //

// Use Regular Expressions
// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result

let word = prompt('write a word');

word = word.replaceAll('a', 1)
            .replaceAll('e', 2)
            .replaceAll('i',3)
            .replaceAll('o',4)
            .replaceAll('u',5);

