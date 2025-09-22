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

  insert(data, position) {
    const newNode = new Node(data);
    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let temp = this.head;
    for (let i = 1; i < position - 1; i++) {
      if (temp === null) {
        console.log("Invalid position");
        return;
      }
      temp = temp.next;
    }

    if (temp === null) {
      console.log("Invalid position");
      return;
    }

    newNode.next = temp.next;
    temp.next = newNode;
  }

  delete(position) {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    if (position === 1) {
      this.head = this.head.next;
      return;
    }

    let temp = this.head;
    for (let i = 1; i < position - 1; i++) {
      if (temp === null || temp.next === null) {
        console.log("Invalid position");
        return;
      }
      temp = temp.next;
    }
    if (temp.next === null) {
      console.log("Invalid position");
      return;
    }
    temp.next = temp.next.next;
  }

  printList() {
    let temp = this.head;
    let result = [];
    while (temp) {
      result.push(temp.data);
      temp = temp.next;
    }
    console.log(result.join(" -> "));
  }
}

const ll = new LinkedList();
ll.insert(10, 1);
ll.insert(20, 1);
ll.insert(30, 2);
ll.delete(3);
ll.printList();  