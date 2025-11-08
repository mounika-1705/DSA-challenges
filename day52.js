// 🚀 Day 52 - DSA Challenge

// Hey Students 

// Welcome to Day 52 of your DSA journey!
// Today’s problem is a fun, interview-style challenge using Doubly Linked Lists.

// 💡 Today’s Challenge - Reverse a Name using Doubly Linked List 

// Imagine you are storing a person’s name in a Doubly Linked List, where each character is stored as a node. Your task is to print the name in reverse by traversing backward.

// 👉 Requirements:
// 1. Insert each character of the name into a Doubly Linked List.
// 2. Traverse forward to print the name normally.
// 3. Think of how you can reverse name in Doubly 

// ⚡ Input Example

// Name: "ASIA"


// ✅ Expected Output

// Forward Traversal: A -> S -> I -> A
// Backward Traversal: A -> I -> S -> A





class Node {
  constructor(char) {
    this.char = char;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertChar(char) {
    const newNode = new Node(char);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  traverseForward() {
    let result = [];
    let temp = this.head;
    while (temp) {
      result.push(temp.char);
      temp = temp.next;
    }
    console.log("Forward Traversal:", result.join(" -> "));
  }

  traverseBackward() {
    let result = [];
    let temp = this.tail;
    while (temp) {
      result.push(temp.char);
      temp = temp.prev;
    }
    console.log("Backward Traversal:", result.join(" -> "));
  }
}

const name = new DoublyLinkedList();
const data = "MOUNIKA";
for (let ch of data) {
  name.insertChar(ch);
}

name.traverseForward();
name.traverseBackward();