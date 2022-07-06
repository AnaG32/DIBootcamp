// Exercise 1 //

// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
    console.log (i + " is an even number.");
    } else {
    console.log(i + " is an odd number.")
    }
}

//1 Option
const basket = ['apples', 'oranges', 'grapes'];
const detailBasket = {
    apples: 5,
    orange: 10,
    grapes: 1000
}

//for (let j = 0; j<basket.length; j++) {
//    console.log(basket[j]);
//}

//2 Option
//basket.forEach(item => {
//    console.log(item);
//})

// for of
//Iterating >> arrays, strings
for (item of basket) {
    console.log(item);
}

// for in - properties
// enumerating >> objects
for (item in detailBasket) {
    console.log(item);
}

let obj = {
    firstName : "Sarah",
    lastName : "Smith",
    isSingle : true
}


let arr1 = [1, 2, 3]
    let arr2 = arr1;
    arr2[1] = 5             //changing the "2" into a "5"
    console.log(arr1)       // [1, 5, 3]
    console.log(arr2)       // [1, 5, 3]