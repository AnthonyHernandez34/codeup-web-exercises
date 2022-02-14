"use strict";
(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */


        var person = {};
        person.firstname = 'Anthony'
        person.lastname = 'Hernandez'
        console.log(person.firstname)
        console.log(person.lastname)


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
     person.sayHello = function (){
        return "Hello this is from" +' ' + person.firstname + ' ' + person.lastname + ' ! '
    }
console.log(person.sayHello())
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    var shoppers = [
        {name: 'Cameron', amount: 180 * .12},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function (shopper) {
        var discount = shopper.amount * .50
        var totalamount = shopper.amount - discount;

        if (shopper.amount > 15) {
           console.log(shopper.name + ' ' + 'total undiscounted price ' + ' ' + shopper.amount + ' ' +
           'amt we discounted ' + ' '  + discount +'  ' + 'Total check out amt'+ ' ' + totalamount)

        } else {
          return "you aint getting any discount"
        }
    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

        var books = []
        var books = [
            {
                Titleofbook: "How to code for the lesser human",
                author: {
                    firstName: "Anthony",
                    lastName: "Hernandez"
                }
            },
            {
                Titleofbook: "How to make money off of coding",
                author: {
                    firstName: "Anthony",
                    lastName: "Winkleburg"
                }
            },
            {
                Titleofbook: "How to grow hair to look more mondern",
                author: {
                    firstName: "Anthony",
                    lastName: "Everlast"
                }
            },
            {
                Titleofbook: "How to not look like you are playing video games in zoom",
                author: {
                    firstName: "Anthony",
                    lastName: "Strong"
                }
            },
            {
                Titleofbook: "Dont mess with codeUp",
                author: {
                    firstName: "Anthony",
                    lastName: "Cobra"
                }
            },
        ]
    console.log(books[3].Titleofbook)
    console.log(books[3].author.firstName);
    console.log(books[3].author.lastName);
    console.log(alert(typeof books))


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (book, index) {
        console.log(" Book Barcode " + index + " Scan " + book.Titleofbook + " Writer: " + book.author.firstName + " " + book.author.lastName);
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();



//Example used for most help with worksheet//
//
// function Person(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//     const rand = new Person('Rand McKinnon', 33, 'M');
//     const ken = new Person('Ken Jones', 39, 'M');
// }

// trying to use different method for grocery store work//


// var Customer0 = {
//     name: "Cameron",
//     totalbill: 180,
//     discountbill: ""
// }
// var Customer1 = {
//     name: "Ryan",
//     totalbill: 21,
//     discountbill: "250"
// }
// var Customer2 = {
//     name: "Ryan",
//     totalbill: 21,
//     discountbill: "320"
// }
// function sayHowmuch() {
//     console.log(`Hello, this is how much you owe ${this.name}`)
// }
//
// // add sayHi function to both objects
// Customer0.sayHowmuch = sayHowmuch();
// Customer1.sayHowmuch = sayHowmuch();
// Customer2.sayHowmuch= sayHowmuch()
// Customer0.sayHowmuch(); // Hello, my name is John'
// Customer1.sayHowmuch(); // Hello, my name is Ben'
