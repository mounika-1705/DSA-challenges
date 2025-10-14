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
