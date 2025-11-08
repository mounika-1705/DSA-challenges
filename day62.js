// 🚀 Day 62 - DSA Challenge: Reverse a String Using Queue

// Hey Students 

// Welcome to Day 62 of your DSA journey!
// This challenge helps strengthen your understanding of enqueue and dequeue operations while improving logical thinking.

// 💡 Problem Statement

// Given a string, reverse it using a Queue data structure.
// You’re not allowed to use built-in reverse functions only queue operations!

// Example
// Input:
// "hello"

// Output:
// "olleh"

// Requirements
// 1. Enqueue all characters of the string into the queue.
// 2. Dequeue them one by one and push them into a stack (to reverse order).
// 3. Pop from the stack and build the reversed string.
// 4. Finally, print the reversed string.

// Hint
// * Queue maintains FIFO (First In First Out) order.
// * Stack maintains LIFO (Last In First Out) order.
// * Combining both gives you a reversed result a simple but powerful concept!


function Reverse(str) {

  const stack = [];
  const Queue = [];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    Queue.push(str[i]);
  }

  while (Queue.length > 0) {
    let removedStr = Queue.shift();
    stack.push(removedStr);
  }

  while (stack.length > 0) {
    let removedStr = stack.pop();
    result += removedStr;
  }

  return result;
}

console.log(Reverse("Hello")); 

