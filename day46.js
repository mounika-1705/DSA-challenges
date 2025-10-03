class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class TokenRing {
  constructor() {
    this.head = null;
  }

  addNode(nodeName) {
    let newNode = new Node(nodeName);

    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }
    current.next = newNode;
    newNode.next = this.head;
  }

  showNetwork() {
    if (!this.head) {
      console.log("No nodes in the network.");
      return;
    }

    let result = [];
    let current = this.head;
    do {
      result.push(current.data);
      current = current.next;
    } while (current !== this.head);

    console.log(result.join(" -> "));
  }

  passToken(k) {
    if (!this.head) {
      console.log("No nodes available to pass token.");
      return;
    }

    let current = this.head;
    for (let i = 0; i < k; i++) {
      console.log("Token at: " + current.data);
      current = current.next;
    }
  }
}


let network = new TokenRing();
network.addNode("ComputerA");
network.addNode("ComputerB");
network.addNode("ComputerC");
network.showNetwork();
network.passToken(6);