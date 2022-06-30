// Exercise 4 //

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
console.log("your bill is " + myBill());
console.log(stock);