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
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    insertAtTail(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    insertAtPosition(data, position) {
        const newNode = new Node(data);

        if (position === 1) {
            return this.insertAtHead(data);
        }

        let current = this.head;
        let i = 1;

        while (current !== null && i < position - 1) {
            current = current.next;
            i++;
        }

        if (current === null) {
            console.log("Position out of reach");
            return;
        }

        newNode.next = current.next;
        current.next = newNode;

        if (newNode.next === null) {
            this.tail = newNode;
        }
    }

    printResult() {
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
list.insertAtTail(25);         
list.insertAtPosition(15, 2);  

list.printResult();