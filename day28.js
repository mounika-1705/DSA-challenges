// 🚀 Day 28 - DSA Challenge 

// 📌 Topic: Linked List

// You are given a singly linked list representing roll numbers of students. Implement the following rules:

// Insert a new student roll number at any given position.

// If position = 1 → insert at head.

// If position = length+1 → insert at tail.

// Otherwise → insert at that middle position.

// If the given position is invalid (<1 or > length+1), print "Invalid Position".

// If the roll number already exists, print "Duplicate Entry Not Allowed".

// After successful insertion, print the linked list.

// Example:
// Input: 1 -> 2 -> 4 -> 5, Insert 3 at position 3
// Output:
// 1 -> 2 -> 3 -> 4 -> 5





class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertAtHead(data) {
        if (this.Duplicates(data)) {
            console.log("Duplicate Entry Not Allowed");
            return;
        }
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.printList();
    }
    insertAtTail(data) {
        if (this.Duplicates(data)) {
            console.log("Duplicate Entry Not Allowed");
            return;
        }

        let newNode = new Node(data);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.printList();
    }
    getLength() {
        let count = 0, current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
    insertAtPosition(data, pos) {
        if (this.Duplicates(data)) {
            console.log("Duplicate Entry Not Allowed");
            return;
        }

        let length = this.getLength();
        if (pos < 1 || pos > length + 1) {
            console.log("Invalid Position");
            return;
        }

        if (pos === 1) return this.insertAtHead(data);
        if (pos === length + 1) return this.insertAtTail(data);
        let newNode = new Node(data);
        let current = this.head;
        let count = 1;
        while (current && count < pos - 1) {
            current = current.next;
            count++;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.printList();
    }
    Duplicates(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) return true;
            current = current.next;
        }
        return false;
    }
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

let list = new LinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(4);
list.insertAtTail(5);
list.insertAtPosition(3, 3);
list.insertAtTail(2,2);
list.insertAtPosition(8, 8); 