// Exercise 1: Users //

// Using Javascript:
// 1. Retrieve the div and console.log it
// 2. Change the name “Pete” to “Richard”.
// 3. Change each first name of the two <ul>'s to your name.
// 4. Delete the <li> that contains the text node “Sarah”.

// Bonus - Using Javascript:
// 5. Add a class called student_list to both of the <ul>'s.
// 6. Add the classes university and attendance to the first <ul>.

let elem = document.getElementsByTagName('div');
console.log(elem);


let liname = document.getElementsByClassName('list');

let newName = uls[0].children[4];

document.replaceChild(liname, li);
uls[0].appendChild(liname);

