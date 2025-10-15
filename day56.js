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

class Temperatures {
  WaitDays(temperatures) {
    const n = temperatures.length;
    const stack = new Stack(); 
    const result = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
        const prevIndex = stack.pop();
        result[prevIndex] = i - prevIndex;
      }
      stack.push(i); 
    }
    return result;
  }
}

const temps = new Temperatures();
let temp1 = [73, 74, 75, 71, 69, 72, 76, 73];
let temp2 = [30, 40, 50, 60];

console.log("Input:", temp1);
console.log("Next warmer days:", temps.WaitDays(temp1)); 
console.log("Input:", temp2);
console.log("Next warmer days:", temps.WaitDays(temp2)); 



