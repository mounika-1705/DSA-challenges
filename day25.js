// ✅ Day 25 DSA Challenge

// 📌 Problem Statement:
// Today’s task is to implement insertion operations in a Singly Linked List.
// You need to write functions for the following:

// Insert at Head – Add a new node at the beginning of the linked list.

// Insert at Tail – Add a new node at the end of the linked list.

// Insert at Position – Add a new node at a given position (index-based).

// 📥 Input / Operations:

// Start with an empty linked list.

// Perform the above insert operations.

// Print the list after each operation.

// 📤 Output:

// The final linked list after all operations.

// Example:

// Insert 10 at head → List: 10 -> null
// Insert 20 at tail → List: 10 -> 20  -> null
// Insert 15 at position 2 → List: 10 -> 15 -> 20 -> null





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

    insertAtHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.printList();
    }
    insertAtTail(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.printList();
    }

    insertAtPosition(data, position) {
        if (position === 0) {
            this.insertAtHead(data);
            return;
        }
        const newNode = new Node(data);
        let current = this.head;
        let count = 0;

       
        while (current !== null && count < position - 1) {
            current = current.next;
            count++;
        }

        if (current === null) {
            console.log("Position out of range!");
            return;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.printList();
    }
    printList() {
        let result = "";
        let current = this.head;
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }
        result += "null";
        console.log(result);
    }
}
let list = new LinkedList();
list.insertAtHead(10);        
list.insertAtTail(20);        
list.insertAtPosition(15, 1); 