// Exercise 1 //

// For each of the questions, find 2 WAYS of accessing :
// 1. The div DOM node
// 2. The ul DOM node
// 3. The second li (with Pete)

document.querySelector("div");
document.getElementsByTagName('div');

document.querySelector("ul");
document.getElementsByTagName('ul');

document.querySelector('ul > li:last-child');
document.getElementsByTagName('ul > li:last-child');
