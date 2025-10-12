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