//Exercise 1 //
// This car will only let you drive if you are over 18. Make it do the following:
// Using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

let age = prompt("How old are you?");

if (age == 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!")
} else if (age > 18) {
    alert("Powering On. Enjoy the ride!")
} else {
    alert("Sorry, you are too young to drive this car. Powering off")
}

// Exercise 2 //
// Write as comments the steps of the resolution of this piece of code.
// Guess what will be the result before checking it.

let a = 2 + 2;

switch (a) {
  case 1:
    alert( 'Too small' ); // 
    break;
  case 2:
    alert( 'Exactly!' ); //
    break;
  case 3:
    alert( 'Too large' ); // 
    break;
  default:
    alert( "I don't know such values" ); //
}


// Exercise 3 //
// Write as comments the steps of the resolution of this piece of code.
// Guess what will be the result before checking it.

let b = 2 + 2;

switch (b) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

// Exercise 4 //
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// 2. Create an array which contains the object you have made above and name the array "database".
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let username = "user";
let password = "pass";
let timeline = "time";

let database = [username, password];
let newsfeed = [username, password, timeline];