// Exercise 1 //

console.log(5 >= 1);
// Prediction: true
// Actual: true

console.log(0 === 1);
// Prediction: false
// Actual: false

console.log(4 <= 1);
// Prediction: false
// Actual: false

console.log(1 != 1);
// Prediction: false
// Actual: false

console.log("A" > "B");
// Prediction: false
// Actual: false

console.log("B" < "C");
// Prediction: true
// Actual: true

console.log("a" > "A");
// Prediction: false
// Actual: true

console.log("b" < "A");
// Prediction: false
// Actual: false

console.log(true === false);
// Prediction: false
// Actual: false

console.log(true != true);
// Prediction: false
// Actual: false


// Exercise 2 //
let userNum1 = prompt ("Write 2 numbers separated by commas");
let newNum1 = userNum1.split(",");
let result = ;
console.log (newNum1);



// Exercise 3 //
let usersentence = prompt ("Write a sentence containing the word: Nemo");
let sentence = usersentence.toLowerCase();
let position = sentence.indexOf("nemo");
console.log(sentence);

if(position >= 0) {
    console.log("I found Nemo at " +  position + " position.");
} else {
    console.log("Nemo not found");
}


