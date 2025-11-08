// 🚀 Day 65 - DSA Challenge
// Topic: Hashing
// Problem: Subarray with Given Sum

// Problem Statement:
// Given an array of integers and an integer target, find whether there exists a subarray (contiguous elements) whose sum equals the target value.

// If such a subarray exists, return true; otherwise, return false.

// Example:
// Input:  
// arr = [10, 2, -2, -20, 10]  
// target = -10  

// Output:  
// true  

// Explanation:  
// Subarray [10, 2, -2, -20] sums to -10

// Input:  
// arr = [1, 4, 20, 3, 10, 5]  
// target = 33  

// Output:  
// true  

// Explanation:  
// Subarray [20, 3, 10] sums to 33


// Hint:
// * Use a HashMap to store the prefix sums as you traverse the array.
// * For each element, check if currentSum - target has been seen before.
// * If yes → a subarray with the given sum exists.


function subarray(arr, target) {

  const prefixSum = new Set();
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum === target) {
      return true;
    }

    if (prefixSum.has(currentSum - target)) {
      return true;
    }
    prefixSum.add(currentSum);
  }
  
  return false;
}

let arr1 = [10, 2, -2, -20, 10];
let target1 = -10;
console.log(subarray(arr1, target1));

let arr2 = [1, 4, 20, 3, 10, 5];
let target2 = 33;
console.log(subarray(arr2, target2));
