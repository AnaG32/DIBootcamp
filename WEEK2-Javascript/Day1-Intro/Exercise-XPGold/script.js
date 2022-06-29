// Exercise 1 //
let sentence = ["my ","favorite ","color ","is ","silver"];
console.log(sentence[0]+sentence[1]+sentence[2]+sentence[3]+sentence[4]);

//Exercise 2 //
let str1 = "mix";
let str2 = "pod";

let part1 = str1.slice(0, 2);
let part2 = str2.slice(0, 2);
let part3 = str1.slice(2, 3);
let part4 = str2.slice(2, 3);
console.log (part2 + part3, part1 + part4);
 

//Exercise 3 //

let userNum1 = prompt ("Write first number");
let num1 = parseFloat(userNum1);
console.log (num1);
let userNum2 = prompt ("Write second number");
let num2 = parseFloat(userNum2);
console.log (num2);

let resultsum = num1 + num2;
let resultsus = num1 - num2;
let resultmul = num1 * num2;
let resultdiv = num1 / num2;

console.log (resultsum, resultsus, resultmul, resultdiv);

document.write("The sum: " + num1 + " + " + num2 + "  =  " + resultsum);
document.write("The substract: " + num1 + " - " + num2 + "  =  " + resultsus);
document.write("The multiply: " + num1 + " * " + num2 + "  =  " + resultmul);
document.write("The division: " + num1 + " / " + num2 + "  =  " + resultdiv);
