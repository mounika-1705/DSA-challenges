class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
      return;
    }

    let current = this.head;
    if (value < this.head.data) {
      while (current.next !== this.head) {
        current = current.next;
      }
      
      current.next = newNode;
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    while (
      current.next !== this.head &&
      current.next.data < value
    ) 
    {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  delete(value) {
    if (!this.head) return;

    let current = this.head;
    let prev = null;
    if (this.head.data === value) {
      if (this.head.next === this.head) {
        this.head = null; 
        return;
      }
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = this.head.next;
      this.head = this.head.next;
      return;
    }
    prev = this.head;
    current = this.head.next;
    while (current !== this.head) {
      if (current.data === value) {
        prev.next = current.next;
        return;
      }
      prev = current;
      current = current.next;
    }
  }

  traverse() {
    let result = [];
    if (!this.head) return result;

    let current = this.head;
    do {
      result.push(current.data);
      current = current.next;
    } while (current !== this.head);

    return result;
  }
}

let scheduler = new CircularList();

scheduler.insert(3);
scheduler.insert(1);
scheduler.insert(2);
console.log(scheduler.traverse());  
scheduler.insert(0);
console.log(scheduler.traverse());  
scheduler.delete(2);
console.log(scheduler.traverse());  
scheduler.delete(5);
console.log(scheduler.traverse());  

