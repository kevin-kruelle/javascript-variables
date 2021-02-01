/*

const daysPerYear = 365;

const hoursPerDay = 24;

console.log(hoursPerDay)

console.log(daysPerYear);

const hoursPerYear = daysPerYear * hoursPerDay; 

console.log(hoursPerYear) 

const minutesPerHour = 60;

const minutesPerDay = minutesPerHour * hoursPerDay;

console.log(minutesPerDay)

const secondsPerMinute = 60;

const secondsPerDay = secondsPerMinute * minutesPerDay;

console.log(secondsPerDay);

const secondsPerWeek = secondsPerDay * 7;

const secondsPerYear = secondsPerWeek * 52;
console.log(secondsPerYear);
const square = prompt("Input a number 1-10")

console.log(Math.pow(square, 2))

const circle = prompt("Input a number 1-10")

console.log(Math.pow(circle, 2))



const width = prompt('Give me a number value between 1 - 10')
const height = prompt('Give me another number value between 10 - 20')

 const rectangle = height * width;
 console.log(rectangle)
*/
const num = prompt("Guess a number 1-10")
 const randomNumber = Math.floor(Math.random());
 console.log(randomNumber)
if( num === randomNumber) {
    console.log("Congratulations!") 

} else{
    console.log("Nope")
}