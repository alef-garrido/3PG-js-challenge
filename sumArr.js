/*
Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.

Use Array.prototype.map() to map each element to the value returned by fn.
Use Array.prototype.reduce() to add each value to an accumulator, initialized with a value of 0.
*/

let arr = [1,2,3,4,5,'']
let accumulator = 0

const sumArr = arr.map(num => typeof num === 'number' ? num : 0)

const result = sumArr.reduce((current, next) => {
    return accumulator = current + next
})

console.log(accumulator)