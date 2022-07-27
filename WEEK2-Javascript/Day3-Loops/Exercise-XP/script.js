// Exercise 1 : List Of People //

// 1. Write code to remove “Greg” from the people array.
// 2. Write code to replace “James” to “Jason”.
// 3. Write code to add your name to the end of the people array.
// 4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// 5. Write code to make a copy of the people array using the slice method.
//      * The copy should NOT include “Mary” or your name.
//      * Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
//      * Hint: Check out the documentation for the slice method
// 6. Write code that gives the index of “Foo”. Why does it return -1 ?
// 7. Create a variable called last which value is the last element of the array.
//      * Hint: What is the relationship between the index of the last element in the array and the length of the array?
// 8. Using a loop, iterate through the people array and console.log each person.
// 9. Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// 10. Hint: take a look at the break statement in the lesson.

let people = ["Greg", "Mary", "Devon", "James"];

people.splice(0, 1);
console.log(people);

people.splice(2, 1);
people.splice(2, 0, "Jason");
console.log(people);

people.splice(3, 0, "Ana");
console.log(people);

let index = people.indexOf("Mary");
console.log(index);

let copy = people.slice(1, 3);
console.log(copy);

let indexFoo = people.indexOf("Foo");
console.log(indexFoo);

let last = people.slice(-1);
console.log(last);

for (let i=0; i<people.length; i++) {
    console.log(people[i]);
}

// Exercise 2: Your Favorite Colors //
// 1. Create an array called colors where the value is a list of your five favorite colors.
// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// 3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.

let colors = ["silver", "violet", "black", "magenta", "Turqoise"];

for (let c=0; c<colors.length; c++) {
    console.log('My #' + (c + 1) + ' choice is ' + colors[c]);
}

// Exercise 3 : Repeat The Question // 
// 1. Prompt the user for a number
// 2. While the number is smaller than 10 continue asking the user for a new number.

let str = prompt ("Write a number");
console.log(str.typeof);
let num= Number(str);
console.log(num);



// Exercise 4: Building Management //
// 1. Copy and paste the above object to your Javascript file.
// 2. Console.log the number of floors in the building.
// 3. Console.log how many apartments are on the floors 1 and 3.
// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.
// 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}