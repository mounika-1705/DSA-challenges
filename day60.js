// 🚀 Day 60 DSA Challenge – First Negative Integer
//  in Every Window of Size - K

// 💡 Problem Statement

// You are given an array A of integers and an integer K representing the window size.
// For each contiguous subarray (window) of size K, find the first negative integer in that window.
// If a window doesn’t contain any negative integer, print 0 for that window.

// You must solve this using a Queue to efficiently manage the sliding window.

//  Example
// Input:
// A = [12, -1, -7, 8, -15, 30, 16, 28]  
// K = 3

// Output:
// -1 -1 -7 -15 -15 0

// Explanation
// Window-wise breakdown 👇

// Window	   Elements	First Negative
// 1	          [12, -1, -7]        -1
// 2	          [-1, -7, 8]	   -1
// 3	          [-7, 8, -15]	   -7
// 4	          [8, -15, 30]	   -15
// 5	          [-15, 30, 16]	  -15
// 6	          [30, 16, 28]	   0


//  Requirements
// 1. Traverse the array using a sliding window of size K.
// 2. Use a queue to store indices of negative numbers.
// 3. As the window slides:
// * Remove elements that are out of the current window.
// * If the front of the queue is the first negative element, record it.
// * If no negative element is found, record 0.
// 4. Output the first negative integer for each window.





function Negative(arr, K) {
  const n = arr.length;
  const queue = [];
  const result = [];

  for (let i = 0; i < K; i++) {
    if (arr[i] < 0) {
      queue.push(i);
    }
  }
  
  for (let i = K; i <= n; i++) {
    if (queue.length > 0) {
      result.push(arr[queue[0]]);
    } else {
      result.push(0);
    }

    while (queue.length > 0 && queue[0] <= i - K) {
      queue.shift();
    }

    if (i < n && arr[i] < 0) {
      queue.push(i);
    }
  }

  return result;
}

const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const K = 3;
console.log(Negative(arr, K).join(" "));

