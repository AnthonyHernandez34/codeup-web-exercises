// Write a function called findAverage that takes in an array of integers representing grades and returns the average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)

function findAverage(){
    var average = arr => arr.reduce( ( a, b ) => a + b, 0 ) / arr.length;

    var result = average( [ 95, 74, 86 ,100] ); // 4

    console.log(result);
}
findAverage()

//how i can use a for to write in array backwards.

let  num = [1 , 2 , 3 , 4]
for (let i = num.length - 1; i >= 0 ; i--){
    console.log(num[i]);
}

//sort= string alph order // sort= numbers unit code value rising order

let instructor = ['casey', 'ryan','jeff','david']
instructor.sort();
console.log(instructor)


//spliting a array//
let userInfo= 'anthony,hernandez,07/16/1991/,anthernandez,chevy,76'

let userInfoarry =  userInfo.split(' ')
console.log(userInfoarry)

let userInfoAgain= userInfoarry.join('')

console.log(userInfoAgain)

