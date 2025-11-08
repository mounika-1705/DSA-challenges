// 🚀 Day 17 - DSA Challenge

// Topic: Arrays - Sliding Window Technique

// Today’s Challenge:
// We’ve already explored some foundational sliding window problems. Now, let’s level up a bit with a medium-difficulty question.

// Problem:
// "Longest Subarray with Sum ≤ K"
// Given an integer array nums and an integer k, return the length of the longest subarray whose sum is less than or equal to k.

// Input: nums = [2, 1, 5, 1, 3, 2], k = 8  
// Output: 4  
// Explanation: The subarray [1, 5, 1, 3] has a sum of 10 (too large),  
// but [2, 1, 5] has sum 8 and length 3,  
// [1, 5, 1, 3] → sum = 10 (invalid),  
// Longest valid length is 4 ([1, 5, 1, 1] or [5, 1, 3, 2] etc.).

// Instructions:
// First, solve using the Brute Force approach.


let nums = [2, 1, 5, 1, 3, 2];
let k = 8;

function longestSubarray(nums, k) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum <= k) {
                result = Math.max(result, j - i + 1);
            }
        }
    }

    return result;
}
console.log(longestSubarray(nums, k)); 