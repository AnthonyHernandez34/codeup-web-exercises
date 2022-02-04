"use strict";

var userInput = prompt('Hello from external JavaScript:');
console.log('The user entered: ' + userInput);
alert("welcome to my website.");



var favoritecolor = prompt("what is your favorite color");
console.log("the user entered" + favoritecolor);
alert(`${favoritecolor} that my favoritecolor too`)


// question 1 //
var costofmovies= 3
var littlemermaid = 3
prompt(littlemermaid * costofmovies)
console.log("day rented the littlemermaid" + ' ' +littlemermaid);
alert(" is how much it cost for littlemermaid")



var BrotherBear = 5
prompt(BrotherBear * costofmovies)
console.log("days rented the Brotherbear" + ' ' +BrotherBear);
alert(" is how much it cost for Brotherbear")




var Hercules = 1
prompt(Hercules * costofmovies)
console.log("day rented the Hercules movies" + ' ' + Hercules);
alert(" is how much it cost for Hercules")


var totalamtdue= 27
prompt((littlemermaid * costofmovies) + (BrotherBear * costofmovies) + (Hercules * costofmovies))
alert("totalamtdue")
console.log ("totalamount owed" + ' ' + totalamtdue);


//question 2 //
var Googlepaycheck = 2400
var googlehourlyrate= 400
var googlehours= 6
alert("Google owes you")
prompt(googlehourlyrate*googlehours)
console.log("google paid time" + ' ' + Googlepaycheck)



var Amazonpaycheck =1520
var amazonhourklyrate = 380
var amazonhours= 4
alert("Amazon owes you")
prompt(amazonhourklyrate*amazonhours)
console.log("amazon paid time" +' ' + Amazonpaycheck)



var Facebookpaycheck= 3500
var facebookhourlyrate= 350
var facebookhours= 10
alert("Facebook owe you")
prompt(facebookhours * facebookhourlyrate)
console.log("facebook paid time" + ' ' + Facebookpaycheck)



var totalpay = 2400+1520+350
prompt(2400+1520+3500)
alert("money earn on side work")
console.log("total paid out" + ' ' + totalpay)


// question 3 //


var classnotfull= true
var classconflicts= false
var enrolled = classnotfull && classconflicts;

prompt(`${classconflicts} does your time conflict`)
prompt(`${classnotfull} is the class full`)

if (classnotfull <= 20 && classconflicts == "yes"){
    alert('student can enroll in class!!')
} else {
    alert("the student cannot enroll!")
}
console.log(enrolled = " cannont enroll in class")

var ismember= false
prompt("are you a vauled customer")
if (ismember = " yes discount is avaliable"){
    alert ( "not a vauled customer no discount")
} else {
    alert ("yes i am a vauled customer then offer is valed")
}

var cartsize = 2
var vailddiscount = false
var canhavediscount = vailddiscount && (cartsize > 2 || ismember);
prompt(`${canhavediscount} looks like the offer is not avaible for you`)
console.log (ismember = " able to get discount")

var username = 'codeup', password = "notastrongpassword"
prompt("enter username")
alert ("codeup")
prompt("enter password")
alert ("notastrongpassword")
var passwordmustbe = password.length >= 5
var usernamenotinpassword = password.indexOf(username) === -1;
var usernamelessthentwenty = username.length <= 20;
console.log (`${username + ' ' + password} both fit creteria`)

var whitespace = username.trim() === username && password.trim() === password;
username.trim()
'codeup'
password.trim()
'notastrongpassword'
