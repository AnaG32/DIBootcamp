// Exercise 1 : Divisible By Three //

// 1. Loop through the array above and determine whether or not each number is divisible by three.
// 2. Each time you loop console.log true or false.

let numbers = [123, 8409, 100053, 333333333, 7];
let divisibles = [];

for (i = 0, len = numbers.length; i < len; i++) {
    if ((numbers[i] % 3) == 0){
        document.write("true"+"<br>");
    }
    else {
        document.write("false"+"<br>");
    }
}

// Exercise 2 : Attendance //

// 1. Prompt the student for their name.
// 2. If the name is in the object, console.log the name of the student and the country they come from.
//      For example: "Hi! I'm [name], and I'm from [country]."
//      Hint: You don’t need to use a for loop, just look up the statement if ... in
// 3. If the name is not in the object, console.log: "Hi! I'm a guest."

let user = prompt("write your name");
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}

if (user in guestList) {
    alert("Hi! I'm " + user + " and I'm from " + guestList[user]);
}
else {
    alert("Hi! I'm a guest.");
}
