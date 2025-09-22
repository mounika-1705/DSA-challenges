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
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) this.tail = newNode;
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
    getLength() {
        let count = 0, current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
    insertAtPosition(data, pos) {
        let newNode = new Node(data);
        let length = this.getLength();
        if (pos < 1 || pos > length + 1) {
            console.log("Invalid insertion");
            return;
        }
        if (pos === 1) return this.insertAtHead(data);
        let current = this.head;
        let count = 1;
        while (current !== null && count < pos - 1) {
            current = current.next;
            count++;
        }
        newNode.next = current.next;
        current.next = newNode;
        if (newNode.next === null) this.tail = newNode;
    }
     deleteFromStart() {
        if (!this.head) return;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
    }
    deleteFromEnd() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            return;
        }
        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }
        current.next = null;
        this.tail = current;
    }
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data;
            if (current.next) result += " -> ";
            current = current.next;
        }
        console.log(result || "Empty List");
    }
}
const list = new LinkedList();
list.insertAtTail(10);
list.insertAtTail(20);   //10 -> 20
list.insertAtHead(5)     //5 -> 10 -> 20
list.deleteFromEnd();    //5 -> 10
list.deleteFromStart();
list.printList();         