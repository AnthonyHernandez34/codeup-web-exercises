"use strict";
//

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

var userInput= prompt("Enter a odd number that is 1 through 50")

for (var i= 0 ; i < 50; i++){
    if(i == userInput){
        console.log("we skipped a number" + ' ' + i )
        break
    }
    if(i % 2 != 0){
        console.log("you have entered a possible odd number"+ ' ' + i );
    }
}

