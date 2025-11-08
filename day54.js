// 🚀 Day 54 - DSA Challenge

// Hey Students

// Welcome to Day 54 of your DSA journey!

// 💡Today’s Challenge - Check for Balanced Parentheses

// This is a very common interview problem asked by top tech companies to test your stack logic and problem-solving skills.

// Problem Statement:
// Given a string containing only the characters '(', ')', '{', '}', '[', and ']', determine whether the input string is valid.
// A string is considered valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

// ⚡ Example 1:

// Input: "()[]{}"
// Output: Valid

// ⚡ Example 2:

// Input: "(]"
// Output: Invalid

// ⚡ Example 3:

// Input: "{[()]}"
// Output: Valid

// Hint:
// * Use a stack to keep track of opening brackets.
// * When a closing bracket appears, check if the top of the stack has the matching opening bracket.
// * If yes, pop it; otherwise, return invalid.
// * In the end, if the stack is empty → the string is valid.




class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class Parentheses {
  constructor() {
    this.stack = new Stack();
  }

  isValid(expression) {
    const pairs = {
      ')': '(',
      '}': '{',
      ']': '['
    };

    for (let bracket of expression) {
      if (['(', '{', '['].includes(bracket)) {
        this.stack.push(bracket);
      } else if ([')', '}', ']'].includes(bracket)) {
        if (this.stack.isEmpty() || this.stack.pop() !== pairs[bracket]) {
          return "Invalid";
        }
      }
    }
    return this.stack.isEmpty() ? "Valid" : "Invalid";
  }
}

const check = new Parentheses();
console.log(check.isValid("()[]{}"));   
console.log(check.isValid("(]"));       
console.log(check.isValid("{[()]}"));   