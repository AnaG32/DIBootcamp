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



// Exercise 3 //
let usersentence = prompt ("Write a sentence containing the word: Nemo");
let sentence = usersentence.toLowerCase();
let position = sentence.indexOf("nemo");
console.log(sentence);

if(position >= 0) {
    document.write("I found Nemo at " +  position + " position.");
} else {
    document.write("Nemo not found");
}


