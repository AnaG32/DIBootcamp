// Exercise 4 //
// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1.

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