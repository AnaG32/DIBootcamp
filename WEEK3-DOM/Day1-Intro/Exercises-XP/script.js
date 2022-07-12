// Exercise 1: Users //

// Using Javascript:
// 1. Retrieve the div and console.log it
// 2. Change the name “Pete” to “Richard”.
// 3. Change each first name of the two <ul>'s to your name.
// 4. Delete the <li> that contains the text node “Sarah”.

let elemdiv = document.getElementsByTagName('div');
let elemul = document.getElementsByClassName('list')[1];
console.log(elemdiv);
console.log(elemul);


// Bonus - Using Javascript:
// 5. Add a class called student_list to both of the <ul>'s.
// 6. Add the classes university and attendance to the first <ul>.


document.getElementById("container").nextElementSibling.classList.add("student_list")
document.getElementById("container").nextElementSibling.nextElementSibling.classList.add("student_list")
document.getElementById("container").nextElementSibling.classList.add("university", "attendance")


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

// Add the code above, to your HTML file
// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Bonus: Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

document.getElementById("navBar").setAttribute("ID", "socialNetworkNavigation");

let newList = document.createElement("li");
console.log(newList);

let textNode = document.createTextNode("Logout");
console.log(textNode);

newList.appendChild(textNode);
console.log(newList);

document.getElementById("socialNetworkNavigation").firstElementChild.appendChild(newList);

console.log(document.getElementById("socialNetworkNavigation").firstElementChild.firstElementChild.textContent);
console.log(document.getElementById("socialNetworkNavigation").firstElementChild.lastElementChild.textContent)



// Exercise 4 : My Book List //

// The point of this challenge is to display a list of two books on your browser.
// In the body of the HTML page, create an empty div:
//      <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
//      title,
//      author,
//      image : a url,
//      alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
//      For each book :
//      You have to display the book’s title and the book’s author.
//      Example: HarryPotter written by JKRolling.
//      The width of the image has to be set to 100px.
//      If the book is already read. Set the color of the book’s details to red.

let allBooks = [];
let book1 = 
{
    title: "Lord of the Flies",
    author: "William Golding",
    image: "url = https://www.amazon.com/-/es/William-Golding/dp/0399501487" ,
    alreadyRead: true
}

let book2 = 
{   title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "url= https://www.amazon.es/Pride-Prejudice-Jane-Austen/dp/1503290565",
    alreadyRead: false,
}

allBooks.push(book1, book2);
console.log(allBooks);



