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
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    insertAtTail(data) {
        let newNode = new Node(data);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    insertAtPosition(data, pos) {
        let newNode = new Node(data);
        if (pos === 1) {
            return this.insertHead(data);
        }
        let current = this.head;
        let count = 1;
        while (current && count < pos - 1) {
            current = current.next;
            count++;
        }
        if (!current) {
            console.log("Invalid Position");
            return;
        }
        newNode.next = current.next;
        current.next = newNode;

        if (newNode.next === null) {
            this.tail = newNode;
        }
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
list.insertAtHead(5);         
list.insertAtTail(10);       
list.insertAtPosition(15, 3);
list.insertAtPosition(20, 10);

list.printList();