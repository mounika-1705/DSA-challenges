class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class CircularList {
  constructor() {
    this.head = null;
  }
  insert(insertVal) {
    let newNode = new Node(insertVal);
    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
      return;
    }
    let prev = this.head;
    let current = this.head.next;

    while (true) {
      if (prev.data <= insertVal && insertVal <= current.data) {
        break;
      }
      if (prev.data > current.data) {
        if (insertVal >= prev.data || insertVal <= current.data) {
          break;
        }
      }
      prev = current;
      current = current.next;
      if (prev === this.head) {
        break;
      }
    }
    prev.next = newNode;
    newNode.next = current;
  }
  traverse(start = this.head) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    const result = [];
    let current = start;
    do {
      result.push(current.data);
      current = current.next;
    } while (current !== start);

    result.push(start.data); // to show circular back to start
    console.log(result.join(" → "));
  }
}
let list = new CircularList();
list.insert(1);
list.insert(3);
list.insert(4);
list.traverse(list.head);  
list.insert(2);
console.log("After inserting 2:");
// Start from head = 1
list.traverse(list.head);  
// Start from node with value 3
console.log("Traversing from node with value 3:");
list.traverse(list.head.next.next);  
