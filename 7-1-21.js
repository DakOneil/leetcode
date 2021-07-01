// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0
 

// Constraints:

// -231 <= x <= 231 - 1

var reverse = function(x) {
    // check if value is above/below 0 and run appropriate function to get return value
    if (x > 0) {
        x = Number(x.toString().split('').reverse().join(''))    
    } else {
        x = 0-x ;
        x = Number(x.toString().split('').reverse().join(''))    
        x = 0-x
    }
    //check that return value is within constraints and either return it or 0 as requested
    return Math.abs(x) < 2**31 ? x : 0
};