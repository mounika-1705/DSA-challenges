// 📢 Day 29 - DSA Challenge

// Hey Students 

// Today’s challenge is all about Linked Lists. You have already practiced insertion now let’s go one step ahead 🚀

// Problem Statement

// Implement a Linked List with the following operations:
// 1. Insert a node at any given position
// 2. Delete a node from any given position
// 3. Print the entire linked list

// 🔹 Input Example:
// Insert 10 at position 1  
// Insert 20 at position 2  
// Insert 30 at position 2  
// Delete node at position 1
// Print Linked List

// 🔹 Output Example:
// 20 -> 30

// ⚡ Hint:

// Handle edge cases properly (inserting at head, deleting last element, invalid positions).

// Think about how next pointers will change when you insert/delete.




class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data, position) {
    const newNode = new Node(data);
    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let temp = this.head;
    for (let i = 1; i < position - 1; i++) {
      if (temp === null) {
        console.log("Invalid position");
        return;
      }
      temp = temp.next;
    }

    if (temp === null) {
      console.log("Invalid position");
      return;
    }

    newNode.next = temp.next;
    temp.next = newNode;
  }

  delete(position) {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    if (position === 1) {
      this.head = this.head.next;
      return;
    }

    let temp = this.head;
    for (let i = 1; i < position - 1; i++) {
      if (temp === null || temp.next === null) {
        console.log("Invalid position");
        return;
      }
      temp = temp.next;
    }
    if (temp.next === null) {
      console.log("Invalid position");
      return;
    }
    temp.next = temp.next.next;
  }

  printList() {
    let temp = this.head;
    let result = [];
    while (temp) {
      result.push(temp.data);
      temp = temp.next;
    }
    console.log(result.join(" -> "));
  }
}

const ll = new LinkedList();
ll.insert(10, 1);
ll.insert(20, 1);
ll.insert(30, 2);
ll.delete(3);
ll.printList();  