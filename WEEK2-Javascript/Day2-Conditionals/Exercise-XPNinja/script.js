// Exercise 1 //

// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY.

let year1 = prompt("Enter first year (YYYY)");
let year2 = prompt("Enter second year (YYYY)");

let result = (year2-year1)/2;
if (result) {
    console.log(result);
}

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



// Exercise 3 //

let word = promt('write a word');

word = word.replaceAll('a', 1)
            .replaceAll('e', 2)
            .replaceAll('i',3)
            .replaceAll('o',4)
            .replaceAll('u',5);

