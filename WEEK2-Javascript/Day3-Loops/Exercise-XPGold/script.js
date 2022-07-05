// Exercise 1 : Divisible By Three //

// 1. Loop through the array above and determine whether or not each number is divisible by three.
// 2. Each time you loop console.log true or false.

let numbers = [123, 8409, 100053, 333333333, 7];
let divisibles = [];
 
function divisible(numbers) {
    for (i = 0, len = numbers.length; i < len; i++) {
        if(numbers[i] % 3 == 0) {
            console.log(true);
        } 
        else {
            console.log(false);
        }
    }
}

// Exercise 2 : Attendance //

// 1. Prompt the student for their name.
// 2. If the name is in the object, console.log the name of the student and the country they come from.
//      For example: "Hi! I'm [name], and I'm from [country]."
//      Hint: You don’t need to use a for loop, just look up the statement if ... in
// 3. If the name is not in the object, console.log: "Hi! I'm a guest."

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}

let user = prompt("write your name");
let list;

if (list in guestList) {
    console.log("Hi! I'm " + user + " and I'm from [country].");
}
else {
    console.log("Hi! I'm a guest.");
}


