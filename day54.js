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