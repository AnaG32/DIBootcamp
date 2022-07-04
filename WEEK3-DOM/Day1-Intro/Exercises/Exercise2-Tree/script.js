// Exercise 2 //

// For each of the questions, find 2 WAYS of accessing :
// 1. The div node
// 2. The ul nodes, and render all of it's children one by one
// 3. The first li of each ul



let divNode = document.getElementById('container');
let divNode2 = document.querySelector('#container-query');

let ulNode = document.querySelectorAll('ul > li');
let ulNode2 = document.getElementsByClassName('list');

let listNode = document.getElementsByClassName('list > li:first-child');
let listNode2 = document.querySelectorAll('ul > li:first-child');