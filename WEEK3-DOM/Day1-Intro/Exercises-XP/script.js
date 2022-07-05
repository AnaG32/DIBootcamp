// Exercise 1: Users //

// Using Javascript:
// 1. Retrieve the div and console.log it
// 2. Change the name “Pete” to “Richard”.
// 3. Change each first name of the two <ul>'s to your name.
// 4. Delete the <li> that contains the text node “Sarah”.

// Bonus - Using Javascript:
// 5. Add a class called student_list to both of the <ul>'s.
// 6. Add the classes university and attendance to the first <ul>.

let elemdiv = document.getElementsByTagName('div');
let elemul = document.getElementsByClassName('list')[1];
console.log(elemdiv);
console.log(elemul);


let newlist = document.getElementsByClassName('list')[0];
let li = document.createElement("li");
let litext = document.createTextNode("Richard");


// Exercise 2 : Users And Style//

// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “John”.
// Add a border to the <li> that contains the text node “Pete”.
// Change the font size of the whole body.
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


let divcolor = document.getElementById('container');
divcolor.style.backgroundColor = "lightblue";
divcolor.style.padding = "2rem";
divcolor.style.border = "solid 2px darkblue";



// Exercise 3: Change The Navbar // 

// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// Bonus: Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

let divnav = document.getElementById('navBar');





// Exercise 4 : My Book List //

