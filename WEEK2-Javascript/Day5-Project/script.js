// Daily Challenge: 99 Bottles Of Beer //
/*Have you heard the infamous song “99 Bottles of Beer?”
In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.

==============================
Example
==============================

99 bottles of beer on the wall
99 bottles of beer
Take 1 down, pass it around
98 bottles of beer on the wall

98 bottles of beer on the wall
98 bottles of beer
Take 2 down, pass them around
96 bottles of beer on the wall

96 bottles of beer on the wall
96 bottles of beer
Take 3 down, pass them around
93 bottles of beer on the wall

ect …

==============================

Prompt the user for a number to begin counting down bottles.

In the song, everytime a bottle drops,
the subtracted number should go up by 1.
For example,

    We start the song at 99 bottles
    -> Take _1_ down, pass it around
    -> we have now 98 bottles

    -> then, Take _2_ down, pass them around
    -> we have now 96 bottles

    -> then, Take _3_ down, pass them around
    -> we have now 93 bottles

    ... ect


3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.

4. Note : Make sure you get the grammar correct.
For 1 bottle, you pass “it” around.
For more than one bottle, you pass “them” around.
*/

let bottlesStart= prompt("How many bottles");
let prompType = typeof(bottlesStart);

numberParse=parseInt(bottlesStart);
console.log(bottlesStart);

while (isNaN(numberParse)){
    alert("Enter a number!");
    let bottlesStart = prompt("How many bottles to start with? Must be a number.");
    numberParse = parseInt(bottlesStart);
}

let bottlesDown = 0;

while(numberParse > bottlesDown) { 
    bottlesDown += 1;
    console.log(numberParse + " bottles of beer on the wall");
    console.log(numberParse + " bottles of beer");
    console.log("Take "+ bottlesDown + " down, pass it around");
    
    numberParse = numberParse - bottlesDown;
    console.log(numberParse + " bottles of beer on the wall");

}

console.log(numberParse+" bottles of beer on the wall");
console.log(numberParse+" bottles of beer");
console.log("Take "+ numberParse+ " down, pass it around");
console.log("0 bottles of beer on the Wall!");