// 🚀 Day 18 - DSA Challenge

// Topic: Arrays - Sliding Window (Optimized Approach)

// Problem:
// "Longest Subarray with Sum ≤ K"
// Given an integer array nums and an integer k, return the length of the longest subarray whose sum is less than or equal to k.

// Input:  nums = [4, 2, 1, 7, 8, 1, 2, 8, 1], k = 8  
// Output: 3  
// Explanation:  
// Possible subarrays with sum ≤ 8:  
// [4, 2, 1] → sum = 7 → length = 3  
// [2, 1, 5] → sum = 8 → length = 3  
// No subarray with length > 3 has sum ≤ 8.  

// Task:
// Solve this using the optimized Sliding Window technique. Avoid brute force.

// Expected Time Complexity:
// O(n)


const arr = [4, 2, 1, 7, 8, 1, 2, 8, 1];
const k = 8;

function slidingWindow(arr, k) {
    let result = 0;
    let windowSum = 0;
    let left = 0;

    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i];

        while (windowSum > k) {
            windowSum -= arr[left];
            left++;
        }
        result = Math.max(result, i - left + 1);
    }
    return result;
}
console.log(slidingWindow(arr, k));