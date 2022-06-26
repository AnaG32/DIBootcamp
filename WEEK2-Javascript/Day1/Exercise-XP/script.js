// Exercise 1 //

let food = 'pasta';
let meal = 'dinner';
console.log('I eat '+ food + ' at every ' + meal);


// Exercise 2 //

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = 'black mirror, money heist, and the big bang theory';
console.log('I watched '+ myWatchedSeriesLength + ' series: ' + myWatchedSeriesSentence);

myWatchedSeries[2] = 'friends';
console.log(myWatchedSeries);

myWatchedSeries.push("Simpsons");
console.log(myWatchedSeries);

myWatchedSeries.unshift('Breaking Bad');
console.log(myWatchedSeries);

myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);


// Exercise 3 //

let Ctemp = 40;
let Ftemp = Ctemp * 9 / 5 + 32;
console.log(Ctemp + '°C is ' + Ftemp + ' °F.');


// Exercise 4 //

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23
// Actual: 23

console.log(3 + 4 + '5');
// Prediction: 75
// Actual: 75


// Exercise 5 //

typeof(15);
// Prediction: number
// Actual: number

typeof(5.5);
// Prediction: number
// Actual: number

typeof(NaN);
// Prediction: string
// Actual: number

typeof("hello");
// Prediction: string
// Actual: string

typeof(true);
// Prediction: string
// Actual: boolean

typeof(1 != 2);
// Prediction: boolean
// Actual: boolean

typeof("hamburger" + "s");
// Prediction: string
// Actual: string

typeof("hamburger" - "s");
// Prediction: string
// Actual: number

typeof("1" + "3");
// Prediction: string
// Actual: 

typeof("1" - "3");
// Prediction: number
// Actual: number

typeof("johnny" + 5);
// Prediction: string 
// Actual: string

typeof("johnny" - 5);
// Prediction: number
// Actual: number

typeof(99 * "hello");
// Prediction: string
// Actual: number

typeof(1 != 1);
// Prediction: boolean
// Actual: boolean

typeof(1 == "1");
// Prediction: string
// Actual: boolean

typeof(1 === "1");
// Prediction: string
// Actual: boolean


// Exercise 6 //

5 + "34";
// Prediction: 534
// Actual: 534

5 - "4";
// Prediction: 1
// Actual: 1

10 % 5;
// Prediction: 0
// Actual: 0

5 % 10;
// Prediction: 0
// Actual: 5

"Java" + "Script";
// Prediction: JavaScript
// Actual: JavaScript

" " + " ";
// Prediction: "   "
// Actual: '  '

" " + 0;
// Prediction: ' 0'
// Actual: ' 0'

true + true; 
// Prediction: 2
// Actual: 2

true + false;
// Prediction: 1
// Actual: 1 

false + true;
// Prediction: 1
// Actual: 

false - true;
// Prediction: -1
// Actual: -1

!true;
// Prediction: 0
// Actual: false

3 - 4;
// Prediction: -1
// Actual: -1

"Bob" - "bill";
// Prediction: 0
// Actual: NaN
