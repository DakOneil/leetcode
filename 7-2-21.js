// 1512. Number of Good Pairs

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

var numIdenticalPairs = function(nums) {
    let count = 0
    for (let i = 0 ; i < nums.length - 1 ; i++) {
        for (let j = i + 1 ; j < nums.length ; j++) {
            if (nums[i] == nums[j]) {
                count++
            }
        }
    }
    return count
};

// takes in an array of nums 
// returns a count 
/* the count should equal the number of matching pairs (i==j) in the array
where the indices are not equal, i < j. */




// 1480. Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

var runningSum = function(nums) {
    let arr = []
    for (let i = 0 ; i < nums.length ; i++) {
        let sum = 0
        for (let j = 0 ; j <= i ; j++) {
            sum += nums[j]
        }
        arr.push(sum)
    }
    return arr
};

// takes in an array of nums
// return an array of nums
// nums returned are a sum of the input arrays values
// declare the array to return
// run a for loop through the input array
// for loop will contain a sum that will total the values up to i
// push the sum to the return array 
// return the array
// nums will be between 1 and 1000 in length
// values in nums will be between +/- 10^6