// Maximum subarray sum

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr){
    // ...
    if (arr.length == 0 ) return 0
    if (arr.every(n=>n>=0)) return arr.reduce((acc,c)=>acc+c)
    else if (arr.every(n=>n<0)) return 0
    else {
      let arrSums = []
      arr.forEach(n=>arrSums.push(n))
      for (let i = 0 ; i < arr.length - 1 ; i++) {
        for (let j = i+1 ; j <= arr.length ; j++) {
          let testArr = arr.slice(i,j)
          arrSums.push(testArr.reduce((acc,c)=>acc+c))
        }
      }
      return arrSums.sort((a,b)=>b-a)[0]
    }
  }
  
  