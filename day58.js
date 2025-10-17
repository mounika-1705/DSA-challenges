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

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printQueue() {
    return this.items.join(" -> ");
  }
}

const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);               
console.log(myQueue.dequeue());   //[20, 30]
myQueue.enqueue(40);              //[20, 30, 40]
console.log(myQueue.peek());   
console.log("length:", myQueue.size());    