// 🚀 Day 53 - DSA Challenge

// Hey Students 

// Welcome to Day 53 of your DSA journey!
// Today, we’re diving into one of the most fundamental and powerful data structures the Stack. 

// 💡 Today’s Challenge - Implement a Stack and Perform All Operations

// A Stack is a LIFO (Last In, First Out) data structure - the element inserted last is the first to be removed.
// You’ll implement your own stack and perform Push, Pop, Peek, and Display operations.

// 👉 Requirements:

// 1. Implement Stack using Array or Linked List (your choice).
// 2. Perform the following operations:
// * Push: Add an element to the stack.
// * Pop: Remove the top element.
// * Peek/Top: View the top element without removing it.
// * Display: Print all elements of the stack.
// 3. Handle edge cases:
// * Stack Overflow (if using fixed size array).
// * Stack Underflow (when trying to pop from empty stack).

// ⚡ Example Input:

// Push(10)  
// Push(20)  
// Push(30)  
// Pop()  
// Push(40)  
// Peek()  
// Display()

// ✅ Expected Output:

// Pushed 10  
// Pushed 20  
// Pushed 30  
// Popped 30  
// Pushed 40  
// Top element: 40  
// Stack elements: 40 20 10

// 🔎 Hint:
// * For Array implementation → use an index variable (top) to track the stack’s top.
// * Remember: Push adds at the top, Pop removes from the top.




class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
    return `Pushed ${element}`;
  }

  pop() {
    if (this.items.length === 0) {
      return "Stack Underflow";
    }
    return `Popped ${this.items.pop()}`;
  }

  peek() {
    if (this.items.length === 0) {
      return "Stack is empty";
    }
    return `Top element: ${this.items[this.items.length - 1]}`;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printStack() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return `Stack elements: ${this.items.slice().reverse().join(" ")}`;
  }
}

const stack = new Stack();

console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.push(30));
console.log(stack.pop());
console.log(stack.push(40));
console.log(stack.peek());
console.log(stack.printStack());