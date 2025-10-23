class CircularQueue {
  constructor(size) {
    this.size = size;
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  enqueue(value) {
    if (this.isFull()) {
      return false;
    }

    if (this.isEmpty()) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      return false;
    }

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return true;
  }

  peek() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue[this.front];
  }

  Rear() {
    if (this.isEmpty()) {
      return -1;
    }
    
    return this.queue[this.rear];
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }
}

const Queue = new CircularQueue(3);

Queue.enqueue(10); 
Queue.enqueue(20);
Queue.enqueue(30);        //[10, 20, 30]-full
console.log(Queue.enqueue(40)); 
console.log(Queue.Rear());      
console.log(Queue.isFull());    
Queue.dequeue();  
console.log(Queue.enqueue(40)); 
console.log(Queue.Rear());      