// 🚀 Day 64 - DSA Challenge
// Topic: Hashing
// Problem: Find the First Non-Repeating Element in an Array

// Problem Statement:
// Given an array of integers, find the first element that does not repeat in the array.
// If all elements repeat, return -1.

// Example:
// Input:  
// arr = [9, 4, 9, 6, 7, 4]

// Output:  
// 6

// Input:  
// arr = [1, 2, 3, 2, 1, 3]

// Output:  
// -1

// Hint:
// Use a hash map (object in JS) to store the frequency of each element, and then iterate once more to find the first element with frequency 1.



function NonRepeating(arr) {
    
  const frequency = {};

  for (let num of arr) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  for (let num of arr) {
    if (frequency[num] === 1) {
      return num;
    }
  }

  return -1;
}

let arr1 = [9, 4, 9, 6, 7, 4]
console.log(NonRepeating(arr1));  

let arr2 = [1, 2, 3, 2, 1, 3]
console.log(NonRepeating(arr2));  
