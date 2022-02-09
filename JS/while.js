"use strict";

// Create a ile loop that uses console.log() to create the output shown below
// i equal 0 with num = 1 we multiply 1 * 2 < 16 we revert to end game 2 after thing been multiplyed

var i = 0;
var num = 1;
while(i < 16) {
var multiply = num * 2
console.log(multiply);
num = multiply;
    i++;
 }

// generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop
// nside of the loop your code should generate another random number between 1 and 5

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var random = Math.floor(Math.random() * 5) + 1;

do{
    allCones = allCones - random
    console.log(random)
    console.log("hurry up they going quick")
    console.log('We have '+ allCones +' '+ "left")

    if(allCones < random|| allCones === 0){
        console.log("Sorry we don't have enough to fill that order ")
        break;
    }
}while (allCones>= 1)

//