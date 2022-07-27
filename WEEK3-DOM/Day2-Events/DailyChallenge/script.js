// Exercises XP //
// Exercise 1 : Change The Article 

/*
Using a DOM property, retrieve the h1 and console.log it.
Using DOM methods, remove the last paragraph in the <article> tag.
Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
*/

let title1 = document.querySelector("h1");
console.log(title1);

let lastPara = document.querySelector("article").lastElementChild;
lastPara.remove();

h2 = document.querySelector('h2');
h2.addEventListener('click', RespondClick);
function RespondClick(){
    document.querySelector("h2").style.backgroundColor = "red"; 
}


h3 = document.querySelector('h3');
h3.addEventListener('click', RespondClick2);
function RespondClick2(){
    document.querySelector("h3").style.display = "none"; 
}

let newButton = document.createElement("button");
document.querySelector("article").appendChild(newButton).style.backgroundColor = "blue"; 
newButton.addEventListener('click', toBold);

function toBold() {
    let allPara = document.querySelectorAll('p');
    for (let i=0;  i < allPara.length;i++) {
        allPara[i].style.fontWeight = "bold";
    }
}