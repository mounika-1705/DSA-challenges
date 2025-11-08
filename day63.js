// 🚀 Day 63 - DSA Challenge

// Problem: Check if Two Arrays are Equal or Not (using Hashing)

// Problem Statement:
// Given two arrays A and B of the same size N, check whether both arrays are equal or not.
// Two arrays are considered equal if both contain the same elements with the same frequency, though the order may differ.

// Example:

// Input:  
// A = [1, 2, 5, 4, 0]  
// B = [2, 4, 5, 0, 1]

// Output:  
// Yes

// Input:  
// A = [1, 2, 5]  
// B = [2, 4, 15]

// Output:  
// No

// Hint:
// Use a hash map (object in JS) to count the frequency of each element in both arrays and then compare the maps.



function Equality(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return "No";
  }

  const frequency1 = {};
  const frequency2 = {};

  for (let num of arr1) {
    frequency1[num] = (frequency1[num] || 0) + 1;  //count in arr1
  }

  for (let num of arr2) {
    frequency2[num] = (frequency2[num] || 0) + 1;   //count in arr2
  }

  for (let key in frequency1) {
    if (frequency1[key] !== frequency2[key]) {  //comparing arr1,2
      return "No";
    }
  }

  return "Yes";
}

let A = [1, 2, 5, 4, 0];
let B = [2, 4, 5, 0, 1];
console.log(Equality(A, B));  

A = [1, 2, 5];
B = [2, 4, 15];
console.log(Equality(A, B));  