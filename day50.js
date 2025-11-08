// 🚀 Day 50 - DSA Challenge

// Hey Students 

// Welcome to Day 50 of your DSA journey!

// 💡 Today’s Challenge - Reverse a Linked List

// Imagine you are building a playlist app or task manager. For certain features, you need to reverse the order of your items efficiently.

// 👉 Requirements:
// 1. Given a singly linked list, reverse it in-place (without using extra arrays).
// 2. Implement a function reverseLinkedList(head) that returns the new head after reversal.
// 3. Traverse the reversed list to display all node values.

// ⚡ Input Example

// Linked List: 1 -> 2 -> 3 -> 4 -> 5


// ✅ Expected Output

// Reversed Linked List: 5 -> 4 -> 3 -> 2 -> 1



class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }
  reverseLinkedList() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;   
      current.next = prev;   
      prev = current;        
      current = next;        
    }
    this.head = prev; 
  }
  show() {
    if (!this.head) return "List is empty";
    let temp = this.head;
    let result = [];
    while (temp) {
      result.push(temp.value);
      temp = temp.next;
    }
    return result.join(" -> ");
  }
}
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
//console.log("Linked List:", list.show());
list.reverseLinkedList();
console.log("Reversed Linked List:", list.show());