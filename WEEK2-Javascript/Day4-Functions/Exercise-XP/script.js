// Exercise 1 : Information //
/*
Part I : function with no parameters
Create a function called infoAboutMe() that takes no parameter.
The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
Call the function.

Part II : function with three parameters
Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
*/

function infoAboutMe() {
    console.log('My name is Ana, im 32 years old and i love staking and travel around the world')
}

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


// Exercise 2 : Tips //
/*
John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
1.Create a function named calculateTip() that takes no parameter.
2.Inside the function, ask John for the amount of the bill.
3.Here are the rules
	If the bill is less than $50, tip 20%.
	If the bill is between $50 and $200, tip 15%.
	If the bill is more than $200, tip 10%.
4.Console.log the tip amount and the final bill (bill + tip).
5.Call the calculateTip() function.
*/

function calculateTip() {
    let bill = prompt("What is the amount of your bill?:  ");
    bill = Number(bill);
    let tip;
    if (bill < 50) {
        tip = "20%"
        console.log('Your tip is ' + tip)
    }
    else if (bill >= 50 && bill <= 200) {
        tip = "15%"
        console.log('Your tip is ' + tip)
    }
    else if (bill > 200) {
        tip = "10%"
        console.log('Your tip is ' + tip)
    }
}
console.log(calculateTip());


// Exercise 3 : Find The Numbers Divisible By 23 //
/*
Create a function call isDivisible() that takes no parameter.
In the function, loop through numbers 0 to 500.
Console.log all the numbers divisible by 23.
At the end, console.log the sum of all numbers that are divisible by 23.
Bonus: Add a parameter divisor to the function.
*/

function isDivisible(divisor) {
    let div = 0;
    for (let i=0; i < 500 ; i++) {
        if (i % divisor == 0) {
            div += i;
            console.log(i);
        }
    }
    console.log(`Sum : ${div}`);
}

isDivisible(3);
isDivisible(45);



// Exercise 4 //
/*
Add the stock and prices objects to your js file.
Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
Create a function called myBill() that takes no parameters.
The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.
Call the myBill() function.
Bonus: If the item is in stock, decrease the item’s stock by 1.
*/

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ['banana', 'apple', 'orange'];


function isInStock(item) {
    if (stock[item] && stock[item]>0) {
        return true;
    }
    return false;
}

function itemPrice (item) {
    return prices[item];
}

function updateStock(item) {
    stock[item]--;
}


function myBill() {
    let sum = 0;
    for (var i=0; i < shoppingList.length; i++) {
        let item = shoppingList[i];
        if(isInStock(item)) {
            console.log(item, itemPrice(item));
            updateStock(item);
            sum += itemPrice(item);
        }
    }
    return sum;
}
console.log("the total is " + myBill());
console.log(stock);


// Exercise 5 : What’s In My Wallet ? //
/*
Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
    an item price
    and an array representing the amount of change in your pocket.
In the function, determine whether or not you can afford the item.
If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

Change will always be represented in the following order: quarters, dimes, nickels, pennies:
    A quarters is 0.25
    A dimes is 0.10
    A nickel is 0.05
    A penny is 0.01
*/

function changeSum(wallet) {
    let changeValue = [0.25, 0.10, 0.05, 0.01]
    let sum = 0;

    for (let i in wallet) {
        sum += wallet[i] * changeValue[i];
    }
    return sum;
}

function changeEnough(itemPrice, amountOfChange) {

    if (changeSum(amountOfChange) >= itemPrice) {
        return true;
    } else {
        return false;
    }
}

console.log(changeEnough(14.11, [2,100,0,0])); 
console.log(changeEnough(0.75, [0,0,20,5]));


// Exercise 6 : Vacations Costs //
/*

Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.

Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$

Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.

Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

Call the function totalVacationCost()

Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
*/


function hotelCost() {

	let daysDuration;
	let costPerNight = 140;

	do {
		daysDuration = prompt("How many nights do you wish to stay at the hotel? ");
		daysDuration = Number(daysDuration);
	}
	while (isNaN(daysDuration));
	return costPerNight * daysDuration;
}

function planeRideCost() {
	
	let destination;
	let numberChecker;

	do {
		destination = prompt("What is your destination?");
		numberChecker = Number(destination);
	}
	while(!isNaN(numberChecker));

	switch(destination.toLowerCase()) {

		case 'london':
		return 183;

		case "paris":
		return 220;

		default:
		return 300;
	}
	
}

function rentalCarCost() {
	
	let rentDays;
	let cost = 40;

	do {
		rentDays = prompt("How many days would you like to rent the car ? ");
		rentDays = Number(rentDays);
	}
	while(isNaN(rentDays));

	if(rentDays >= 10) {
		return getDiscount(cost * rentDays, 5);
	}
	else {
		return cost * rentDays;
	}
}

function getDiscount(price, percentage) {
	let discount = price;
	price = price / 100 * percentage;
	price = discount - price;
	return price;
}

function totalVacationCost() {

	let fullPrice = hotelCost() + planeRideCost() + rentalCarCost();
	return `The total price of your vacations is $  ${fullPrice}`; 
}

console.log(`Your stay cost ${hotelCost()}$.`);
console.log(`Your ticket cost ${planeRideCost()}$.`);
console.log(`Your rental car cost ${(rentalCarCost())}$.`);
console.log(totalVacationCost());
