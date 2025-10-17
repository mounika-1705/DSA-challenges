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
console.log(`\n "reversed output:"`);
myQueue.printQueue();
