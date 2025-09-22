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