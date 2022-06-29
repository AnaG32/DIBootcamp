//Exercise 1 //

// 1. Ask the user which language they speak.
// 2. Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…” 
// 3. Create a few conditions :
//    * If the user speaks French : display “Bonjour”
//    * If the user speaks English : display “Hello”
//    * If the user speaks Hebrew : display “Shalom”
//    * If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’  

let language = prompt("Choose a language");
let lowlanguage = language.toLowerCase();

switch (lowlanguage) {
    case "french":
        console.log("Bonjour");
      break;

    case lowlanguage = "english":
        console.log("Hello");
        break;

    case lowlanguage = "hebrew":
        console.log("Shalom");
        break;

    default:
        console.log("01110011 01101111 01110010 01110010 01111001");
        break;
  }


// Exercise 2 //

// 1. Ask the user for their grade.
// 2. If the grade is bigger than 90, console.log “A”
// 3. If the grade is between 80 and 90 (included), console.log “B”
// 4. If the grade is between 70(included) and 80 (included), console.log “C”
// 5. If the grade is lower than 70, console.log “D”


let usergrade = prompt("Which grade do you have?");
let grade = parseFloat(usergrade);
console.log(grade);

if (grade >= 90) {
    console.log("A");
}
else if (grade > 80 && grade < 90) {
    console.log("B");
}
else if (grade >=70 && grade <=80 ) {
    console.log("C");
}
else {
    console.log("D");
}



// Exercise 3 //

// Prompt the user for a string. It must be a verb.
//If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
//If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
//If the length of the string is less than 3, leave it unchanged.

let verb = prompt("Enter a verb");
let verblength = verb.length;
let indexing = verb.indexOf("ing");

if (verb.length >= 3 && indexing !== "ing") {
    console.log(verb + 'ing');
}
if (verb.length >=3  && indexing == "ing") {
   console.log(verb +'ly');
}
else {
   console.log(verb);
}