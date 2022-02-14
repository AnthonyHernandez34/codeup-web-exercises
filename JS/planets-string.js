"use strict";

//build array// examples

// var fruits = []
// fruits.push("apple")
// fruits.push("banana")
// fruits.unshift("cherry")
// fruits.unshift("lemon")
// fruits.push("mango")
// fruits.unshift("pear")
// console.log(fruits)

//
// var fruits= ["apple","banana","cherry","lemon","mango","pear"]
// console.log(fruits);
// console.log('Sorting the fruits array.');
// colors.sort();

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // /**
    //  * TODO:
    //  * Convert planetsString to an array, and save it in a variable named
    //  * planetsArray.
    //  * console.log planetsArray to check your work
    //  */

    var planetsArray = planetsString.split( ' , ')
    console.log(planetsArray);
    console.log(planetsString.indexOf('Earth'))

    //
   // /**
   //  * TODO:
   //  * Create a string with <br> tags between each planet. console.log() your
   //  * results. Why might this be useful?
   //  **


    var brtagsPlanets = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
    console.log(brtagsPlanets);


     // * BONUS:
     // * Create another string that would display your planets in an undordered
     // * list. You will need an opening AND closing <ul> tags around the entire
     // * string, and <li> tags around each planet.
     // */



})();
