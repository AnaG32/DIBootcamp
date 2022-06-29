// Exercise 1 //
// 1. Create 2 variables, x and y. Each of them should have a different numeric value.
// 2. Write an if/else statement that checks which number is bigger.

let x = 5;
let y = 2;

if (x > y) {
    console.log(x + " is the biggest number");
} else {
    console.log(y);
}


// Exercise 2 //

// 1. Create a variable called newDog where it’s value is “Chihuahua”.
// 2. Check and display how many letters are in newDog.
// 3. Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// 4. Check if the variable newDog is equal to “Chihuahua”
//      * if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
//      * else, console.log ‘I dont care, I prefer cats’.

let newdog = "Doberman";
console.log(newdog.length);
console.log(newdog.toUpperCase());
console.log(newdog.toLowerCase());

if (newdog = "Doberman") {
    console.log("I love Dobermans, it's my favorite dog breed");
} else {
    console.log("I dont care, I prefer cats");
}


// Exercise 3 //

// 1. Prompt the user for a number and save it to a variable.
// 2. Check whether the variable is even or odd.
//      * If it is even, display: “x is an even number”. Where x is the actual number the user chose.
//      * If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

let number = prompt("Write a number");
if (number % 2 == 0) {
    console.log (number + " is an even number.");
} else {
    console.log(number + " is an odd number.")
}


//Exercise 4 //

// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// 1. If there is no users (the users array is empty), console.log “no one is online”.
// 2. If there is 1 user, console.log “<name_user> is online”.
// 3. If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// 4. If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// 5. For example, if there are 5 users, it should display.:name_user1, name_user2 and 3 more are online.


let users = ["Lea123 ", "Princess45 ", "cat&doglovers ", "helooo@000 "];
let online = users.length;
console.log(online);

if (online == 0 ) {
    console.log("no one is online");
} 
if (online == 1) {
    console.log(users[0] + " is online");
} 
if (online == 2) {
    console.log(users[0] + users[1] + " are online");
} 
if (online > 2) {
    console.log (users[0] + users[1] + " and other " + (online - 2) + " are online");
}