"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
"use strict";
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
   var myNameis= prompt()
   console.log ("hello "+' '+ myNameis)
   function sayHello(name){
       return myNameis
       console.log ("sayHello" + sayHello)
   }


/**
* TODO:
* Store your name as a string in a variable named 'myName', and pass that
* variable to the 'sayHello' function. You should see the same output in the
* console.
*/
var helloMessage = sayHello()
function helloMessage(name){
    console.log (helloMessage)
}



// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);


 /**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

 var random = Math.floor((Math.random() * 3) + 1);
console.log("random number" + random)


function isTwo(number) {
     return number % 2 === 0
 }
console.log(random)
console.log(isTwo(50));

console.log(isTwo(75));

console.log(isTwo(-1));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

var billamt =prompt("how much is the bill")
var tipamt =parseInt(prompt("use 15% , 10% or 8%"))/100
var totalamt = billamt * .15
function calculate(){
    return (billamt)
}
console.log(totalamt * 20)
console.log(totalamt * 40)



 // * TODO:
 // * Use prompt and alert in combination with your calculateTip function to
 // * prompt the user for the bill total and a percentage they would like to tip,
 // * then display the dollar amount they should tip
 // */
 //
 //
 // * TODO:
 // * Create a function named `applyDiscount`. This function should accept a price
 // * (before a discount is applied), and a discount percentage (a number between 0
 // * and 1). It should return the result of applying the discount to the original
 // * price.
 // *
 // * Example:
 // * > var originalPrice = 100;
 // * > var discountPercent = .2; // 20%
 // * > applyDiscount(originalPrice, discountPercent) // 80
 // *
 // * > applyDiscount(45.99, 0.12) // 40.4712
 // */
var price=prompt("this is how much you owe")
var quantity = prompt("items that will be discounted")
var total = quantity * price
var discountprice = 0
var discountedtotal = 0
const taxRate =0.08
var tax = total * taxRate
var totalPlusTax = tax;
function applyDiscount() {
    if (quantity > 9 || quantity < 20) {
        discountprice = .10
        total = total - (total * discountprice)
    } else if (quantity > 19 || quantity < 30) {
        discountprice = .20
        total = total - (total * discountprice)
    } else if (quantity > 39 || quantity < 100) {
        discountprice = .30
        total = total - (total * discountprice)
    }
}
console.log ("this is the applyied discount"+ ' ' + totalPlusTax)