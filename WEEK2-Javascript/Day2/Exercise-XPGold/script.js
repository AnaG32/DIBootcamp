// Exercise 3 //
// Instructions
// Prompt the user for a string. It must be a verb.
//If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
//If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
//If the length of the string is less than 3, leave it unchanged.

let verb = prompt("Enter a verb");
let verblength = verb.length(verb);
let ing = ;

if (verb.length>=3) {
    console.log(verb + 'ing');
}
else if (verb.length>=3) {
    console.log(verb+'ly');
}
else {
    console.log(verb);
}