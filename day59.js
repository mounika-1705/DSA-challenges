// 🚀 Day 59: DSA Challenge - Reverse First K Elements of a Queue
// Problem Statement

// Given an integer K and a Queue of integers, your task is to reverse the first K elements of the queue while leaving the other elements in the same relative order.

// 🔹 Example
// Input:
// Queue: [10, 20, 30, 40, 50]
// K = 3

// Output:
// [30, 20, 10, 40, 50]

// Explanation:
// * The first 3 elements (10, 20, 30) are reversed → [30, 20, 10]
// * The remaining elements (40, 50) stay as they are.

// ✅ Requirements
// * Use a queue data structure.
// * You may use an auxiliary stack to help with reversal.
// * The final order of the queue should maintain the correct relative order for elements beyond the first K.

// Handle edge cases:
// * K = 0 (no change)
// * K > size of queue (reverse entire queue)
// * Empty queue

// Hints
// * Dequeue the first K elements and push them into a stack.
// * Pop all elements from the stack and enqueue them back (this reverses them).
// * Move the remaining (n - K) elements from front to rear to maintain order.



class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printQueue() {
    console.log(this.items);
  }
}

function reverseK(queue, k) {
  if (queue.isEmpty() || k <= 0) {
    return queue;
  }

  if (k > queue.size()) {
    k = queue.size(); 
  }

  const stack = [];
  for (let i = 0; i < k; i++) {
    stack.push(queue.dequeue());
  }

  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }

  const remaining = queue.size() - k;
  for (let i = 0; i < remaining; i++) {
    queue.enqueue(queue.dequeue());
  }

  return queue;
}

const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.enqueue(50);
console.log("original output:");
myQueue.printQueue();
const k = 3;
reverseK(myQueue, k);
console.log(`\nreversed output:`);
myQueue.printQueue();
