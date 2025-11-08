// 🚀 Day 31 – DSA Challenge

// Hey Students 

// DSA Challenge Resumes

// Welcome to Day 31 of our DSA challenge streak! 
// You’re not just learning DSA  you’re building an engineer’s problem-solving mindset step by step. Keep the energy high .

// 💡 Today’s Challenge - Linked List Deletion by Value & Position

// Implement the following operations on a Singly Linked List:

// 1️⃣ Insert a node at the end
// 2️⃣ Insert a node at the beginning
// 3️⃣ Delete a node by value (delete the first occurrence of the given value)
// 4️⃣ Delete a node at a given position (1-based index)

// Input Example:

// Insert 10 at end  
// Insert 20 at end  
// Insert 30 at end  
// Insert 5 at beginning  
// Delete node with value 20  
// Delete node at position 2  
// Print Linked List




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
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtTail(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    deleteByValue(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            return;
        }
        let current = this.head.next;
        let prev = this.head;
        while (current) {
            if (current.data === data) {
                prev.next = current.next;
                if (!current.next) this.tail = prev;
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    getLength() {
        let current = this.head;
        let count = 0;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    deleteAtPosition(index) {
        let length = this.getLength();
        if (index < 1 || index > length) {
            console.log("Invalid Deletion");
            return;
        }

        if (index === 1) {
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            return;
        }

        let current = this.head;
        let count = 1;
        while (current && count < index - 1) {
            current = current.next;
            count++;
        }
        let delNode = current.next;
        current.next = delNode.next;

        if (!current.next) this.tail = current;
    }
    
    printList() {
        let result = "";
        let current = this.head;
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null");
        return result + "null";
    }
}
let list = new LinkedList();
list.insertAtTail(10);
list.insertAtTail(20);
list.insertAtTail(30);
list.insertAtHead(5);   // 5 -> 10 -> 20 -> 30 -> null
list.deleteByValue(20);     // 5 -> 10 -> 30 -> null
list.deleteAtPosition(2);
list.printList();