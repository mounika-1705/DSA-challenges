// 🚀 Day 42 - DSA Challenge

// Hey Students 

// Welcome to Day 42 of your DSA journey!
// Today, let’s work on a problem that combines circular linked list, insertion, and traversal you’ll need to maintain sorted order and correctly handle the circular structure.

// 💡 Challenge - Insert into a Sorted Circular Linked List

// 👉 Requirements:
// * Given a sorted circular linked list, implement a function insert(head, insertVal) which inserts insertVal in the right position so the list stays sorted.
// * If the list is empty (head is null), create a new node with insertVal that points to itself.
// * After inserting, traverse the full circular list from the insertion point (or any reference point) to print all the node values in order until you come back to the starting node.

// ⚡ Input Example:

// Let the existing circular list be: 1 → 3 → 4 → 1 (circular)

// Insert 2  
// Traverse from head (head could be node with value 3 or 1)  


// ✅ Expected Output:

// 1 → 2 → 3 → 4 → 1  (print until coming back to start)

// Or (if starting from node 3):

// 3 → 4 → 1 → 2 → 3



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
  insert(insertVal) {
    let newNode = new Node(insertVal);
    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
      return;
    }
    let prev = this.head;
    let current = this.head.next;

    while (true) {
      if (prev.data <= insertVal && insertVal <= current.data) {
        break;
      }
      if (prev.data > current.data) {
        if (insertVal >= prev.data || insertVal <= current.data) {
          break;
        }
      }
      prev = current;
      current = current.next;
      if (prev === this.head) {
        break;
      }
    }
    prev.next = newNode;
    newNode.next = current;
  }
  traverse(start = this.head) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    const result = [];
    let current = start;
    do {
      result.push(current.data);
      current = current.next;
    } while (current !== start);

    result.push(start.data); // to show circular back to start
    console.log(result.join(" → "));
  }
}
let list = new CircularList();
list.insert(1);
list.insert(3);
list.insert(4);
list.traverse(list.head);  
list.insert(2);
console.log("After inserting 2:");
// Start from head = 1
list.traverse(list.head);  
// Start from node with value 3
console.log("Traversing from node with value 3:");
list.traverse(list.head.next.next);  
