// 🚀 Day 66 - DSA Challenge
// Topic: Hashing
// Problem: Longest Consecutive Sequence

// Problem Statement:
// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example:
// Input:  
// nums = [100, 4, 200, 1, 3, 2]

// Output:  
// 4

// Explanation:  
// The longest consecutive sequence is [1, 2, 3, 4].  
// Hence, the length is 4.

// Input:  
// nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

// Output:  
// 9

// Explanation:  
// The longest consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8].


// 💡 Hint:
// * Use a HashSet to store all numbers.
// * Iterate through the array, and for each number num,
// * check if num - 1 exists in the set.
// * If it doesn’t, it means this is the start of a new sequence.
// * Then, count how long this consecutive sequence continues.

// Requirements:
// * Solve in O(n) time complexity.
// * Don’t sort the array.
// * Use only hashing techniques (HashSet / HashMap).


function Consecutive(nums) {
 
  const numSet = new Set(nums);
  let longest = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let count = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        count += 1;
      }

      longest = Math.max(longest, count);
    }
  }
  return longest;
}

let nums1 = [100, 4, 200, 1, 3, 2];
console.log(Consecutive(nums1)); 

let nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(Consecutive(nums2)); 