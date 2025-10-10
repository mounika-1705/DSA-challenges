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

findMiddle() {
    if (!this.head) return "List is empty";

    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return `Middle Node: ${slow.value}`;
}

display() {
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

const list1 = new LinkedList();

list1.addNode(1);
list1.addNode(2);
list1.addNode(3);
list1.addNode(4);
list1.addNode(5);
console.log("Linked List:", list1.display());
console.log(list1.findMiddle()); 


const list2 = new LinkedList();
list2.addNode(10);
list2.addNode(20);
list2.addNode(30);
list2.addNode(40);
list2.addNode(50);
list2.addNode(60);
console.log("Linked List:", list2.display());
console.log(list2.findMiddle()); 