class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  insertAtHead(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }

  insertAtTail(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }

  traverseForward() {
    let result = [];
    if (!this.head) return;
    let current = this.head;
    do {
      result.push(current.data);
      current = current.next;
    } while (current !== this.head);
    console.log(result.join(" → "));
  }

  traverseRounds(k) {
    const result = [];
    if (!this.head) return;
    let current = this.head;
    for (let i = 0; i < k * this.size; i++) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" → "));
  }
}
const players = new CircularList();
players.insertAtTail("Alice");
players.insertAtTail("Bob");
players.insertAtTail("Charlie");
players.insertAtHead("Zara");
players.traverseForward();         
players.traverseRounds(2); 
//players.traverseRounds(4);