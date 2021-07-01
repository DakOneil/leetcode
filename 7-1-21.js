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





// 9. Palindrome Number

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?

var isPalindrome = function(x) {
    if (Math.abs(x) < 2**31 && x >= 0) {
        return x === Number(x.toString().split('').reverse().join(''))
    } else return false
};