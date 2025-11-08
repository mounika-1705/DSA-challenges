// 🚀 Day 55 - DSA Challenge

// Hey Students 

// Welcome to Day 55 of your DSA journey!

// 💡 Today’s Challenge - Next Greater Element

// Problem Statement:
// Given an array of integers, for each element, find the next greater element to its right. If no greater element exists, return -1 for that element.

// 👉 Example 1:
// Input: [4, 5, 2, 25]
// Output: [5, 25, 25, -1]

// Explanation:
// 4 → next greater is 5
// 5 → next greater is 25
// 2 → next greater is 25
// 25 → no greater → -1

// 👉 Example 2:
// Input: [13, 7, 6, 12]
// Output: [-1, 12, 12, -1]

// Hint / Approach:
// * Use a stack to keep track of elements for which we haven’t found the next greater element.
// * Traverse the array from left to right:
// * While the stack is not empty and the current element is greater than the top of stack, pop from stack and set the current element as the next greater.
// * Push the current element onto the stack.
// * After traversing the array, all remaining elements in the stack have no next greater → assign -1.


class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class Greater {
  findGreater(arr) {
    const stack = new Stack();
    const result = new Array(arr.length).fill(-1);

    for (let i = 0; i < arr.length; i++) {
      while (!stack.isEmpty() && arr[i] > arr[stack.peek()]) {
        const index = stack.pop();
        result[index] = arr[i];
      }
      stack.push(i);
    }
    return result;
  }
}

const elements = new Greater();
let list1 = [4, 5, 2, 25];
let list2 = [13, 7, 6, 12];

console.log("Input:", list1);
console.log("Next Greater:", elements.findGreater(list1)); 
console.log("Input:", list2);
console.log("Next Greater:", elements.findGreater(list2)); 
