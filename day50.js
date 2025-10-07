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
  reverseLinkedList() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;   
      current.next = prev;   
      prev = current;        
      current = next;        
    }
    this.head = prev; 
  }
  show() {
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
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
//console.log("Linked List:", list.show());
list.reverseLinkedList();
console.log("Reversed Linked List:", list.show());