class Node {
  constructor(char) {
    this.char = char;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertChar(char) {
    const newNode = new Node(char);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  traverseForward() {
    let result = [];
    let temp = this.head;
    while (temp) {
      result.push(temp.char);
      temp = temp.next;
    }
    console.log("Forward Traversal:", result.join(" -> "));
  }

  traverseBackward() {
    let result = [];
    let temp = this.tail;
    while (temp) {
      result.push(temp.char);
      temp = temp.prev;
    }
    console.log("Backward Traversal:", result.join(" -> "));
  }
}

const name = new DoublyLinkedList();
const data = "MOUNIKA";
for (let char of data) {
  name.insertChar(ch);
}

name.traverseForward();
name.traverseBackward();