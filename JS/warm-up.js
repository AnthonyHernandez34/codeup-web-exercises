// Write a function called findAverage that takes in an array of integers representing grades and returns the average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)

function findAverage(){
    var average = arr => arr.reduce( ( a, b ) => a + b, 0 ) / arr.length;

    var result = average( [ 95, 74, 86 ,100] ); // 4

    console.log(result);
}
findAverage()