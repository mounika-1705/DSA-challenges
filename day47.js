// 🚀 Day 47 - DSA Challenge

// 💡 Today’s Challenge - Modify Circular Linked List (Insertion, Deletion & Traversal)

// Imagine you’re maintaining a circular list of process IDs in an operating system scheduler. The list must always remain sorted for efficient scheduling. You need to support the following operations:

// 👉 Requirements:
// 1. insert(value) → Insert a new process ID into the list in sorted order.
// 2. delete(value) → Remove one occurrence of a given process ID if it exists.
// 3. traverse() → Display all process IDs in the scheduler by traversing the circular list once.

// ⚡ Input Example

// insert(3)  
// insert(1)  
// insert(2)  
// traverse()  
// insert(0)  
// traverse()  
// delete(2)  
// traverse()  
// delete(5)  
// traverse()  


// ✅ Expected Output

// [1, 2, 3]  
// [0, 1, 2, 3]  
// [0, 1, 3]  
// [0, 1, 3]   // unchanged since 5 not found
// 


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

